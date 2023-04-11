import type { Ref } from 'vue'

export type Emit = (event: string, ...args: any[]) => void;

export type MaybeRef<T> = T | Ref<T>;

export type MaybeRefArray<T> = T | Ref<T> | T[] | Ref<T[]>;
