// src/stores/counter.js
import { atom } from "nanostores";

export const counter = atom(0);

export function increment() {
  counter.set(counter.get() + 1);
}

export function decrement() {
  counter.set(counter.get() - 1);
}
