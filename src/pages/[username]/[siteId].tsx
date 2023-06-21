import { useRouter } from "next/router";
import { Site } from "~/server/api/routers/sites";
import { api } from "~/utils/api";
import styles from "./Site.module.css";

const Site = () => {
	const router = useRouter();
	const siteQuery = api.sites.get.useQuery({
		id: router.query.siteId as string,
	});
	const site = siteQuery.data as Site;

	return (
		<div>
			<div className={styles.title}>
				<h1>{site?.name}</h1>
			</div>
		</div>
	);
};

export default Site;
