import { type ReactNode } from "react";
import Header from "./Header";

type LayoutProps = {
	children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className="bg-neutral-900 text-white">
			<Header />
			{children}
		</div>
	);
};

export default Layout;
