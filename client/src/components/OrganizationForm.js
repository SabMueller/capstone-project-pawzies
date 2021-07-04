import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

export default function OrganizationForm({
  organization,
  onUpdateOrganization,
}) {
  return (
    <>
      <P>Please specify your organization below</P>
      <label htmlFor='name'>Name*</label>
      <Input
        type='text'
        name='name'
        placeholder='Name of your Organization'
        value={organization.name}
        onChange={onUpdateOrganization}
      />
      <label htmlFor='email'>E-Mail*</label>
      <Input
        type='text'
        name='email'
        placeholder='E-Mail of your Organization'
        value={organization.email}
        onChange={onUpdateOrganization}
      />
      <label htmlFor='phone'>Phone*</label>
      <Input
        type='text'
        name='phone'
        placeholder='Phone Number of your Organization'
        value={organization.phone}
        onChange={onUpdateOrganization}
      />
      <AddressWrapper>
        <h4>Address</h4>
        <label htmlFor='street'>Street*</label>
        <Input
          type='text'
          name='street'
          placeholder='Street'
          value={organization.street}
          onChange={onUpdateOrganization}
          required
        />
        <label htmlFor='zip'>ZIP Code*</label>
        <Input
          type='text'
          name='zip'
          placeholder='ZIP Code'
          value={organization.zip}
          onChange={onUpdateOrganization}
          required
        />
        <label htmlFor='city'> City*</label>
        <Input
          type='text'
          name='city'
          placeholder='City / Location'
          value={organization.city}
          onChange={onUpdateOrganization}
          required
        />
      </AddressWrapper>
    </>
  );
}

OrganizationForm.propTypes = {
  organization: PropTypes.array,
  onUpdateOrganization: PropTypes.func,
  animal: PropTypes.array,
  onUpdateAnimal: PropTypes.func,
};

const AddressWrapper = styled.section`
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  margin-bottom: 2rem;

  h4 {
    margin: 0.3rem 0;
  }
`;

const Input = styled.input`
  align-self: center;
  background-color: var(--blue-dark);
  border: 1px inset var(--black);
  border-radius: 0.5rem;
  color: var(--white);
  font-size: 1rem;
  height: 2.5rem;
  text-align: center;
  width: ${(props) => (props.isRadio ? '1.5rem' : '70vw')};

  &:focus {
    outline-color: var(--white);
  }

  &::placeholder {
    color: darkgray;
  }
`;

const P = styled.p`
  color: ${(props) =>
    props.isDescription ? 'var(--black)' : 'var(--primary-dark)'};
  margin: 0.5rem 0;
  padding: 0 1.7rem;
  text-align: center;
  font-size: ${(props) => (props.isDescription ? '1.2rem' : '1.5rem')};
  font-weight: ${(props) => (props.isDescription ? 'normal' : 'bold')};
`;
