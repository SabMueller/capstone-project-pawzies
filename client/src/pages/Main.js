import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import AnimalCard from '../components/AnimalCard';
import Navigation from '../components/Navigation';
import ArrowIcon from '../assets/images/arrowIcon.svg';

export default function Main({
  organizations,
  animals,
  onToggleFavoritesAndFilter,
}) {
  return (
    <section>
      {animals.length >= 1 ? (
        <ResultsText>
          We found <span style={{ fontWeight: 'bold' }}>{animals.length}</span>{' '}
          results matching your search:
        </ResultsText>
      ) : (
        <ErrorWrapper>
          <p>
            Unfortunately, we couldn't find{' '}
            <span> any results matching your search </span>. Please go back,
            adjust your search criteria and try again.
          </p>
          <Link style={{ textDecoration: 'none' }} to='/search'>
            <Button type='button'>
              <Icon isLeft src={ArrowIcon} alt='arrow pointing left' />
              GO BACK
            </Button>
          </Link>
        </ErrorWrapper>
      )}
      {animals.map((animal, index) => {
        return (
          <AnimalCard
            key={animal._id}
            organizations={organizations}
            animal={animal}
            index={index}
            onToggleFavoritesAndFilter={onToggleFavoritesAndFilter}
          />
        );
      })}
      <Navigation />
    </section>
  );
}

const ResultsText = styled.p`
  letter-spacing: 0.05rem;
  padding: 0.5rem;
`;

const ErrorWrapper = styled.section`
  display: grid;
  place-items: center;

  letter-spacing: 0.05rem;
  line-height: 1.8;
  padding: 4rem;
  letter-spacing: 0.05rem;

  p {
    color: white;
    font-weight: bold;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: space-evenly;

  background-color: var(--gray);
  border-radius: 100vw;
  cursor: pointer;
  filter: drop-shadow(0 0 0.1rem var(--black));
  font-family: var(--ff-cursive);
  font-size: 1.3rem;
  margin-top: 2rem;
  padding: 0.5rem;
  width: 9rem;
`;

const Icon = styled.img`
  transform: scaleX(-1);
  width: 0.8rem;
`;
