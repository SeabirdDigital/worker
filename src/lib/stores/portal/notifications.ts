import { get, writable } from 'svelte/store';

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

export const addNotification = (n: Notification) => {
	notifications.set([...get(notifications), n]);
	const nn = get(notifications);

	setTimeout(() => {
		nn.shift();
		notifications.set(nn);
	}, 5000);
};
