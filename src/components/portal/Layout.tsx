import { useEffect, type ReactNode } from "react";
import Header from "./Header";

type LayoutProps = {
	children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
	useEffect(() => {
		const host = process.env.VERCEL_URL ?? process.env.DEV_HOST;

		if (host !== "puffins.se")
			window.location.href = "https://puffins.se/portal";
	});

	return (
		<div className="bg-neutral-900 text-white">
			<Header />
			{children}
		</div>
	);
};

export default Layout;
