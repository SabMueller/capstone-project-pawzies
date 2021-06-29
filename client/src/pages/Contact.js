import styled from 'styled-components/macro';
import AnimalContactCard from '../components/AnimalContactCard';
import PawziesContactCard from '../components/PawziesContactCard';
import Navigation from '../components/Navigation';
import OrganizationContactCard from '../components/OrganizationContactCard';

export default function Contact({
  selectedAnimalToContact,
  selectedOrganizationToContact,
}) {
  return (
    <ContactWrapper>
      <h1>Get In Touch</h1>
      <AnimalContactCard selectedAnimalToContact={selectedAnimalToContact} />
      <PawziesContactCard
        selectedAnimalToContact={selectedAnimalToContact}
        selectedOrganizationToContact={selectedOrganizationToContact}
      />
      <OrganizationContactCard
        selectedOrganizationToContact={selectedOrganizationToContact}
      />
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
