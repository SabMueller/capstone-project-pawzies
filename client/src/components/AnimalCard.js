import { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes, css } from 'styled-components/macro';
import arrowDown from '../assets/images/arrowDown.svg';
import cat from '../assets/images/cat.svg';
import circleIcon from '../assets/images/circleIcon.svg';
import dog from '../assets/images/dog.svg';
import favoriteIcon from '../assets/images/favoriteIcon.png';
import organizationIcon from '../assets/images/organization.svg';
import smallAnimals from '../assets/images/smallAnimals.svg';

export default function AnimalCard({
  animal,
  organizations,
  onToggleFavoritesAndFilter,
  index,
}) {
  const [descriptionViewOpen, setDescriptionViewOpen] = useState([]);

  return (
    <>
      <AnimalCardRendered key={animal._id}>
        <CardTop>
          <AnimalProfile src={animal.picture} alt='profile of animal' />
          <FavoriteIcon
            isFavorite={animal.isFavorite}
            src={favoriteIcon}
            alt='favorite Icon'
            onClick={() => onToggleFavoritesAndFilter(animal)}
          />
          <AnimalName>
            {animal.name.toUpperCase()}, {animal.age}
          </AnimalName>
          <Button
            type='button'
            onClick={() => {
              setDescriptionViewOpen([...descriptionViewOpen, animal._id]);
            }}>
            <img src={arrowDown} alt='Arrow Icon' />
          </Button>
        </CardTop>
        <AnimalShortInfo>
          <AnimalBreed>
            {animal.type === 'cat' ? (
              <CatIcon src={cat} alt='cat icon' />
            ) : null || animal.type === 'dog' ? (
              <DogIcon src={dog} alt='dog icon' />
            ) : null || animal.type === 'small_animals' ? (
              <SmallAnimalsIcon src={smallAnimals} alt='small Animals icon' />
            ) : null}
            <h3>{animal.breed}</h3>
          </AnimalBreed>
          <AnimalGender>
            <img src={circleIcon} alt='circle Icon' />
            <h3>{animal.gender}</h3>
          </AnimalGender>
          {organizations
            .filter((__, i) => i === index)
            .map((organization) => (
              <OrganizationName key={organization._id}>
                <img src={organizationIcon} alt='organization Icon' />
                <h3>{organization.name}</h3>
              </OrganizationName>
            ))}
          <Traits>
            {animal.characteristics.map((trait, index) => (
              <span key={index + trait}>{trait} </span>
            ))}
          </Traits>
        </AnimalShortInfo>
        {descriptionViewOpen.some((animalId) => animalId === animal._id) && (
          <CardBottom>
            <h2>Bio</h2>
            <Description>{animal.description}</Description>
          </CardBottom>
        )}
      </AnimalCardRendered>
    </>
  );
}

AnimalCard.propTypes = {
  organizations: PropTypes.array,
  animal: PropTypes.object,
  onToggleFavoritesAndFilter: PropTypes.func,
  index: PropTypes.number,
};

const swap = keyframes`
  0% {
    opacity: 0;
    -webkit-transform-origin: 0 100%;
    transform-origin: 0 100%;
    -webkit-transform: scale(0, 0) translate(-700px, 0px);
    transform: scale(0, 0) translate(-700px, 0px);
  }

  100% {
    opacity: 1;
    -webkit-transform-origin: 100% 100%;
    transform-origin: 100% 100%;
    -webkit-transform: scale(1, 1) translate(0px, 0px);
    transform: scale(1, 1) translate(0px, 0px);
  }

`;

const beatingHeart = keyframes`
  0% {
    transform: scale(0.8);
  }
  5% {
    transform: scale(0.9);
  }
  10% {
    transform: scale(0.8);
  }
  15% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(0.8);
  }
`;

const AnimalCardRendered = styled.section`
  background-color: var(--white);
  border-radius: 2rem;
  filter: drop-shadow(0 0 0.2rem var(--black));
  letter-spacing: 0.1rem;
  margin-bottom: 1rem;

  @media (min-width: 376px) {
    margin: 0 auto;
    width: 50vw;
  }
`;

const CardTop = styled.section`
  position: relative;
`;

const AnimalProfile = styled.img`
  border-radius: 0.5rem;
  width: 100vw;
  max-height: 31.25rem;
  object-fit: cover;
`;

const FavoriteIcon = styled.img`
  position: absolute;
  top: 0;
  right: 2%;

  animation: ${(props) =>
    props.isFavorite
      ? css`
          ${beatingHeart} 2s ease-in-out infinite;
        `
      : ''};
  cursor: pointer;
  text-align: center;
  text-align: center;
  opacity: ${(props) => (props.isFavorite ? '100%' : '40%')};
  width: 4rem;
`;

const AnimalName = styled.h1`
  position: absolute;
  top: 95%;

  background-image: linear-gradient(to right, #ff758c 0%, #ff7eb3 100%);
  border: 1px solid var(--secondary);
  border-radius: 1rem;
  margin-left: 0.5rem;
  padding: 0.5rem;
`;

const Button = styled.button`
  display: grid;
  place-items: center;

  position: absolute;
  top: 95%;
  right: 5%;

  background-image: linear-gradient(to right, #ff758c 0%, #ff7eb3 100%);
  border: 1px solid var(--secondary);
  border-radius: 50%;
  cursor: pointer;
  font-family: var(--ff-cursive);
  font-size: 1.3rem;
  height: 3rem;
  padding: 0.5rem;
  width: 3rem;

  img {
    padding: 0.2rem;
    width: 1.5rem;
  }

  @media (min-width: 376px) {
  }
`;

const AnimalShortInfo = styled.section`
  padding: 0.2rem 0.5rem;
  margin-top: 2rem;
  margin-bottom: 3rem;

  span {
    display: block;
  }

  @media (min-width: 376px) {
    padding: 2rem;
  }
`;

const AnimalBreed = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  h3 {
    font-family: var(--ff-sans-serif);
    font-size: 1.3rem;
    font-weight: normal;
  }
`;

const AnimalGender = styled(AnimalBreed)`
  margin-top: 0.5rem;

  img {
    margin-right: 0.3rem;
    width: 1.5rem;
  }
`;

const CatIcon = styled.img`
  width: 1.5rem;
`;

const DogIcon = styled.img`
  width: 1.7rem;
`;

const SmallAnimalsIcon = styled.img`
  width: 1.9rem;
`;

const CardBottom = styled.section`
  border-top: 4px dotted var(--gray-dark);
  margin-bottom: 3rem;
  margin-top: 0.2rem;
  padding: 1rem;

  h2 {
    margin-top: 0.2rem;
  }
  @media (min-width: 376px) {
    padding: 2rem;
  }
`;

const Description = styled.p`
  animation: ${swap} 0.8s ease-in;
  padding-bottom: 1rem;

  @media (min-width: 376px) {
    padding: 2rem;
  }
`;

const Traits = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 0.5rem;
  justify-content: space-evenly;

  margin-bottom: 1rem;
  margin-top: 2rem;

  span {
    background-color: var(--primary);
    border-radius: 100vw;
    color: var(--white);
    padding: 0.2rem 0.8rem;
  }
`;

const OrganizationName = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  margin-top: 0.5rem;

  h3 {
    font-family: var(--ff-sans-serif);
    font-size: 1.3rem;
    font-weight: normal;
  }

  img {
    width: 1.7rem;
  }
`;
