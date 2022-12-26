import type { Theme } from '$lib/themes';
import { writable } from 'svelte/store';

const theme = writable<Theme>();
export default theme;
