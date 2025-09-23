import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import WorkoutsWeek from "./WorkoutsWeek";
import WorkoutsPlan from "./WorkoutsPlan";
import WorkoutsModal from "./WorkoutsModal";

import "./Workouts.css";

const Workouts = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const [exercises, setExercises] = useState([
        {
            name: "Machine Incline Chest Press",
            tag: "Chest",
            sets: 3,
            reps: "6",
            weight: "120lb",
            rest: "4 minutes",
        },
        {
            name: "Machine Shoulder Press",
            tag: "Shoulders",
            sets: 3,
            reps: "8",
            weight: "70lb",
            rest: "3 minutes",
        },
    ]);

    const handleModalOpen = () => {
        setModalOpen(true);
    };

    const handleModalClose = () => {
        setModalOpen(false);
    };

    const handleAddExercise = (exercise) => {
        setExercises([...exercises, exercise]);
    };

    const handleRemoveExercise = (name) => {
        const newExercises = exercises.filter((exercise) => exercise.name !== name);
        setExercises(newExercises);
    };

    return (
        <main className="workouts">
            <header className="workouts-header">
                <h1 className="subtitle">Workout Log</h1>
                <div className="text-secondary">Track your daily workouts by logging exercises and routines</div>
            </header>

            <section className="workouts-section">
                <WorkoutsWeek />
                <WorkoutsPlan
                    handleModalOpen={handleModalOpen}
                    exercises={exercises}
                    handleRemoveExercise={handleRemoveExercise}
                />
            </section>

            <AnimatePresence>
                {modalOpen && (
                    <WorkoutsModal handleModalClose={handleModalClose} handleAddExercise={handleAddExercise} />
                )}
            </AnimatePresence>
        </main>
    );
};

export default Workouts;
