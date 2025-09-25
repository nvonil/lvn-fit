import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import WorkoutsProvider from "./components/contexts/WorkoutsContext";
import Sidebar from "./components/sidebar/Sidebar";
import Dashboard from "./components/pages/dashboard/Dashboard";
import Workouts from "./components/pages/workouts/Workouts";

import "./styles/App.css";

function App() {
    return (
        <Router>
            <WorkoutsProvider>
                <div className="app">
                    <Sidebar />
                    <main className="main">
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/workouts" element={<Workouts />} />
                        </Routes>
                    </main>
                </div>
            </WorkoutsProvider>
        </Router>
    );
}

export default App;
