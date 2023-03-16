import { writable } from 'svelte/store';

type Notification = {
	type: 'info' | 'success' | 'warning' | 'error';
	message: string;
	primaryButton?: Button;
	secondaryButton?: Button;
};

type Button = {
	label: string;
	onClick: () => void;
};

const notifications = writable<Notification[]>([]);

export default notifications;
