import { ClerkProvider } from "@clerk/nextjs";
import { type AppType } from "next/app";
import { createContext, useEffect, useState } from "react";
import Header from "~/components/portal/Layout/Header";
import { env } from "~/env.mjs";
import "~/styles/globals.css";
import { api } from "~/utils/api";

type PuffinsContextType = {
	theme: "light" | "dark";
};

const defaultContext: PuffinsContextType = {
	theme: "dark",
};

export const PuffinsContext = createContext<PuffinsContextType>(defaultContext);

const MyApp: AppType = ({ Component, pageProps }) => {
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
				<Component {...pageProps} />
			</ClerkProvider>
		</PuffinsContext.Provider>
	);
};

export default api.withTRPC(MyApp);
