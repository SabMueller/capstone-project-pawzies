import { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import AddForm from './pages/AddForm';
import AnimalSearch from './pages/AnimalSearch';
import Home from './pages/Home';
import Main from './pages/Main';

function App() {
  const [organizations, setOrganizations] = useState([]);
  const [animals, setAnimals] = useState([]);

  async function addOrganizationsAndAnimals(organization, animal) {
    try {
      const result = await fetch('/organizations', {
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
      const result = await fetch('/animals', {
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
