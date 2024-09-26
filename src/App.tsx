import { Route, Routes } from 'react-router-dom';
import './App.css';
import TaskList from './pages/Admin/HandleTask/TaskList';
import Homepage from './pages/Home/Homepage';
import Page404 from './services/utils/Page404';

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/taskslist" element={<TaskList />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </>
    );
}
