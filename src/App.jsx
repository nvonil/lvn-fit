import Sidebar from "./components/sidebar/Sidebar";
import Dashboard from "./components/pages/dashboard/Dashboard";

import "./styles/App.css";

function App() {
    return (
        <div className="app-container">
            <Sidebar />
            <div className="page-container">
                <Dashboard />

                <footer className="page-footer">&copy; 2025 LVN Fit</footer>
            </div>
        </div>
    );
}

export default App;
