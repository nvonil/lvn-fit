import { useState, useRef } from "react";
import { motion } from "framer-motion";

const WorkoutsExerciseModal = ({ exercises, setExercises, handleExerciseModalClose }) => {
    const [name, setName] = useState("");
    const [tag, setTag] = useState("");
    const [sets, setSets] = useState("");
    const [reps, setReps] = useState("");
    const [weight, setWeight] = useState("");
    const [rest, setRest] = useState("");

    const nameInputRef = useRef(null);

    const handleInputFocus = () => {
        if (nameInputRef.current) {
            nameInputRef.current.focus();
        }
    };

    const handleAddExercise = (exercise) => {
        setExercises([...exercises, exercise]);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!name || !tag || !sets || !reps || !weight || !rest) {
            alert("Please fill out all fields.");
            return;
        }

        handleAddExercise({ name, tag, sets, reps, weight, rest });
        handleExerciseModalClose();
    };

    return (
        <motion.div
            className="workouts-modal-overlay"
            onClick={handleExerciseModalClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
                className="workouts-modal"
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                onAnimationComplete={handleInputFocus}
            >
                <header className="workouts-modal-header">
                    <h1 className="label-primary">Add Exercise to Routine</h1>
                    <div className="text-secondary">Enter the exercise information for your routine</div>
                </header>

                <form className="workouts-modal-form" onSubmit={handleFormSubmit} autoComplete="off">
                    {/* Name */}
                    <div className="workouts-modal-form-field">
                        <label htmlFor="name" className="form-label">
                            Exercise Name *
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="form-input"
                            placeholder="e.g. Machine Chest Press"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            ref={nameInputRef}
                        />
                    </div>

                    {/* Tag */}
                    <div className="workouts-modal-form-field">
                        <label htmlFor="tag" className="form-label">
                            Tag *
                        </label>
                        <input
                            type="text"
                            id="tag"
                            className="form-input"
                            placeholder="e.g. Chest"
                            value={tag}
                            onChange={(e) => setTag(e.target.value)}
                        />
                    </div>

                    <div className="workouts-modal-form-group">
                        {/* Sets */}
                        <div className="workouts-modal-form-field">
                            <label htmlFor="sets" className="form-label">
                                Sets *
                            </label>
                            <input
                                type="number"
                                id="sets"
                                className="form-input"
                                placeholder="e.g. 3"
                                value={sets}
                                onChange={(e) => setSets(e.target.value)}
                                min={1}
                            />
                        </div>

                        {/* Reps */}
                        <div className="workouts-modal-form-field">
                            <label htmlFor="reps" className="form-label">
                                Reps *
                            </label>
                            <input
                                type="number"
                                id="reps"
                                className="form-input"
                                placeholder="e.g. 6"
                                value={reps}
                                onChange={(e) => setReps(e.target.value)}
                                min={1}
                            />
                        </div>
                    </div>

                    <div className="workouts-modal-form-group">
                        {/* Weight */}
                        <div className="workouts-modal-form-field">
                            <label htmlFor="weight" className="form-label">
                                Weight *
                            </label>
                            <input
                                type="text"
                                id="weight"
                                className="form-input"
                                placeholder="e.g. 120lb"
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                            />
                        </div>

                        {/* Rest */}
                        <div className="workouts-modal-form-field">
                            <label htmlFor="rest" className="form-label">
                                Rest Time *
                            </label>
                            <input
                                type="text"
                                id="rest"
                                className="form-input"
                                placeholder="e.g. 4 minutes"
                                value={rest}
                                onChange={(e) => setRest(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="workouts-modal-form-actions">
                        <button type="submit" className="form-button button-primary">
                            Add to Routine
                        </button>

                        <button
                            type="button"
                            className="form-button button-secondary"
                            onClick={handleExerciseModalClose}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </motion.div>
        </motion.div>
    );
};

export default WorkoutsExerciseModal;
