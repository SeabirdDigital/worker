import { writable } from 'svelte/store';

const editImage = writable<string | undefined>(undefined);

export default editImage;
