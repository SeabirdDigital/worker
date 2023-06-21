import Link from "next/link";
import styles from "./Submenu.module.css";

type SubmenuProps = {
	selectedId: string;
	options: {
		label: string;
		id: string;
		href: string;
	}[];
};

const Submenu = ({ selectedId, options }: SubmenuProps) => {
	return (
		<nav className={styles.submenu}>
			{options?.map((option) => (
				<Link
					className={`${styles.option ?? ""} ${
						selectedId == option.id && styles.selected
							? styles.selected
							: ""
					}`}
					key={option.label}
					href={option.href}
				>
					{option.label}
				</Link>
			))}
		</nav>
	);
};

export default Submenu;
