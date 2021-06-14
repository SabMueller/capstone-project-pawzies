import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
//import styled from 'styled-components/macro';
import Home from './pages/Home';
import Navigation from './components/Navigation';
import AddForm from './pages/AddForm';

function App() {
  const [organizations, setOrganizations] = useState([]);
  const [animals, setAnimals] = useState([]);

  async function addOrganizationsAndAnimals(organization, animal) {
    try {
      const result = await fetch('http://localhost:4000/organizations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(organization),
      });
      const organizationSaved = await result.json();
      setOrganizations([...organizations, organizationSaved]);
    } catch (error) {
      console.error(error);
    }

    try {
      const result = await fetch('http://localhost:4000/animals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(animal),
      });
      const animalSaved = await result.json();
      setAnimals([...animals, animalSaved]);
    } catch (error) {
      console.error(error);
    }
  }

  function AnimalSearch() {
    return (
      <>
        <h1>Search Animal</h1>
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
    <div className='App'>
      <Navigation />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/search'>
          <AnimalSearch />
        </Route>
        <Route path='/add'>
          <AddForm onAddOrganizationsAndAnimals={addOrganizationsAndAnimals} />
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
    </div>
  );
}

export default App;
