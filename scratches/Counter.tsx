/** @jsxImportSource solid-js */
import styles from "./style.module.css";
import { useStore } from "@nanostores/solid";
import { $counter } from "../../stores/counterStore";

export const Counter = () => {
    const count = useStore($counter);
    return <div class={styles.counter}>{count()}</div>;
};
