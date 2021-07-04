import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import mail from '../assets/images/mail.svg';
import pin from '../assets/images/pin.svg';
import phone from '../assets/images/phone.svg';

export default function OrganizationContactCard({
  selectedOrganizationToContact,
}) {
  return (
    <OrganizationWrapper>
      <h3>Organization Name</h3>
      <h2>{selectedOrganizationToContact.name.toUpperCase()}</h2>
      <PartWrapper>
        <Icon src={mail} alt='mail icon' />
        <a href={`mailto:${selectedOrganizationToContact.email}`}>
          {selectedOrganizationToContact.email}
        </a>
      </PartWrapper>
      <PartWrapper>
        <Icon src={phone} alt='phone icon' />
        <a href={`tel:${selectedOrganizationToContact.phone}`}>
          {selectedOrganizationToContact.phone}
        </a>
      </PartWrapper>
      <PartWrapper>
        <Icon src={pin} alt='map icon' />
        <AddressWrapper>
          <span>{selectedOrganizationToContact.street}</span>
          <span>{selectedOrganizationToContact.zip}</span>
          <span>{selectedOrganizationToContact.city}</span>
        </AddressWrapper>
      </PartWrapper>
    </OrganizationWrapper>
  );
}

OrganizationContactCard.propTypes = {
  selectedOrganizationToContact: PropTypes.object,
};

const OrganizationWrapper = styled.section`
  display: flex;
  flex-flow: column wrap;
  gap: 1rem;

  background-color: var(--gray);
  border-radius: 2rem;
  color: var(--black);
  filter: drop-shadow(0 0 0.2rem var(--black));
  margin: 2rem 0;
  padding: 1rem;
  text-align: center;
  width: 90vw;

  h2 {
    color: var(--primary);
    font-family: var(--ff-cursive);
    font-size: 1.7rem;
  }

  @media (min-width: 376px) {
    letter-spacing: 0.1rem;
    padding-left: 2rem;
    width: 80vw;
  }
`;

const PartWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row wrap;
  gap: 1rem;
  justify-content: flex-start;

  h3 {
    font-size: 1.3rem;
  }

  a {
    color: var(--secondary);
  }
`;

const Icon = styled.img`
  width: 2rem;
`;

const AddressWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-flow: column wrap;
`;
