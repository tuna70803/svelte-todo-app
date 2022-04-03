import { writable } from 'svelte/store';

export interface Folder {
  id: string;
  name: string;
}

export const folders = writable<Folder[]>([]);
