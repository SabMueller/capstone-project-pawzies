import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import FavoriteAnimalCard from '../components/FavoriteAnimalCard';
import Navigation from '../components/Navigation';
import PawPrints from '../components/PawPrints';

export default function Favorites({
  favorites,
  organizations,
  onToggleFavoritesAndFilter,
  onSetSelectedAnimalToContact,
  onSetSelectedOrganizationToContact,
}) {
  return (
    <FavoritesWrapper>
      <h1>Your Favorites</h1>
      {favorites.map((favorite, index) => {
        return (
          <FavoriteAnimalCard
            key={favorite._id}
            favorite={favorite}
            index={index}
            organizations={organizations}
            onToggleFavoritesAndFilter={onToggleFavoritesAndFilter}
            onSetSelectedAnimalToContact={onSetSelectedAnimalToContact}
            onSetSelectedOrganizationToContact={
              onSetSelectedOrganizationToContact
            }
          />
        );
      })}
      {favorites.length < 1 && <PawPrints />}
      <Navigation />
    </FavoritesWrapper>
  );
}

Favorites.propTypes = {
  favorites: PropTypes.array,
  organizations: PropTypes.array,
  onToggleFavoritesAndFilter: PropTypes.func,
  onSetSelectedAnimalToContact: PropTypes.func,
  onSetSelectedOrganizationToContact: PropTypes.func,
};

const FavoritesWrapper = styled.section`
  margin-bottom: 3.5rem;

  h1 {
    margin-top: 1rem;
    text-align: center;
  }
`;
