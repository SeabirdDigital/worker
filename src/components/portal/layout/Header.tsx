import { useRouter } from "next/router";
import { useContext } from "react";
import { PuffinsContext } from "~/pages/_app";
import { type Site } from "~/server/api/routers/sites";
import { api } from "~/utils/api";
import Toggle from "../Input/Toggle";
import styles from "./Header.module.css";
import Submenu from "./Header/Submenu";
import Switch from "./Header/Switch";

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
			<div id={styles.header}>
				<div className={styles.portalNav}>
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

				{router.query.siteId && (
					<Submenu
						selectedId={router.query.siteId as string}
						options={sites?.map((site) => ({
							label: site.name,
							id: site.id,
							href: `/portal/${site.id}`,
						}))}
					/>
				)}
			</div>
		</div>
	);
};

export default Header;
