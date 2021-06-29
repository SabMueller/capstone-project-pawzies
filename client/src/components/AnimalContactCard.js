import styled from 'styled-components/macro';
import cat from '../assets/images/cat.svg';
import circleIcon from '../assets/images/circleIcon.svg';
import dog from '../assets/images/dog.svg';
import smallAnimals from '../assets/images/smallAnimals.svg';

export default function AnimalContactCard({ selectedAnimalToContact }) {
  return (
    <AnimalCardWrapper>
      <AnimalCard>
        <AnimalName>{selectedAnimalToContact.name.toUpperCase()}</AnimalName>
        <AnimalProfilePicture
          src={selectedAnimalToContact.picture}
          alt='animal profile'
        />
        <AnimalInfo>
          <AnimalBreed>
            {selectedAnimalToContact.type === 'cat' && (
              <CatIcon src={cat} alt='cat icon' />
            )}
            {selectedAnimalToContact.type === 'dog' && (
              <DogIcon src={dog} alt='dog icon' />
            )}
            {selectedAnimalToContact.type === 'small_animals' && (
              <SmallAnimalsIcon src={smallAnimals} alt='small Animals icon' />
            )}
            <h3>{selectedAnimalToContact.breed}</h3>
          </AnimalBreed>
          <AnimalGender>
            <img src={circleIcon} alt='circle Icon' />
            <h3>{selectedAnimalToContact.gender}</h3>
          </AnimalGender>
          <AnimalAge>
            <img src={circleIcon} alt='circle Icon' />
            <h3>{selectedAnimalToContact.age} years old</h3>
          </AnimalAge>
        </AnimalInfo>
      </AnimalCard>
    </AnimalCardWrapper>
  );
}

const AnimalCardWrapper = styled.section`
  display: grid;
  place-items: center;

  margin-bottom: 1rem;
`;

const AnimalCard = styled.section`
  display: flex;
  align-items: center;
  flex-flow: column wrap;
  justify-content: center;

  background-color: var(--white);
  border-radius: 2rem;
  filter: drop-shadow(0 0 0.2rem var(--black));
  letter-spacing: 0.1rem;
  margin: 1rem 0;
  padding: 0.5rem 0;
  width: 90vw;
`;

const AnimalProfilePicture = styled.img`
  max-height: 27rem;
  max-width: 90vw;
`;

const AnimalName = styled.h2`
  color: var(--secondary);
  font-family: var(--ff-cursive);
  font-size: 2rem;
  padding: 0.5rem;
`;

const AnimalInfo = styled.div`
  padding: 1rem;

  h3 {
    font-family: var(--ff-sans-serif);
    font-size: 1rem;
    font-weight: normal;
    margin-left: 0.5rem;
    padding: 0.2rem;
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

const AnimalAge = styled(AnimalBreed)`
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
