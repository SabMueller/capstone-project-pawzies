import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import cat from '../assets/images/cat.svg';
import dog from '../assets/images/dog.svg';
import favoriteIcon from '../assets/images/favoriteIcon.png';
import organizationIcon from '../assets/images/organization.svg';
import smallAnimals from '../assets/images/smallAnimals.svg';
import ArrowIcon from '../assets/images/arrowIcon.svg';

import Navigation from '../components/Navigation';

export default function Favorites({
  favorites,
  organizations,
  onToggleFavoritesAndFilter,
}) {
  return (
    <FavoritesWrapper>
      <h1>Your Favorites</h1>
      {favorites.map((favorite, index) => (
        <FavoriteCardWrapper key={favorite._id}>
          <FavoriteCard>
            <FavoriteProfile src={favorite.picture} alt='favorite profile' />
            <FavoriteName>{favorite.name.toUpperCase()}</FavoriteName>
            <FavoriteIcon
              src={favoriteIcon}
              alt='favorite Icon'
              onClick={() => onToggleFavoritesAndFilter(favorite)}
              style={
                favorite.isFavorite
                  ? {
                      opacity: '100%',
                      transition: 'all 0.4s ease-in',
                      transform: 'scale(1.2)',
                    }
                  : { opacity: '40%', transition: 'all 0.5s ease.out' }
              }
            />
            <FavoriteInfo>
              <FavoriteInfoWrapper>
                {favorite.type === 'cat' ? (
                  <CatIcon src={cat} alt='cat icon' />
                ) : null || favorite.type === 'dog' ? (
                  <DogIcon src={dog} alt='dog icon' />
                ) : null || favorite.type === 'small_animals' ? (
                  <SmallAnimalsIcon
                    src={smallAnimals}
                    alt='small Favorites icon'
                  />
                ) : null}
                <h3>{favorite.breed}</h3>
              </FavoriteInfoWrapper>
              {organizations
                .filter((__, i) => i === index)
                .map((organization) => (
                  <OrganizationWrapper key={organization._id}>
                    <OrganizationIcon
                      src={organizationIcon}
                      alt='organization Icon'
                    />
                    <h3>{organization.name}</h3>
                  </OrganizationWrapper>
                ))}
            </FavoriteInfo>
          </FavoriteCard>
          <Link to='/contact'>
            <ContactButton type='button'>
              GET IN TOUCH
              <img
                src={ArrowIcon}
                alt='An Icon displaying an arrow pointing to the right'
              />
            </ContactButton>
          </Link>
        </FavoriteCardWrapper>
      ))}
      <Navigation />
    </FavoritesWrapper>
  );
}

const FavoritesWrapper = styled.section`
  margin-bottom: 3.5rem;

  h1 {
    text-align: center;
  }
`;

const FavoriteCardWrapper = styled.section`
  position: relative;
`;

const FavoriteCard = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  place-items: center;

  background-color: var(--white);
  border-radius: 2rem;
  filter: drop-shadow(0 0 0.2rem var(--black));
  height: 10rem;
  letter-spacing: 0.1rem;
  margin: 2rem 0;
  padding: 0 0.25rem;
`;

const FavoriteProfile = styled.img`
  grid-column: 1/2;

  border: 1px solid var(--blue-dark);
  border-radius: 50%;
  height: 35vw;
  object-fit: cover;
  width: 35vw;
`;

const FavoriteIcon = styled.img`
  position: absolute;
  top: 2%;
  right: 4%;

  cursor: pointer;
  width: 2.5rem;
`;

const FavoriteName = styled.h2`
  place-self: flex-start;

  color: var(--blue-dark);
  font-size: 1.2rem;
  grid-column: 2/4;
  grid-row: 1;
  padding: 0.5rem;
`;

const FavoriteInfo = styled.div`
  grid-column: 2/-1;
  grid-row: 1;
  margin-top: 1rem;

  h3 {
    font-family: var(--ff-sans-serif);
    font-size: 1rem;
    font-weight: normal;
    margin-left: 0.5rem;
  }
`;

const OrganizationIcon = styled.img`
  width: 1.7rem;
  margin-left: 0.5rem;
`;

const CatIcon = styled.img`
  width: 1.5rem;
  margin-left: 0.5rem;
`;

const DogIcon = styled.img`
  width: 1.7rem;
  margin-left: 0.5rem;
`;

const SmallAnimalsIcon = styled.img`
  width: 1.9rem;
  margin-left: 0.5rem;
`;

const FavoriteInfoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const OrganizationWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1.2rem;
`;

const ContactButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;

  position: absolute;
  right: 5%;
  bottom: -10%;

  background-color: var(--gray);
  border-radius: 100vw;
  cursor: pointer;
  font-family: var(--ff-cursive);
  font-size: 1rem;
  padding: 0.5rem;
  width: 9rem;

  img {
    width: 0.7rem;
  }
`;
