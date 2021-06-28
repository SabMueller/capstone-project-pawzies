import { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { loadFromLocal, saveToLocal } from './lib/localStorage';
import AddForm from './pages/AddForm';
import AnimalSearch from './pages/AnimalSearch';
import Contact from './pages/Contact';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import Main from './pages/Main';

function App() {
  const [organizations, setOrganizations] = useState([]);
  const [animals, setAnimals] = useState([]);
  const [favorites, setFavorites] = useState(loadFromLocal('favorites') ?? []);
  const [filteredResults, setFilteredResults] = useState([]);
  const [selectedAnimalToContact, setSelectedAnimalToContact] = useState(
    loadFromLocal('animalToContact') ?? []
  );
  const [selectedOrganizationToContact, setSelectedOrganizationToContact] =
    useState(loadFromLocal('organizationToContact') ?? []);

  console.log('Tier', selectedAnimalToContact);
  console.log('Orga', selectedOrganizationToContact);

  useEffect(() => {
    saveToLocal('favorites', favorites);
  }, [favorites]);

  useEffect(() => {
    saveToLocal('animalToContact', selectedAnimalToContact);
  }, [selectedAnimalToContact]);

  useEffect(() => {
    saveToLocal('organizationToContact', selectedOrganizationToContact);
  }, [selectedOrganizationToContact]);

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
          <AnimalSearch
            animals={animals}
            onSetFilteredResults={setFilteredResults}
          />
        </Route>
        <Route path='/add'>
          <AddForm onAddOrganizationsAndAnimals={addOrganizationsAndAnimals} />
        </Route>
        <Route path='/main'>
          <Main
            organizations={organizations}
            animals={filteredResults}
            onToggleFavoritesAndFilter={toggleFavoritesAndFilter}
          />
        </Route>
        <Route path='/favorites'>
          <Favorites
            favorites={favorites}
            organizations={organizations}
            onToggleFavoritesAndFilter={toggleFavoritesAndFilter}
            onSetSelectedAnimalToContact={setSelectedAnimalToContact}
            onSetSelectedOrganizationToContact={
              setSelectedOrganizationToContact
            }
          />
        </Route>
        <Route path='/contact'>
          <Contact
            selectedAnimalToContact={selectedAnimalToContact}
            selectedOrganizationToContact={selectedOrganizationToContact}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
