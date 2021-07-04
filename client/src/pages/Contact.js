import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AnimalContactCard from '../components/AnimalContactCard';
import PawziesContactCard from '../components/PawziesContactCard';
import OrganizationContactCard from '../components/OrganizationContactCard';
import ArrowIcon from '../assets/images/arrowIcon.svg';

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
      <Link to='/main' style={{ textDecoration: 'none' }}>
        <Button type='button'>
          <Icon isLeft src={ArrowIcon} alt='arrow pointing left' />
          GO BACK
        </Button>
      </Link>
    </ContactWrapper>
  );
}

Contact.propTypes = {
  selectedAnimalToContact: PropTypes.object,
  selectedOrganizationToContact: PropTypes.object,
};

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

const Button = styled.button`
  display: flex;
  justify-content: space-evenly;

  background-color: var(--gray);
  border-radius: 100vw;
  cursor: pointer;
  filter: drop-shadow(0 0 0.1rem var(--black));
  font-family: var(--ff-cursive);
  font-size: 1.3rem;
  padding: 0.5rem;
  width: 9rem;
`;

const Icon = styled.img`
  transform: scaleX(-1);
  width: 0.8rem;
`;
