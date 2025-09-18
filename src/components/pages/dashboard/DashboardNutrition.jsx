const DashboardNutrition = () => {
    return (
        <div className="dashboard-nutrition-content">
            <div className="dashboard-nutrition-macro">
                <div className="dashboard-nutrition-header">
                    <span>Calories</span>
                    <span>1200 / 1800</span>
                </div>
                <div className="dashboard-nutrition-progress-bar">
                    <div
                        className="dashboard-nutrition-progress-fill"
                        style={{ width: `${(1200 / 1800) * 100}%` }}
                    ></div>
                </div>
                <div className="dashboard-nutrition-remaining">600 remaining</div>
            </div>

            <div className="dashboard-nutrition-macro">
                <div className="dashboard-nutrition-header">
                    <span>Protein</span>
                    <span>110g / 150g</span>
                </div>
                <div className="dashboard-nutrition-progress-bar">
                    <div className="dashboard-nutrition-progress-fill" style={{ width: `${(110 / 150) * 100}%` }}></div>
                </div>
                <div className="dashboard-nutrition-remaining">40g remaining</div>
            </div>

            <div className="dashboard-nutrition-macro">
                <div className="dashboard-nutrition-header">
                    <span>Water</span>
                    <span>80oz / 120oz</span>
                </div>
                <div className="dashboard-nutrition-progress-bar">
                    <div className="dashboard-nutrition-progress-fill" style={{ width: `${(80 / 120) * 100}%` }}></div>
                </div>
                <div className="dashboard-nutrition-remaining">40oz remaining</div>
            </div>
        </div>
    );
};

export default DashboardNutrition;
