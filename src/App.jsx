import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import WorkoutsProvider from "./components/contexts/WorkoutsContext";
import NutritionProvider from "./components/contexts/NutritionContext";
import Sidebar from "./components/sidebar/Sidebar";
import Dashboard from "./components/pages/dashboard/Dashboard";
import Workouts from "./components/pages/workouts/Workouts";
import Nutrition from "./components/pages/nutrition/Nutrition";

import "./styles/App.css";

function App() {
    return (
        <Router>
            <WorkoutsProvider>
                <NutritionProvider>
                    <div className="app">
                        <Sidebar />
                        <main className="main">
                            <Routes>
                                <Route path="/" element={<Dashboard />} />
                                <Route path="/workouts" element={<Workouts />} />
                                <Route path="/nutrition" element={<Nutrition />} />
                            </Routes>
                        </main>
                    </div>
                </NutritionProvider>
            </WorkoutsProvider>
        </Router>
    );
}

export default App;
