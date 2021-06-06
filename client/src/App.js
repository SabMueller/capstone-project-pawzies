//import { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';

function App() {
  /*   useEffect(() => {
    fetch('http://localhost:4000/')
      .then((res) => res.json())
      .then((response) => setServerMessage(response));
  }); */

  function Home() {
    return <></>;
  }

  function AnimalSearch() {
    return <></>;
  }

  function AnimalForm() {
    return <></>;
  }

  function Main() {
    return <></>;
  }

  function Favorites() {
    return <></>;
  }

  function Contact() {
    return <></>;
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
