import { useRouter } from "next/router";
import { useContext } from "react";
import { type Site } from "~/server/api/routers/sites";
import { api } from "~/utils/api";
import Switch from "../Switch";
import Toggle from "../Toggle";
import styles from "./Header.module.css";
import { PuffinsContext } from "./Layout";

type HeaderProps = {
	switchThemes: () => void;
};

const Header = ({ switchThemes }: HeaderProps) => {
	const puffins = useContext(PuffinsContext);
	const router = useRouter();
	const sitesQuery = api.sites.get.useQuery({ id: null });
	const sites = sitesQuery.data as Site[];

	return (
		<div>
			<div id={styles.header} className="container">
				<div className={styles.breadcrumbs}>
					<span id={styles.logo}></span>
					<div>Username</div>
					{router.query.siteId && (
						<Switch
							selectedId={router.query.siteId as string}
							options={sites ?? []}
						/>
					)}
				</div>
				<div>
					<Toggle
						checked={puffins.theme === "light"}
						onChange={switchThemes}
					/>
				</div>
			</div>
		</div>
	);
};

export default Header;
