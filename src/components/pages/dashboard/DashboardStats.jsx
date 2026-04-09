import { TrendingUp, Dumbbell, Flame, Utensils } from "lucide-react";
import { useWorkouts } from "../../contexts/WorkoutsContext";
import { useNutrition } from "../../contexts/NutritionContext";

const DashboardStats = () => {
    const { workoutsByDay } = useWorkouts();
    const { foodsByDay } = useNutrition();

    const workoutDays = Object.values(workoutsByDay).filter(
        (day) => day.routineName || day.exercises.length > 0,
    ).length;

    const totalExercises = Object.values(workoutsByDay).reduce((total, day) => total + day.exercises.length, 0);

    const totalCalories = Object.values(foodsByDay).reduce((total, day) => {
        return (
            total +
            Object.values(day).reduce((mealTotal, meal) => {
                return mealTotal + meal.reduce((foodTotal, food) => foodTotal + food.calories * food.quantity, 0);
            }, 0)
        );
    }, 0);

    const totalMeals = Object.values(foodsByDay).reduce((total, day) => {
        return total + Object.values(day).filter((meal) => meal.length > 0).length;
    }, 0);

    const stats = [
        { label: "Workout Days", icon: TrendingUp, value: workoutDays, description: "active days" },
        { label: "Exercises", icon: Dumbbell, value: totalExercises, description: "total logged" },
        { label: "Calories", icon: Flame, value: totalCalories, description: "weekly intake" },
        { label: "Meals", icon: Utensils, value: totalMeals, description: "meals tracked" },
    ];

    return (
        <section className="dashboard-stats-section">
            {stats.map((stat) => (
                <article className="dashboard-stats" key={stat.label}>
                    <h2 className="dashboard-stats-label text-secondary">
                        <stat.icon size={16} />
                        {stat.label}
                    </h2>

                    <div>
                        <div className="label-primary">{stat.value}</div>
                        <div className="text-secondary">{stat.description}</div>
                    </div>
                </article>
            ))}
        </section>
    );
};

export default DashboardStats;
