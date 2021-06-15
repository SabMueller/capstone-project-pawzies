import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import AnimalForm from '../components/AnimalForm';
import OrganizationForm from '../components/OrganizationForm';
import {
  validateAnimalTrait,
  validateOrganization,
  validateAnimal,
} from '../lib/Validation';
import Logo from '../assets/images/logo.svg';
import ArrowIcon from '../assets/icons/ArrowIcon.svg';

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
  const [isError, setIsError] = useState(false);
  const [imageName, setImageName] = useState('');
  const [isSuccessView, setIsSuccessView] = useState(false);
  const [isStandardView, setIsStandardView] = useState(true);

  const hiddenFileInput = useRef(null);
  const handleClick = (e) => {
    hiddenFileInput.current && hiddenFileInput.current.click();
  };

  const uploadImage = (image) => {
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
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    if (
      validateOrganization(organization) &&
      validateAnimalTrait(animal.characteristics) &&
      validateAnimal(animal)
    ) {
      onAddOrganizationsAndAnimals(organization, animal);
      setOrganization(initialOrganization);
      setAnimal(initialAnimal);
      setIsSuccessView(true);
      setIsError(false);
      setIsSuccessView(true);
      setIsStandardView(false);
    } else {
      setIsError(true);
      setTimeout(() => setIsError(false), 5000);
      setIsSuccessView(false);
    }
  }

  function updateOrganization(event) {
    const fieldName = event.target.name;
    let fieldValue = event.target.value;

    setOrganization({ ...organization, [fieldName]: fieldValue });
  }

  function updateAnimal(event) {
    const fieldName = event.target.name;
    let fieldValue = event.target.value;

    setAnimal({ ...animal, [fieldName]: fieldValue });
  }

  function updateImage(event) {
    const fileName = event.target.files[0].name;
    const fileSize = event.target.files[0].size;
    if (fileSize > 2097152) {
      alert(
        'Unfortunately, this Image is too big. Please choose another one that is less than 2MB'
      );
      return false;
    } else uploadImage(event.target.files[0]);
    setImageName(fileName);
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
    <>
      {isSuccessView && (
        <SuccessView>
          {' '}
          <p>Everything worked.</p>
          <p>Thank You!</p>
          <Link style={{ textDecoration: 'none' }} to='/'>
            <BackButton>
              <Icon isLeft src={ArrowIcon} alt='arrow pointing left' />
              BACK TO START
            </BackButton>
          </Link>
        </SuccessView>
      )}
      {isStandardView && (
        <FormWrapper>
          <LogoWrapper>
            <LogoImage src={Logo} alt='Logo of Pawzies' />
          </LogoWrapper>
          <h1>
            Add Your Organization and Animal to <span>Pawzies</span>
          </h1>
          <Form onSubmit={handleFormSubmit}>
            <OrganizationForm
              organization={organization}
              onUpdateOrganization={updateOrganization}
            />
            <AnimalForm
              animal={animal}
              onUpdateAnimal={updateAnimal}
              onRemoveTrait={removeTrait}
              hiddenFileInput={hiddenFileInput}
              imageName={imageName}
              onUpdateImage={updateImage}
              onHandleClick={handleClick}
              onUpdateTraits={updateTraits}
            />
            {isError ? (
              <ErrorBox>
                Something went wrong! Please check if you've entered everything
                correctly and try again.
              </ErrorBox>
            ) : null}
            <ButtonWrapper>
              <Link style={{ textDecoration: 'none' }} to='/'>
                <Button type='button'>
                  <Icon isLeft src={ArrowIcon} alt='arrow pointing left' />
                  GO BACK
                </Button>
              </Link>
              <Button>
                SUBMIT
                <img
                  src={ArrowIcon}
                  alt='arrow pointing right'
                  style={{ width: '0.8rem' }}
                />
              </Button>
            </ButtonWrapper>
          </Form>
        </FormWrapper>
      )}
    </>
  );
}

const FormWrapper = styled.section`
  display: flex;
  align-items: center;
  flex-flow: column nowrap;

  background-image: linear-gradient(to right, #ff758c 0%, #ff7eb3 100%);
  color: var(--secondary);
  font-weight: bold;
  margin: 0;

  h1 {
    color: var(--white);
    padding: 0 1.5rem;
    margin-bottom: 0.5rem;
    text-align: center;
  }

  span {
    color: var(--black);
    font-weight: normal;
  }
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  gap: 0.5rem;

  background-color: rgba(217, 219, 227, 30%);
  border-radius: 0.8rem;
  font-size: 1.5rem;
  margin: 1rem;
  padding: 0.5rem;

  span {
    color: var(--secondary);
  }

  h5 {
    font-size: 1.5rem;
    margin: 0rem;
    padding-top: 0.4rem;
  }
`;

const LogoWrapper = styled.div`
  display: grid;
  place-items: center;

  background: var(--gray);
  border-bottom-left-radius: 20%;
  border-bottom-right-radius: 20%;
  filter: drop-shadow(0 0 0.8rem var(--black));
  margin-bottom: 1.3rem;
  padding: 1.3rem;
  width: 10rem;
`;

const LogoImage = styled.img`
  width: 10rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 80vw;
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
  margin: 0.3rem 0;
  padding: 0.5rem;
  width: 9rem;
`;

const Icon = styled.img`
  transform: scaleX(-1);
  width: 0.8rem;
`;

const ErrorBox = styled.div`
  background: var(--error);
  border-radius: 0.5rem;
  box-shadow: 1px 1px 2px var(--black);
  color: var(--white);
  font-family: sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  padding: 1rem;
`;

const SuccessView = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-evenly;
  color: var(--white);
  background: linear-gradient(
    180deg,
    rgba(49, 211, 211, 1) 0%,
    rgba(31, 153, 182, 1) 32%,
    rgba(8, 55, 118, 1) 100%
  );
  height: 101vh;

  p {
    font-size: 2rem;
    font-weight: bold;
  }
`;

const BackButton = styled.button`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  background-color: var(--gray);
  border-radius: 100vw;
  cursor: pointer;
  filter: drop-shadow(0 0 0.1rem var(--black));
  font-family: var(--ff-cursive);
  font-size: 1.3rem;
  height: 5rem;
  margin: 0.3rem 0;
  padding: 0.5rem;
  width: 15rem;
`;
