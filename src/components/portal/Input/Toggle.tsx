import { type ChangeEvent } from "react";
import styles from "./Toggle.module.css";

type ToggleProps = {
	id?: string;
	name?: string;
	checked: boolean;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Toggle = ({ id, name, checked, onChange }: ToggleProps) => {
	return (
		<label className={styles.toggle}>
			<input
				type="checkbox"
				name={name}
				id={id}
				onChange={(e) => onChange(e)}
				checked={checked}
			/>
			<span className={styles.slider}>
				<div className={styles.knob}></div>
			</span>
		</label>
	);
};

export default Toggle;
