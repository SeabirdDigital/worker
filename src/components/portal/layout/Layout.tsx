import { ClerkProvider } from "@clerk/nextjs";
import { createContext, useEffect, useState, type ReactNode } from "react";
import { env } from "~/env.mjs";
import Header from "./Header";

type PuffinsContextType = {
	theme: "light" | "dark";
};

const defaultContext: PuffinsContextType = {
	theme: "dark",
};

export const PuffinsContext = createContext<PuffinsContextType>(defaultContext);

type LayoutProps = {
	children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
	useEffect(() => {
		const host = process.env.VERCEL_URL ?? env.NEXT_PUBLIC_DEV_HOST;

		if (host !== "puffins.se")
			window.location.href = "https://puffins.se/portal";
	});

	const [puffins, setPuffins] = useState<PuffinsContextType>(defaultContext);
	const switchThemes = () => {
		setPuffins((last) => {
			const newPuffins: PuffinsContextType = {
				...last,
				theme: last.theme === "dark" ? "light" : "dark",
			};

			document
				.querySelector("html")
				?.setAttribute("data-theme", newPuffins.theme);

			return newPuffins;
		});
	};

	return (
		<PuffinsContext.Provider value={puffins}>
			<ClerkProvider>
				<Header switchThemes={switchThemes} />
				{children}
			</ClerkProvider>
		</PuffinsContext.Provider>
	);
};

export default Layout;
