import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNav from './components/MyNav';
import Error404 from "./views/Error404";
import Home from "./views/Home";
import Todos from './views/Todos';
import SinglePost from './views/SinglePost';
function App() {  
  return (
    <BrowserRouter>
      <MyNav/>
      <Routes>
        <Route path="/" exact element={<Home title={"Home"} />} />
        <Route path="/posts" exact element={<Todos title={"Posts"} />} />
        <Route path="/posts/:id" exact element={<SinglePost title={"Single Post"} />} />
        <Route path="*" element={<Error404 title={"404"} />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
