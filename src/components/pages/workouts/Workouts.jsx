import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import WorkoutsWeek from "./WorkoutsWeek";
import WorkoutsPlan from "./WorkoutsPlan";
import WorkoutsRoutineModal from "./WorkoutsRoutineModal";
import WorkoutsExerciseModal from "./WorkoutsExerciseModal";

import { Plus } from "lucide-react";
import "./Workouts.css";

const Workouts = () => {
    const [routineModalOpen, setRoutineModalOpen] = useState(false);
    const [exerciseModalOpen, setExerciseModalOpen] = useState(false);

    const [routineName, setRoutineName] = useState("");
    const [exercises, setExercises] = useState([]);

    return (
        <main className="workouts">
            <header className="workouts-header">
                <h1 className="subtitle">Workout Log</h1>
                <div className="text-secondary">Track your daily workouts by logging exercises and routines</div>
            </header>

            <section className="workouts-section">
                <WorkoutsWeek />

                {routineName ? (
                    <WorkoutsPlan
                        routineName={routineName}
                        handleExerciseModalOpen={() => setExerciseModalOpen(true)}
                        exercises={exercises}
                        setExercises={setExercises}
                    />
                ) : (
                    <button
                        className="workouts-button routine-button button-primary"
                        onClick={() => setRoutineModalOpen(true)}
                    >
                        <Plus size={18} />
                        Add Routine
                    </button>
                )}
            </section>

            {/* Routine Modal */}
            <AnimatePresence>
                {routineModalOpen && (
                    <WorkoutsRoutineModal
                        setRoutineName={setRoutineName}
                        handleRoutineModalClose={() => setRoutineModalOpen(false)}
                    />
                )}
            </AnimatePresence>

            {/* Exercise Modal */}
            <AnimatePresence>
                {exerciseModalOpen && (
                    <WorkoutsExerciseModal
                        exercises={exercises}
                        setExercises={setExercises}
                        handleExerciseModalClose={() => setExerciseModalOpen(false)}
                    />
                )}
            </AnimatePresence>
        </main>
    );
};

export default Workouts;
