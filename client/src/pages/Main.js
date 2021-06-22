import styled from 'styled-components/macro';
import AnimalCard from '../components/AnimalCard';
import Navigation from '../components/Navigation';


export default function Main({ organizations, animals, onToggleFavoritesAndFilter }) {

  return (
    <section>
      <ResultsText>
        We found <span style={{ fontWeight: 'bold' }}>{animals.length}</span>{' '}
        results matching your search:
      </ResultsText>
      <AnimalCard organizations={organizations} animals={animals} onToggleFavoritesAndFilter={onToggleFavoritesAndFilter} />
      <Navigation />
    </section>
  );
}

const ResultsText = styled.p`
  letter-spacing: 0.05rem;
  padding: 0.5rem;
`;
