import styled from 'styled-components/macro';
import mail from '../assets/images/mail.svg';
import organization from '../assets/images/organization.svg';
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
    font-family: var(--ff-cursive);
    font-size: 1.7rem;
    color: var(--primary);
  }
`;

const PartWrapper = styled.div`
  display: flex;
  gap: 1rem;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;

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
  flex-flow: column wrap;
  align-items: flex-start;
`;
