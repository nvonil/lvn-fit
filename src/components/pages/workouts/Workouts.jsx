import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useWorkouts } from "../../contexts/WorkoutsContext";

import WorkoutsWeek from "./WorkoutsWeek";
import WorkoutsRoutineModal from "./WorkoutsRoutineModal";
import WorkoutsRoutine from "./WorkoutsRoutine";
import WorkoutsExerciseModal from "./WorkoutsExerciseModal";

import { Plus } from "lucide-react";
import "./Workouts.css";

const Workouts = () => {
    const { selectedDay, workoutsByDay } = useWorkouts();

    const [routineModalOpen, setRoutineModalOpen] = useState(false);
    const [exerciseModalOpen, setExerciseModalOpen] = useState(false);

    return (
        <main className="workouts">
            <header className="workouts-header">
                <h1 className="title-secondary">Workout Log</h1>
                <div className="text-secondary">Track your daily workouts by logging routines and exercises</div>
            </header>

            <section className="workouts-section">
                <WorkoutsWeek />

                {selectedDay && workoutsByDay[selectedDay] ? (
                    workoutsByDay[selectedDay].routineName ? (
                        <WorkoutsRoutine
                            routineName={workoutsByDay[selectedDay].routineName}
                            exercises={workoutsByDay[selectedDay].exercises}
                            handleExerciseModalOpen={() => setExerciseModalOpen(true)}
                        />
                    ) : (
                        <button
                            className="workouts-button routine-button button-primary"
                            onClick={() => setRoutineModalOpen(true)}
                        >
                            <Plus size={18} />
                            Add Routine
                        </button>
                    )
                ) : null}
            </section>

            {/* Routine Modal */}
            <AnimatePresence>
                {routineModalOpen && (
                    <WorkoutsRoutineModal handleRoutineModalClose={() => setRoutineModalOpen(false)} />
                )}
            </AnimatePresence>

            {/* Exercise Modal */}
            <AnimatePresence>
                {exerciseModalOpen && (
                    <WorkoutsExerciseModal handleExerciseModalClose={() => setExerciseModalOpen(false)} />
                )}
            </AnimatePresence>
        </main>
    );
};

export default Workouts;
