
import React, { createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import DashBoard from './components/DashBoard/DashBoard';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import NotFound from './components/NotFound/NotFound';
import Reviews from './components/Reviews/Reviews';
import useReviews from './hooks/useReviews';

export const ReviewsContext = createContext();

const App = () => {
  const [reviews, setReviews] = useReviews();
  return (
    <ReviewsContext.Provider value={[reviews, setReviews]}>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/dashboard' element={<DashBoard></DashBoard>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </ReviewsContext.Provider>
  );
};

export default App;