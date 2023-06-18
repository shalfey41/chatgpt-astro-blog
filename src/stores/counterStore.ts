import { atom } from "nanostores";

export const $counter = atom(0);

export const increaseCounter = () => {
  $counter.set($counter.get() + 1);
};
