import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./components/sidebar/Sidebar";
import Dashboard from "./components/pages/dashboard/Dashboard";
import Workouts from "./components/pages/workouts/Workouts";

import "./styles/App.css";

function App() {
    return (
        <Router>
            <div className="app">
                <Sidebar />
                <main className="main">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/workouts" element={<Workouts />} />
                    </Routes>

                    <footer className="main-footer text-secondary">&copy; 2025 LVN Fit</footer>
                </main>
            </div>
        </Router>
    );
}

export default App;
