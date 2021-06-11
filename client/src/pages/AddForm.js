import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import Characteristics from '../components/Characteristics';

export default function AddForm({ onAddOrganizationsAndAnimals }) {
  const initialOrganization = {
    name: '',
    email: '',
    phone: '',
    street: '',
    zip: '',
    city: '',
  };

  const initialAnimal = {
    name: '',
    type: '',
    age: '',
    gender: '',
    breed: '',
    characteristics: [],
    description: '',
    picture: '',
  };

  const [organization, setOrganization] = useState(initialOrganization);
  const [animal, setAnimal] = useState(initialAnimal);

  const [image, setImage] = useState('');

  console.log('FLO?', animal);

  const uploadImage = () => {
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'rjqeqskh');
    data.append('cloud_name', 'pawzies');
    fetch('https://api.cloudinary.com/v1_1/pawzies/image/upload', {
      method: 'POST',
      body: data,
    })
      .then((resp) => resp.json())
      .then((data) => {
        setAnimal({ ...animal, picture: data.url });
      })
      .catch((err) => console.log(err));
    console.log('DATA', data);
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    onAddOrganizationsAndAnimals(organization, animal);
    setOrganization(initialOrganization);
    setAnimal(initialAnimal);
    uploadImage();
  }

  function updateOrganization(event) {
    const fieldName = event.target.name;
    let fieldValue = event.target.value;

    if (event.target.type === 'checkbox') {
      fieldValue = event.target.checked;
    }

    setOrganization({ ...organization, [fieldName]: fieldValue });
  }

  function updateAnimal(event) {
    const fieldName = event.target.name;
    let fieldValue = event.target.value;

    if (event.target.type === 'checkbox') {
      fieldValue = event.target.checked;
    }

    setAnimal({ ...animal, [fieldName]: fieldValue });
  }

  function updateImage(event) {
    const fileSize = event.target.files[0].size;
    if (fileSize > 2097152) {
      alert(
        'Unfortunately, this Image is too big. Please choose another one that is less than 2MB'
      );
    } else setImage(event.target.files[0]);
  }

  function removeTrait(removeTrait) {
    const remainingItems = animal.characteristics.filter(
      (trait) => trait !== removeTrait
    );
    setAnimal({ ...animal, characteristics: [...remainingItems] });
  }

  function updateTraits(newTrait) {
    setAnimal({
      ...animal,
      characteristics: [...animal.characteristics, newTrait],
    });
  }

  return (
    <FormWrapper>
      <h1>Add Organization and Animal</h1>
      <p>Please specify your organization below</p>
      <Form onSubmit={handleFormSubmit}>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          name='name'
          placeholder='Name of your Organization'
          value={organization.name}
          onChange={updateOrganization}
        />
        <label htmlFor='email'>E-Mail</label>
        <input
          type='text'
          name='email'
          placeholder='E-Mail of your Organization'
          value={organization.email}
          onChange={updateOrganization}
        />
        <label htmlFor='phone'>Phone</label>
        <input
          type='text'
          name='phone'
          placeholder='Phone Number of your Organization'
          value={organization.phone}
          onChange={updateOrganization}
        />
        <AddressWrapper>
          <h4>Address</h4>
          <label htmlFor='street'>Street</label>
          <input
            type='text'
            name='street'
            placeholder='Street'
            value={organization.street}
            onChange={updateOrganization}
          />
          <label htmlFor='zip'>ZIP Code</label>
          <input
            type='text'
            name='zip'
            placeholder='ZIP Code'
            value={organization.zip}
            onChange={updateOrganization}
          />
          <label htmlFor='city'> City</label>
          <input
            type='text'
            name='City'
            placeholder='City / Location'
            value={organization.city}
            onChange={updateOrganization}
          />
        </AddressWrapper>
        <p>
          Please provide the following information about the Animal you wish to
          add:
        </p>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          name='name'
          placeholder='Name of the Animal'
          value={animal.name}
          onChange={updateAnimal}
        />
        <label htmlFor='type'>Type</label>
        <select
          name='type'
          id='type'
          value={animal.type}
          onChange={updateAnimal}>
          <option value=''>Select the Animal Type</option>
          <option value='cat'>Cat</option>
          <option value='dog'>Dog</option>
          <option value='small_animals'>Small Animals</option>
        </select>
        <label htmlFor='age'>Age</label>
        <input
          type='number'
          name='age'
          min='0'
          max='30'
          value={animal.age}
          onChange={updateAnimal}
        />
        <label htmlFor='gender'>Gender</label>
        <input
          type='radio'
          name='gender'
          value='female'
          checked={animal.gender === 'female'}
          onChange={updateAnimal}
        />
        Female
        <input
          type='radio'
          name='gender'
          value='male'
          checked={animal.gender === 'male'}
          onChange={updateAnimal}
        />
        Male
        <label htmlFor='breed'>Breed</label>
        <input
          type='text'
          name='breed'
          placeholder='Breed of the Animal'
          value={animal.breed}
          onChange={updateAnimal}
        />
        <Characteristics
          traits={animal.characteristics}
          onRemoveTrait={removeTrait}
          onUpdateTraits={updateTraits}
        />
        <label htmlFor='description'>Description</label>
        <Textarea
          name='description'
          id='description'
          placeholder='Tell us a bit about the Animal'
          value={animal.description}
          onChange={updateAnimal}
          cols='30'
          rows='10'
        />
        <input
          type='file'
          accept='.jpg,.jpeg,.png'
          /*           onChange={(e) => setImage(e.target.files[0])} */
          onChange={updateImage}
        />
        <Link to='/'>
          <button type='cancel'>Go Back</button>
        </Link>
        <button onSubmit={handleFormSubmit}>SUBMIT</button>
      </Form>
    </FormWrapper>
  );
}

const FormWrapper = styled.section`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const AddressWrapper = styled.section`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const Textarea = styled.textarea`
  resize: none;
`;
