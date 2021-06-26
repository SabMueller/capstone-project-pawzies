import styled from 'styled-components/macro';
import FavoriteAnimalCard from '../components/FavoriteAnimalCard';
import Navigation from '../components/Navigation';

export default function Favorites({
  favorites,
  organizations,
  onToggleFavoritesAndFilter,
}) {
  return (
    <FavoritesWrapper>
      <h1>Your Favorites</h1>
      <FavoriteAnimalCard
        favorites={favorites}
        organizations={organizations}
        onToggleFavoritesAndFilter={onToggleFavoritesAndFilter}
      />
      <Navigation />
    </FavoritesWrapper>
  );
}

const FavoritesWrapper = styled.section`
  margin-bottom: 3.5rem;

  h1 {
    margin-top: 1rem;
    text-align: center;
  }
`;
