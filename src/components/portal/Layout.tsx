import { ClerkProvider } from "@clerk/nextjs";
import {
	CssBaseline,
	GeistProvider,
	Page,
	useTheme,
	type GeistUIThemes,
} from "@geist-ui/core";
import { createContext, useEffect, useState, type ReactNode } from "react";
import Header from "./Header";

type PuffinsContextType = {
	theme?: GeistUIThemes;
};

export const PuffinsContext = createContext<PuffinsContextType>({});

type LayoutProps = {
	children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
	useEffect(() => {
		const host = process.env.VERCEL_URL ?? process.env.DEV_HOST;

		if (host !== "puffins.se")
			window.location.href = "https://puffins.se/portal";
	});

	const [themeType, setThemeType] = useState("dark");
	const switchThemes = () => {
		setThemeType((last) => (last === "dark" ? "light" : "dark"));
	};

	const theme = useTheme();
	const [puffins, setPuffins] = useState<PuffinsContextType>({ theme });

	return (
		<PuffinsContext.Provider value={puffins}>
			<ClerkProvider>
				<GeistProvider themeType={themeType}>
					<CssBaseline />
					<Page>
						<Header switchThemes={switchThemes} />
						<Page.Content>{children}</Page.Content>
					</Page>
				</GeistProvider>
			</ClerkProvider>
		</PuffinsContext.Provider>
	);
};

export default Layout;
