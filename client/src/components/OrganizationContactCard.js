import styled from 'styled-components/macro';

export default function OrganizationContactCard({
  selectedOrganizationToContact,
}) {
  return (
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
