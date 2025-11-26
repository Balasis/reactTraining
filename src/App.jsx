import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '@components/Header/Header';
import Home from './pages/Home';

export default function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                {/* Later you can add more pages */}
            </Routes>
        </Router>
    );
}