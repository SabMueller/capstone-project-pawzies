import { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { loadFromLocal, saveToLocal } from './lib/localStorage';
import AddForm from './pages/AddForm';
import AnimalSearch from './pages/AnimalSearch';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import Main from './pages/Main';

function App() {
  const [organizations, setOrganizations] = useState([]);
  const [animals, setAnimals] = useState([]);
  const [favorites, setFavorites] = useState(loadFromLocal('favorites') ?? []);

  useEffect(() => {
    saveToLocal('favorites', favorites);
  }, [favorites]);

  useEffect(() => {
    fetch('http://localhost:4000/organizations')
      .then((result) => result.json())
      .then((apiOrganizations) => setOrganizations(apiOrganizations))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    fetch('http://localhost:4000/animals')
      .then((result) => result.json())
      .then((apiAnimals) => setAnimals(apiAnimals))
      .catch((error) => console.error(error));
  }, []);

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

  function Contact() {
    return (
      <>
        <h1>Get In Touch</h1>
      </>
    );
  }

  function toggleFavoritesAndFilter(favoriteAnimal) {
    const animalFavorites = animals.map((animal) => {
      if (animal._id === favoriteAnimal._id) {
        animal.isFavorite = !animal.isFavorite;
      }
      return animal;
    });
    setAnimals(animalFavorites);
    const favoriteAnimals = animals.filter((animal) => animal.isFavorite);
    setFavorites(favoriteAnimals);
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
          <Main
            organizations={organizations}
            animals={animals}
            onToggleFavoritesAndFilter={toggleFavoritesAndFilter}
          />
        </Route>
        <Route path='/favorites'>
          <Favorites
            favorites={favorites}
            organizations={organizations}
            onToggleFavoritesAndFilter={toggleFavoritesAndFilter}
          />
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
