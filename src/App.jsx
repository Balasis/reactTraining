import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* Later you can add more pages */}
            </Routes>
        </Router>
    );
}