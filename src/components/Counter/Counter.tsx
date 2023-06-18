/** @jsxImportSource solid-js */
import { useStore } from "@nanostores/solid";
import { $counter } from "../../stores/counterStore";
import styles from "./style.module.css";

export const Counter = () => {
  const count = useStore($counter);

  return <div class={styles.counter}>{count()}</div>;
};
