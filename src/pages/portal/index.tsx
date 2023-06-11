import { type NextPage } from "next";
import Link from "next/link";
import Layout from "~/components/portal/Layout";
import { api } from "~/utils/api";

type Site = {
	id: string;
	name: string;
	tagline: string;
	ico: string;
	logo: string;
	hosts: { siteId: string; host: string }[];
};

const Overview: NextPage = () => {
	const sitesQuery = api.sites.get.useQuery({ id: null });
	const sites = sitesQuery.data as Site[];
	const mutation = api.sites.delete.useMutation();

	const deleteSite = async (id: string) => {
		await mutation.mutateAsync(id);
		await sitesQuery.refetch();
	};

	return (
		<Layout>
			<div className="container max-w-7xl py-6">
				<button>
					<Link href="/portal/sites/new">New Site</Link>
				</button>

				<div className="grid grid-cols-3 gap-4">
					{sites?.map((site) => (
						<div
							key={`site-${site.id}`}
							className="flex items-center justify-between rounded-lg border border-neutral-700 bg-black p-4"
						>
							<div>
								<h4>{site.name}</h4>
								<p>{site.hosts[0]?.host}</p>
							</div>
							<div>
								<button
									onClick={() => void deleteSite(site.id)}
								>
									Delete
								</button>
							</div>
						</div>
					)) || "Loading.."}
				</div>
			</div>
		</Layout>
	);
};

export default Overview;
