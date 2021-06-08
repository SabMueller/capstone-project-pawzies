//import { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
//import styled from 'styled-components/macro';
import Home from './pages/Home';
import Navigation from './components/Navigation';

function App() {
  /*   useEffect(() => {
    fetch('http://localhost:4000/')
      .then((res) => res.json())
      .then((response) => setServerMessage(response));
  }); */

  function AnimalSearch() {
    return (
      <>
        <h1>Search Animal</h1>
      </>
    );
  }

  function AnimalForm() {
    return (
      <>
        <h1>Add Animal</h1>
      </>
    );
  }

  function Main() {
    return (
      <>
        <h1>Main</h1>
      </>
    );
  }

  function Favorites() {
    return (
      <>
        <h1>Favorites</h1>
      </>
    );
  }

  function Contact() {
    return (
      <>
        <h1>Get In Touch</h1>
      </>
    );
  }

  return (
    <main className='App'>
      <Navigation />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/search'>
          <AnimalSearch />
        </Route>
        <Route path='/add-animal'>
          <AnimalForm />
        </Route>
        <Route path='/main'>
          <Main />
        </Route>
        <Route path='/favorites'>
          <Favorites />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        {/*         <Route path='/about-organization'>
          <OrgnaizationInfo />
        </Route>
        <Route path='/about-breed'>
          <BreedInfo />
        </Route> */}
      </Switch>
    </main>
  );
}

export default App;
