import styled from 'styled-components/macro';
import Navigation from '../components/Navigation';
import cat from '../assets/images/cat.svg';
import circleIcon from '../assets/images/circleIcon.svg';
import dog from '../assets/images/dog.svg';
import smallAnimals from '../assets/images/smallAnimals.svg';

export default function Contact({
  selectedAnimalToContact,
  selectedOrganizationToContact,
}) {
  return (
    <ContactWrapper>
      <h1>Get In Touch</h1>
      <AnimalCardWrapper>
        <AnimalCard>
          <AnimalName>{selectedAnimalToContact.name.toUpperCase()}</AnimalName>
          <AnimalProfilePicture
            src={selectedAnimalToContact.picture}
            alt='animal profile'
          />
          <AnimalInfo>
            <AnimalBreed>
              {selectedAnimalToContact.type === 'cat' ? (
                <CatIcon src={cat} alt='cat icon' />
              ) : null || selectedAnimalToContact.type === 'dog' ? (
                <DogIcon src={dog} alt='dog icon' />
              ) : null || selectedAnimalToContact.type === 'small_animals' ? (
                <SmallAnimalsIcon src={smallAnimals} alt='small Animals icon' />
              ) : null}
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
      <TextWrapper>
        <h3>
          Are you interested in adopting{' '}
          {selectedAnimalToContact.name.toUpperCase()}?
        </h3>
        <p>
          At <span> PAWZIES</span> we want you to find and adopt your{' '}
          <span>Friend For Life</span>. In order to achieve this, it is crucial
          to ensure that you and your chosen animal are 100% compatible. Below,
          we provied all the available contact information of{' '}
          <span>{selectedOrganizationToContact.name}</span> so you can easily
          get in touch with them to discuss availability and prerequisites or
          schedule a meeting to get to know{' '}
          <span>{selectedAnimalToContact.name}</span> better!
        </p>
      </TextWrapper>
      <OrganizationWrapper>
        <h3>Organization Name</h3>
        <h2>{selectedOrganizationToContact.name.toUpperCase()}</h2>
        <h3>Organization E-Mail</h3>
        <span>{selectedOrganizationToContact.email}</span>
        <h3>Organization Phone Number</h3>
        <span>{selectedOrganizationToContact.phone}</span>
        <h3>Organization Address</h3>
        <AddressWrapper>
          <span>{selectedOrganizationToContact.street}</span>
          <span>{selectedOrganizationToContact.zip}</span>
          <span>{selectedOrganizationToContact.city}</span>
        </AddressWrapper>
      </OrganizationWrapper>

      <Navigation />
    </ContactWrapper>
  );
}
const ContactWrapper = styled.section`
  display: grid;
  place-items: center;

  margin-bottom: 1.5rem;

  h1 {
    margin: 1rem 0 0 2rem;
    text-align: center;
  }
  h3 {
    text-align: center;
  }
`;

const TextWrapper = styled.section`
  display: grid;
  place-items: center;

  background-color: var(--secondary-dark);
  border-radius: 2rem;
  color: var(--gray);
  filter: drop-shadow(0 0 0.2rem var(--black));
  padding: 1rem;
  width: 90vw;

  h3 {
    margin-bottom: 1rem;
  }

  p {
    letter-spacing: 0.05rem;

    span {
      font-weight: bold;
      color: var(--white);
    }
  }
`;

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

const OrganizationWrapper = styled.section`
  background-color: var(--gray);
  color: var(--black);
  border-radius: 2rem;
  filter: drop-shadow(0 0 0.2rem var(--black));
  width: 90vw;
  padding: 1rem;
  margin: 2rem 0;
  text-align: center;
  display: flex;
  flex-flow: column wrap;
  gap: 1rem;

  h2 {
    font-size: 1.7rem;
    font-family: var(--ff-cursive);
    color: var(--primary-dark);
  }

  h3 {
    font-size: 1.3rem;
  }
`;

const AddressWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
`;
