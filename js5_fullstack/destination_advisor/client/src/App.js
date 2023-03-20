import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import DashboardPage from './views/DashboardPage';
import CreatePage from './views/CreatePage';
import DetailsPage from './views/DetailsPage';
import UpdatePage from './views/UpdatePage';

function App() {
  return (
    <div>
      <h1> Destination Advisor</h1>
      <p>
        <Link to="/destinations"> Dashboard</Link> |
        <Link to="/destinations/new"> Create a destination</Link>
      </p>
      <Routes>
        <Route path="/destinations" element={<DashboardPage />} />
        <Route path="/destinations/new" element={<CreatePage />} />
        <Route path="/destinations/:id" element={<DetailsPage />} />
        <Route path="/destinations/:id/edit" element={<UpdatePage />} />
      </Routes>

    </div>
  );
}

export default App;
