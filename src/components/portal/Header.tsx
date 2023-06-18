import { Breadcrumbs, Page, Toggle } from "@geist-ui/core";
import { useContext } from "react";
import { PuffinsContext } from "./Layout";

type HeaderProps = {
	switchThemes: () => void;
};

const Header = ({ switchThemes }: HeaderProps) => {
	const puffins = useContext(PuffinsContext);

	return (
		<Page.Header className="flex justify-between">
			<Breadcrumbs>
				<Breadcrumbs.Item className="">
					<div
						className="aspect-square h-8 rounded-full"
						style={{
							background: puffins.theme?.palette.accents_1,
						}}
					></div>
				</Breadcrumbs.Item>
				<Breadcrumbs.Item href="/portal/username">
					Username
				</Breadcrumbs.Item>
			</Breadcrumbs>
			<div>
				<Toggle initialChecked onChange={switchThemes} />
			</div>
		</Page.Header>
	);
};

export default Header;
