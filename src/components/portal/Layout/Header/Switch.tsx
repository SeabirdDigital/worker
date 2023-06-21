import styles from "./Switch.module.css";

type SwitchProps = {
	selectedId: string;
	options: {
		id: string;
		name: string;
	}[];
};

const Switch = ({ selectedId, options }: SwitchProps) => {
	return (
		<div id={styles.UserSwitch}>
			{options.find((site) => site.id === selectedId)?.name}
			<label className={styles.toggle}>
				<input
					className={styles.checkbox}
					onChange={(e) => {
						console.log(e.target.checked);
						if (e.target.checked) {
							window.onclick = (ev) => {
								if (
									!document
										.getElementById(styles.UserSwitch ?? "")
										?.contains(ev.target as Node)
								) {
									window.onclick = null;
									e.target.checked = false;
									console.log(e.target.checked);
								}
							};
						} else window.onclick = null;
					}}
					type="checkbox"
					name=""
					id=""
				/>
				v
				<div className={styles.menu}>
					{options.map((site, i) => (
						<div className={styles.site} key={i}>
							{site.name}
						</div>
					))}
				</div>
			</label>
		</div>
	);
};

export default Switch;
