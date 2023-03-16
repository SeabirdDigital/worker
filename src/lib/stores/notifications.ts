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

notifications.subscribe((n) => {
	setTimeout(() => {
		n.shift();
		notifications.set(n);
	}, 10000);
});
