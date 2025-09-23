import { useState, useRef } from "react";
import { motion } from "framer-motion";

const WorkoutsRoutineModal = ({ setRoutineName, handleRoutineModalClose }) => {
    const [name, setName] = useState("");

    const nameInputRef = useRef(null);

    const handleInputFocus = () => {
        if (nameInputRef.current) {
            nameInputRef.current.focus();
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!name) {
            alert("Please fill out field.");
            return;
        }

        setRoutineName(name);
        handleRoutineModalClose();
    };

    return (
        <motion.div
            className="workouts-modal-overlay"
            onClick={handleRoutineModalClose}
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
                    <h1 className="label-primary">Add Routine to Workout Log</h1>
                    <div className="text-secondary">Enter the routine information for your workout</div>
                </header>

                <form className="workouts-modal-form" onSubmit={handleFormSubmit} autoComplete="off">
                    {/* Name */}
                    <div className="workouts-modal-form-field">
                        <label htmlFor="name" className="form-label">
                            Routine Name *
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="form-input"
                            placeholder="e.g. Push Day Workout"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            ref={nameInputRef}
                        />
                    </div>

                    <div className="workouts-modal-form-actions routine-actions">
                        <button type="submit" className="form-button button-primary">
                            Add to Log
                        </button>

                        <button
                            type="button"
                            className="form-button button-secondary"
                            onClick={handleRoutineModalClose}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </motion.div>
        </motion.div>
    );
};

export default WorkoutsRoutineModal;
