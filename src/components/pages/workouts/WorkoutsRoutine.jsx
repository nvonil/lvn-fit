import { useState, useEffect, useRef } from "react";
import { useWorkouts } from "../../contexts/WorkoutsContext";

import { Dumbbell, Pencil, Plus, Trash } from "lucide-react";

const WorkoutsRoutine = ({ routineName, exercises, handleExerciseModalOpen }) => {
    const { selectedDay, setWorkoutsByDay } = useWorkouts();

    const [editedRoutineName, setEditedRoutineName] = useState(routineName);
    const [isEditing, setIsEditing] = useState(false);
    const editInputRef = useRef(null);

    // updates when routineName prop changes
    useEffect(() => {
        setEditedRoutineName(routineName);
    }, [routineName]);

    // focuses input when editing
    useEffect(() => {
        if (isEditing) {
            editInputRef.current.focus();
        }
    }, [isEditing]);

    const updateRoutineName = (name) => {
        setWorkoutsByDay((current) => ({
            ...current,
            [selectedDay]: {
                ...current[selectedDay],
                routineName: name,
            },
        }));
    };

    const handleEditEnter = (e) => {
        if (e.key === "Enter") {
            setIsEditing(false);
            updateRoutineName(editedRoutineName);
        }
    };

    const handleEditBlur = () => {
        setIsEditing(false);
        updateRoutineName(editedRoutineName);
    };

    const removeRoutine = () => {
        setWorkoutsByDay((current) => ({
            ...current,
            [selectedDay]: { routineName: "", exercises: [] },
        }));
    };

    const removeExercise = (exerciseIndex) => {
        setWorkoutsByDay((current) => ({
            ...current,
            [selectedDay]: {
                ...current[selectedDay],
                exercises: current[selectedDay].exercises.filter((_, index) => index !== exerciseIndex),
            },
        }));
    };

    return (
        <div className="workouts-routine">
            <header className="workouts-routine-header">
                <h2 className="workouts-label label-primary">
                    <Dumbbell size={18} />

                    {isEditing ? (
                        <input
                            type="text"
                            className="workouts-edit label-primary"
                            value={editedRoutineName}
                            onChange={(e) => setEditedRoutineName(e.target.value)}
                            onKeyDown={handleEditEnter}
                            onBlur={handleEditBlur}
                            ref={editInputRef}
                        />
                    ) : (
                        editedRoutineName
                    )}
                </h2>

                <div className="workouts-actions">
                    <button className="workouts-button button-secondary" onClick={() => setIsEditing(true)}>
                        <Pencil size={18} />
                        Edit Name
                    </button>

                    <button className="workouts-button workouts-routine-remove" onClick={removeRoutine}>
                        <Trash size={18} />
                        Remove Routine
                    </button>
                </div>
            </header>

            <article className="workouts-exercises">
                {exercises.length > 0 ? (
                    exercises.map((exercise, index) => {
                        return (
                            <div className="workouts-exercise" key={index}>
                                <header className="workouts-exercise-header">
                                    <div className="workouts-exercise-details">
                                        <div className="text-primary">{exercise.name}</div>
                                        <div className="workouts-tag">{exercise.tag}</div>
                                    </div>

                                    <Trash
                                        size={18}
                                        className="workouts-exercise-remove"
                                        onClick={() => removeExercise(index)}
                                    />
                                </header>

                                <ul className="workouts-metrics">
                                    <li className="text-secondary">Sets: {exercise.sets}</li>
                                    <li className="text-secondary">Reps: {exercise.reps}</li>
                                    <li className="text-secondary">Weight: {exercise.weight}</li>
                                    <li className="text-secondary">Rest: {exercise.rest}</li>
                                </ul>
                            </div>
                        );
                    })
                ) : (
                    <div className="workouts-empty text-secondary">No exercises added yet</div>
                )}
            </article>

            <button className="workouts-button exercise-button button-primary" onClick={handleExerciseModalOpen}>
                <Plus size={18} />
                Add Exercise
            </button>
        </div>
    );
};

export default WorkoutsRoutine;
