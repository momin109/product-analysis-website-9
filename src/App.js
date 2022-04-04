
import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Blogs from './components/Blogs/Blogs';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Blogs></Blogs>
      <Routes>
        <Route path='./' element={<Header></Header>}></Route>
        <Route path='./' element={<Home></Home>}></Route>

      </Routes>

    </div>
  );
}

export default App;
