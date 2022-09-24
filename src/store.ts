import type { Todo } from './types/types';
import { writable } from "svelte/store";

export const todos = writable<Todo[]>([])