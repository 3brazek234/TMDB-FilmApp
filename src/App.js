import React from 'react';
import { HashRouter  , Route ,Routes } from 'react-router-dom'
import Home from './components/Home';
import People from './components/People';
import Networks from './components/Networks';
import Movies from './components/Movies';
import About from './components/About';
import Tvshow from './components/Tvshow';
import Navbar from './components/Navbar';
import Toprated from './components/Toprated';
import Upcoming from './components/Upcoming';
import Popular from './components/Popular';
import Newplaying from './components/Newplaying';
import Details from './components/Details';
import PeopleDetails from './components/PeopleDetails';
import UpDetails from './components/UpDetails';




function App() {
  return (
    <HashRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/people' element={<People/>} />
      <Route path='/networks' element={<Networks/>} />
      <Route path='/movies' element={<Movies/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/tvshow' element={<Tvshow/>} />
      <Route path='/newplaying' element={<Newplaying/>} />
      <Route path='/popular' element={<Popular/>} />
      <Route path='/upcoming' element={<Upcoming/>} />
      <Route path='/toprated' element={<Toprated/>}/>
      <Route path='/details/:id' element={<Details/>}/>
      <Route path='/peopledetails/:id' element={<PeopleDetails/>} />
      <Route path='/upDetails/:more' element={<UpDetails/>} />
    




    </Routes>
    </HashRouter>
  );
}

export default App;
