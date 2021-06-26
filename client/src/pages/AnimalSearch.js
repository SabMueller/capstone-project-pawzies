import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';
import ArrowIcon from '../assets/images/arrowIcon.svg';
import Logo from '../assets/images/logo.svg';

export default function AnimalSearch({
  animals,
  filteredResults,
  onSetFilteredResults,
}) {
  const initialSelectedValues = {
    animalType: '',
    gender: '',
    name: '',
  };

  const [selectedValues, setSelectedValues] = useState(initialSelectedValues);

  let history = useHistory();

  const handleSelect = (event) => {
    const filterName = event.target.name;
    setSelectedValues({ ...selectedValues, [filterName]: event.target.value });
  };

  function handleSearchSubmit(event) {
    event.preventDefault();
    filterResults();
    history.push('/main');
  }

  const filterByGender = (selectedValues, animal) => {
    if (selectedValues.gender !== '') {
      return selectedValues.gender === animal.gender;
    }
  };

  const filterByAnimalType = (selectedValues, animal) => {
    if (selectedValues.animalType !== '') {
      return selectedValues.animalType === animal.type;
    }
  };

  const filterIsSet = (selectedValues, filterType) => {
    return selectedValues[filterType] && selectedValues[filterType] !== '';
  };

  function filterResults() {
    const filteredEndResults = animals.filter((animal) => {
      if (
        filterIsSet(selectedValues, 'gender') &&
        !filterIsSet(selectedValues, 'animalType')
      ) {
        return filterByGender(selectedValues, animal);
      }
      if (
        filterIsSet(selectedValues, 'animalType') &&
        !filterIsSet(selectedValues, 'gender')
      ) {
        return filterByAnimalType(selectedValues, animal);
      }
      if (
        filterIsSet(selectedValues, 'gender') &&
        filterIsSet(selectedValues, 'animalType')
      ) {
        return (
          filterByGender(selectedValues, animal) &&
          filterByAnimalType(selectedValues, animal)
        );
      }
      return true;
    });

    onSetFilteredResults(filteredEndResults);
  }

  return (
    <SearchFormWrapper>
      <LogoWrapper>
        <LogoImage src={Logo} alt='Logo of Pawzies' />
      </LogoWrapper>
      <SearchForm onSubmit={handleSearchSubmit}>
        <p>
          Find a <span>Furry Friend</span> by defining your search criteria
          below or by choosing to be non-specific - it's up to <span>You</span>!
        </p>
        <TypeWrapper>
          <label htmlFor='animalType'>Pet Type </label>
          <Select
            name='animalType'
            id='animalType'
            value={selectedValues.animalType}
            onChange={handleSelect}>
            <option value=''> Show Me All</option>
            <option value='cat'>Cats Only</option>
            <option value='dog'>Dogs Only</option>
            <option value='small_animals'>Small Animals Only</option>
          </Select>
        </TypeWrapper>
        <GenderWrapper>
          <label htmlFor='gender'>Gender </label>
          <Select
            name='gender'
            id='gender'
            value={selectedValues.gender}
            onChange={handleSelect}>
            <option value=''> Show Me All</option>
            <option value='female'>Females Only</option>
            <option value='male'>Males Only</option>
          </Select>
        </GenderWrapper>
        <ButtonWrapper>
          <Button onClick={handleSearchSubmit}>
            SEARCH!
            <img src={ArrowIcon} alt='submit icon' />
          </Button>
        </ButtonWrapper>
      </SearchForm>
    </SearchFormWrapper>
  );
}

const SearchFormWrapper = styled.section`
  display: grid;
  place-items: center;
`;

const LogoWrapper = styled.div`
  background: var(--gray);
  border-bottom-left-radius: 20%;
  border-bottom-right-radius: 20%;
  filter: drop-shadow(0 0 0.8rem var(--black));
  padding: 1.3rem;
  width: 10rem;
`;

const LogoImage = styled.img`
  width: 10rem;
`;

const SearchForm = styled.form`
  color: var(--gray);
  letter-spacing: 0.1rem;
  padding: 2rem;

  p {
    border-radius: 1rem;
    font-weight: bolder;
    margin-bottom: 1rem;
    text-align: center;
  }

  span {
    color: var(--primary-lightest);
  }
`;

const TypeWrapper = styled.section`
  display: grid;
  place-items: center;

  margin-top: 1.5rem;

  label {
    color: var(--primary-light);
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

const GenderWrapper = styled(TypeWrapper)`
  margin-top: 2rem;
`;

const Select = styled.select`
  display: flex;

  background-color: var(--blue-dark);
  border: 1px inset var(--black);
  border-radius: 0.5rem;
  color: var(--white);
  font-size: 1rem;
  height: 2.5rem;
  text-align-last: center;
  width: 50vw;

  &:focus {
    outline-color: var(--white);
  }
`;

const ButtonWrapper = styled.div`
  display: grid;
  place-items: center;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-around;

  background-color: var(--gray);
  border-radius: 100vw;
  cursor: pointer;
  font-family: var(--ff-cursive);
  font-size: 1.3rem;
  margin-top: 3rem;
  padding: 0.5rem;
  width: 9rem;

  img {
    width: 1rem;
  }
`;
