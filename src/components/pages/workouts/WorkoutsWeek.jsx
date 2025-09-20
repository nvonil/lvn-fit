const WorkoutsWeek = () => {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    return (
        <nav className="workouts-nav">
            {days.map((day) => (
                <div key={day} className="workouts-day">
                    {day}
                </div>
            ))}
        </nav>
    );
};

export default WorkoutsWeek;
