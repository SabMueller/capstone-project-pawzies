import {useState} from 'react';
import styled from 'styled-components/macro';
import arrowDown from '../assets/images/arrowDown.svg';
import cat from '../assets/images/cat.svg';
import circleIcon from '../assets/images/circleIcon.svg';
import dog from '../assets/images/dog.svg';
import favoriteIcon from '../assets/images/favoriteIcon.png';
import organizationIcon from '../assets/images/organization.svg';
import smallAnimals from '../assets/images/smallAnimals.svg';

export default function AnimalCard({animals, organizations, onToggleFavoritesAndFilter}) {

    const [descriptionViewOpen, setDescriptionViewOpen] = useState([]);

    return (
        <>
        {animals.map((animal, index) => (
            <AnimalCardRendered key={animal._id}>
              <CardTop>
                <AnimalProfile src={animal.picture} alt='profile of animal' />
                <FavoriteIcon
                  src={favoriteIcon}
                  alt='favorite Icon'
                  onClick={() => onToggleFavoritesAndFilter(animal)}
                  style={animal.isFavorite ? {opacity: '100%',
                  transition: 'all 0.4s ease-in',
                  transform: 'scale(1.2)', } : {opacity: '40%', transition: 'all 0.5s ease.out'}}
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
          ))}
          </>
    )
}


const AnimalCardRendered = styled.section`
  background-color: var(--white);
  border-radius: 2rem;
  filter: drop-shadow(0 0 0.2rem black);
  letter-spacing: 0.1rem;
  margin-bottom: 1rem;
`;

const CardTop = styled.section`
  position: relative;
`;

const AnimalProfile = styled.img`
  border-radius: 0.5rem;
  max-width: 100vw;
  max-height: 31.25rem;
`;

const FavoriteIcon = styled.img`
  position: absolute;
  top: 0;
  right: 2%;

  cursor: pointer;
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
  right: 10%;

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
`;

const AnimalShortInfo = styled.section`
  padding: 0.2rem 0.5rem;
  margin-top: 2rem;
  margin-bottom: 0.3rem;

  span {
    display: block;
  }
`;

const AnimalBreed = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  h3 {
    font-family: var(--ff-sans-serif);
    font-weight: normal;
    font-size: 1.3rem;
  }
`;

const AnimalGender = styled(AnimalBreed)`
  margin-top: 0.5rem;

  img {
    width: 1.5rem;
    margin-right: 0.3rem;
  }
`;

const OrganizationName = styled(AnimalBreed)`
    margin-top: 0.5rem;

  img {
    width: 1.7rem;
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
`;

const Description = styled.p`
  padding-bottom: 1rem;
`;

const Traits = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  gap: 0.5rem;

  margin: 1rem 0;

  span {
    background-color: var(--primary);
    border-radius: 100vw;
    color: var(--white);
    padding: 0.2rem 0.8rem;
  }
`;
