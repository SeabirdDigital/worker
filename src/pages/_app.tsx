import { type AppType } from "next/app";
import { createContext, useState } from "react";
import "~/styles/globals.css";
import { api } from "~/utils/api";

type PuffinsState = {
	siteId: string | undefined;
};

export const PuffinsContext = createContext<PuffinsState>({
	siteId: undefined,
});

const getHost = () => {
	return (
		window?.location.hostname ??
		process.env.VERCEL_URL ??
		process.env.DEV_HOST
	);
};

const MyApp: AppType = ({ Component, pageProps }) => {
	const [puffins, setPuffins] = useState<PuffinsState>({ siteId: undefined });

	return (
		<PuffinsContext.Provider value={puffins}>
			<Component {...pageProps} />
		</PuffinsContext.Provider>
	);
};

export default api.withTRPC(MyApp);
