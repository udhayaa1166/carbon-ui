import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import SignIn from './Components/SignIn';
import { useNavigate } from 'react-router-dom';

function App() {
  let navigate = useNavigate();
  let withPath = (path) => navigate(path);
  return (
    <Routes>
      <Route path='/' element={<SignIn pathCode="/" navigate={withPath} />} />
      <Route path='/HomePage' element={<HomePage pathCode="/HomePage" />} />
    </Routes>
  );
}

export default App;
