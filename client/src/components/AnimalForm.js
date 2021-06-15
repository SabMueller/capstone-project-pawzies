import styled from 'styled-components/macro';
import Characteristics from '../components/Characteristics';
import UploadIcon from '../assets/icons/UploadIcon.svg';

export default function AnimalForm({
  animal,
  onUpdateAnimal,
  onRemoveTrait,
  hiddenFileInput,
  imageName,
  onUpdateImage,
  onHandleClick,
  onUpdateTraits,
}) {
  return (
    <>
      <P>
        Please provide the following information about the Animal you wish to
        add:
      </P>
      <label htmlFor='name'>Name*</label>
      <Input
        type='text'
        name='name'
        placeholder='Name of the Animal'
        value={animal.name}
        onChange={onUpdateAnimal}
        required
      />
      <label htmlFor='type'>Type*</label>
      <Select
        name='type'
        id='type'
        value={animal.type}
        onChange={onUpdateAnimal}
        required>
        <option value=''>Select the Animal Type</option>
        <option value='cat'>Cat</option>
        <option value='dog'>Dog</option>
        <option value='small_animals'>Small Animals</option>
      </Select>
      <label htmlFor='age'>Age*</label>
      <AgeInput
        type='number'
        name='age'
        placeholder='Age'
        value={animal.age}
        onChange={onUpdateAnimal}
      />

      <label htmlFor='gender'>Gender*</label>
      <RadioWrapper>
        <label className='radio'>
          <span className='radio__input'>
            <input
              type='radio'
              name='gender'
              value='female'
              checked={animal.gender === 'female'}
              onChange={onUpdateAnimal}
              required
            />
            <span className='radio__control'></span>
          </span>
          <span className='radio__label'>Female</span>
        </label>
        <label className='radio'>
          <span className='radio__input'>
            <input
              type='radio'
              name='gender'
              value='male'
              checked={animal.gender === 'male'}
              onChange={onUpdateAnimal}
              required
            />
            <span className='radio__control'></span>
          </span>
          <span className='radio__label'>Male</span>
        </label>
      </RadioWrapper>
      <label htmlFor='breed'>Breed*</label>
      <Input
        type='text'
        name='breed'
        placeholder='Breed of the Animal'
        value={animal.breed}
        onChange={onUpdateAnimal}
        required
      />
      <Characteristics
        traits={animal.characteristics}
        onRemoveTrait={onRemoveTrait}
        onUpdateTraits={onUpdateTraits}
        required
      />
      <h5>Profile Picture</h5>
      <P isDescription>Upload a picture of the animal</P>
      <Label onClick={onHandleClick} htmlFor='picture'>
        Profile Picture{' '}
        <img style={{ width: '1.5rem' }} src={UploadIcon} alt='upload icon' />
      </Label>
      <Input
        type='file'
        name='picture'
        accept='.jpg,.jpeg,.png,.svg'
        onChange={onUpdateImage}
        style={{ display: 'none' }}
        ref={hiddenFileInput}
      />
      <P isDescription style={{ fontWeight: 'bolder' }}>
        Selected file: {imageName}
      </P>
      <label htmlFor='description'>Description*</label>
      <Textarea
        name='description'
        id='description'
        placeholder='Tell us a bit about the Animal'
        value={animal.description}
        onChange={onUpdateAnimal}
        cols='30'
        rows='10'
        required
      />
    </>
  );
}

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

const AgeInput = styled(Input)`
  width: 30vw;
  margin-bottom: 0.5rem;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-around;

  background-color: var(--gray);
  border: 1px solid black;
  border-radius: 100vw;
  color: var(--black);
  cursor: pointer;
  filter: drop-shadow(0 0 0.18rem var(--black));
  font-family: var(--ff-cursive);
  font-size: 1.3rem;
  padding: 0.5rem;
  width: 13rem;
`;

const P = styled.p`
  color: ${(props) =>
    props.isDescription ? 'var(--black)' : 'var(--primary-dark)'};
  font-size: ${(props) => (props.isDescription ? '1.2rem' : '1.5rem')};
  font-weight: ${(props) => (props.isDescription ? 'normal' : 'bold')};
  margin: 0.5rem 0;
  padding: 0 1.7rem;
  text-align: center;
`;

const RadioWrapper = styled.section`
  color: white;

  .radio {
    display: grid;
    align-items: baseline;
    grid-gap: 0.5em;
    grid-template-columns: min-content auto;

    color: var(--primary);
    font-size: 1.5rem;
    margin-bottom: 1rem;

    &:focus-within {
      .radio__label {
        opacity: 1;
        transform: scale(1.05);
      }
    }

    .radio__input {
      display: flex;

      input {
        height: 0;
        opacity: 0;
        width: 0;
      }

      .radio__control {
        display: grid;
        place-items: center;

        border: 0.1em solid currentColor;
        border-radius: 50%;
        color: var(--blue-dark);
        height: 1em;
        width: 1em;
        transform: translateY(-0.05em);
      }

      input + .radio__control::before {
        border-radius: 50%;
        box-shadow: inset 0.5em 0.5em currentColor;
        content: '';
        height: 0.5em;
        transform: scale(0);
        transition: 180ms transform ease-in-out;
        width: 0.5em;
      }

      input:checked + .radio__control::before {
        transform: scale(1);
      }

      .radio__label {
        line-height: 1;
        opacity: 0.8;
        transition: 180ms all ease-in-out;
      }
    }
  }
`;

const Select = styled.select`
  background-color: var(--blue-dark);
  border: 1px inset var(--black);
  border-radius: 0.5rem;
  color: var(--white);
  font-size: 1rem;
  height: 2.5rem;
  text-align-last: center;
  width: 70vw;

  &:focus {
    outline-color: var(--white);
  }
`;

const Textarea = styled.textarea`
  align-self: center;
  background-color: var(--blue-dark);
  border: 1px inset var(--black);
  border-radius: 0.5rem;
  color: var(--white);
  font-family: sans-serif;
  font-size: 1rem;
  padding: 1rem;
  resize: none;
  text-align: center;
  width: ${(props) => (props.isRadio ? '1.5rem' : '70vw')};

  &:focus {
    outline-color: var(--white);
  }

  &::placeholder {
    color: darkgray;
  }
`;
