import React, { useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";
import styles from "./style.module.css";
import { increaseCounter } from "../../stores/counterStore";

export const ConfettiButton = () => {
    const [hasConfetti, toggleConfetti] = useState(false);

    return (
        <>
            <div className={styles.container}>
                {hasConfetti && (
                    <div className={styles.confettiContainer}>
                        <ConfettiExplosion onComplete={() => toggleConfetti(false)} />
                    </div>
                )}

                <button
                    className={styles.button}
                    onClick={() => {
                        toggleConfetti(true);
                        increaseCounter();
                    }}
                >
                    Я прочитал!
                </button>
            </div>
        </>
    );
};
