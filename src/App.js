import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./pages/home";
import Movielist from "./components/movielist/movielist";
import Moviedetail from "./pages/Moviedetail/moviedetail";
import Searchlist from "./pages/searchlist/searchlist";

function App() {
  return (
    <div className="App">
    <Router>
    <Header />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path='movie/:id' element={<Moviedetail />}></Route>
        <Route path='movies/:type' element={<Movielist />}></Route>
        <Route path='movies/search/:type' element={<Searchlist />}></Route>
        <Route path='/*' element={<h1>Error Page</h1>}></Route>
        {/* <Card /> */}
      </Routes>
    <Footer />  
    </Router>

    </div>
  );
}

export default App;
