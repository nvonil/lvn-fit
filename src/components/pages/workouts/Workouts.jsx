import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import WorkoutsWeek from "./WorkoutsWeek";
import WorkoutsRoutineModal from "./WorkoutsRoutineModal";
import WorkoutsPlan from "./WorkoutsPlan";
import WorkoutsExerciseModal from "./WorkoutsExerciseModal";

import { Plus } from "lucide-react";
import "./Workouts.css";

const Workouts = () => {
    const [selectedDay, setSelectedDay] = useState("Monday");

    const [workoutsByDay, setWorkoutsByDay] = useState({
        Monday: { routineName: "", exercises: [] },
        Tuesday: { routineName: "", exercises: [] },
        Wednesday: { routineName: "", exercises: [] },
        Thursday: { routineName: "", exercises: [] },
        Friday: { routineName: "", exercises: [] },
        Saturday: { routineName: "", exercises: [] },
        Sunday: { routineName: "", exercises: [] },
    });

    const [routineModalOpen, setRoutineModalOpen] = useState(false);
    const [exerciseModalOpen, setExerciseModalOpen] = useState(false);

    return (
        <main className="workouts">
            <header className="workouts-header">
                <h1 className="subtitle">Workout Log</h1>
                <div className="text-secondary">Track your daily workouts by logging exercises and routines</div>
            </header>

            <section className="workouts-section">
                <WorkoutsWeek selectedDay={selectedDay} setSelectedDay={setSelectedDay} />

                {selectedDay &&
                    (workoutsByDay[selectedDay].routineName ? (
                        <WorkoutsPlan
                            routineName={workoutsByDay[selectedDay].routineName}
                            handleExerciseModalOpen={() => setExerciseModalOpen(true)}
                            exercises={workoutsByDay[selectedDay].exercises}
                            setExercises={(newExercises) =>
                                setWorkoutsByDay((currentWorkouts) => ({
                                    ...currentWorkouts,
                                    [selectedDay]: {
                                        ...currentWorkouts[selectedDay],
                                        exercises: newExercises,
                                    },
                                }))
                            }
                        />
                    ) : (
                        <button
                            className="workouts-button routine-button button-primary"
                            onClick={() => setRoutineModalOpen(true)}
                        >
                            <Plus size={18} />
                            Add Routine
                        </button>
                    ))}
            </section>

            {/* Routine Modal */}
            <AnimatePresence>
                {routineModalOpen && (
                    <WorkoutsRoutineModal
                        handleRoutineName={(name) =>
                            setWorkoutsByDay((currentWorkouts) => ({
                                ...currentWorkouts,
                                [selectedDay]: {
                                    ...currentWorkouts[selectedDay],
                                    routineName: name,
                                },
                            }))
                        }
                        handleRoutineModalClose={() => setRoutineModalOpen(false)}
                    />
                )}
            </AnimatePresence>

            {/* Exercise Modal */}
            <AnimatePresence>
                {exerciseModalOpen && (
                    <WorkoutsExerciseModal
                        exercises={workoutsByDay[selectedDay].exercises}
                        setExercises={(newExercise) =>
                            setWorkoutsByDay((currentWorkouts) => ({
                                ...currentWorkouts,
                                [selectedDay]: {
                                    ...currentWorkouts[selectedDay],
                                    exercises: newExercise,
                                },
                            }))
                        }
                        handleExerciseModalClose={() => setExerciseModalOpen(false)}
                    />
                )}
            </AnimatePresence>
        </main>
    );
};

export default Workouts;
