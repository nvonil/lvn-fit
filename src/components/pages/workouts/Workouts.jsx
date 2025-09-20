import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import WorkoutsWeek from "./WorkoutsWeek";
import WorkoutsPlan from "./WorkoutsPlan";
import WorkoutsModal from "./WorkoutsModal";

import "./Workouts.css";

const Workouts = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleModalOpen = () => {
        setModalOpen(true);
    };

    const handleModalClose = () => {
        setModalOpen(false);
    };

    return (
        <main className="workouts">
            <header className="workouts-header">
                <h1 className="subtitle">Workout Log</h1>
                <div className="text-secondary">Track your daily workouts by logging exercises and routines</div>
            </header>

            <section className="workouts-section">
                <WorkoutsWeek />
                <WorkoutsPlan handleModalOpen={handleModalOpen} />
            </section>

            <AnimatePresence>{modalOpen && <WorkoutsModal handleModalClose={handleModalClose} />}</AnimatePresence>
        </main>
    );
};

export default Workouts;
