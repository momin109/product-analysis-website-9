
import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Blogs from './components/Blogs/Blogs';
import Dashbord from './components/Dashboard/Dashbord';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>

        <Route path='./' element={<Home></Home>}></Route>

      </Routes>

    </div>
  );
}

export default App;
