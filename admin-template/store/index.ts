import { atom } from "jotai";

const initCount: number = 0;
export const countAtom = atom<number>(initCount);
