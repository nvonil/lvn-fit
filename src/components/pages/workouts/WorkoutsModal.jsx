import { motion } from "framer-motion";

const WorkoutsModal = ({ handleModalClose }) => {
    return (
        <motion.div
            className="workouts-modal-overlay"
            onClick={handleModalClose}
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
            >
                <header className="workouts-modal-header">
                    <h1 className="label-primary">Add Exercise to Workout</h1>
                    <div className="text-secondary">Enter the exercise information for your workout</div>
                </header>

                <form className="workouts-modal-form">
                    {/* Name */}
                    <div className="workouts-modal-form-field">
                        <label htmlFor="name" className="form-label">
                            Exercise Name *
                        </label>
                        <input type="text" id="name" className="form-input" placeholder="e.g. Machine Chest Press" />
                    </div>

                    {/* Tag */}
                    <div className="workouts-modal-form-field">
                        <label htmlFor="tag" className="form-label">
                            Tag *
                        </label>
                        <input type="text" id="tag" className="form-input" placeholder="e.g. Chest" />
                    </div>

                    {/* Sets, Reps */}
                    <div className="workouts-modal-form-group">
                        <div className="workouts-modal-form-field">
                            <label htmlFor="sets" className="form-label">
                                Sets *
                            </label>
                            <input type="number" id="sets" className="form-input" placeholder="e.g. 3" />
                        </div>

                        <div className="workouts-modal-form-field">
                            <label htmlFor="reps" className="form-label">
                                Reps *
                            </label>
                            <input type="text" id="reps" className="form-input" placeholder="e.g. 6-8" />
                        </div>
                    </div>

                    {/* Weight, Rest */}
                    <div className="workouts-modal-form-group">
                        <div className="workouts-modal-form-field">
                            <label htmlFor="weight" className="form-label">
                                Weight *
                            </label>
                            <input type="text" id="weight" className="form-input" placeholder="e.g. 120lb" />
                        </div>

                        <div className="workouts-modal-form-field">
                            <label htmlFor="rest" className="form-label">
                                Rest Time *
                            </label>
                            <input type="text" id="rest" className="form-input" placeholder="e.g. 4 minutes" />
                        </div>
                    </div>

                    <div className="workouts-modal-form-actions">
                        <button className="form-button button-primary">Add to Workout</button>
                        <button className="form-button button-secondary" onClick={handleModalClose}>
                            Cancel
                        </button>
                    </div>
                </form>
            </motion.div>
        </motion.div>
    );
};

export default WorkoutsModal;
