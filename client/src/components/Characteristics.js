import { useState } from 'react';
import styled from 'styled-components/macro';

export default function Characteristics({
  traits,
  onUpdateTraits,
  onRemoveTrait,
}) {
  const [trait, setTrait] = useState('');

  function handleChange(event) {
    setTrait(event.target.value);
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      onUpdateTraits(trait);
      setTrait('');
    } else if (trait.length === 0 && event.key === 'Backspace') {
      onRemoveTrait(traits.pop());
    }
  }

  return (
    <>
      <Label htmlFor='characteristics'>Characteristics</Label>
      <Traits>
        <TraitCloud>
          {traits.map((trait, index) => (
            <span key={index + trait}>
              {trait}
              <Button type='button' onClick={() => onRemoveTrait(trait)}>
                X
              </Button>
            </span>
          ))}
          <input
            type='text'
            name='characteristics'
            placeholder='Enter some characteristic features'
            value={trait}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        </TraitCloud>
      </Traits>
    </>
  );
}

const Label = styled.label`
  display: block;
  font-weight: bold;
  font-family: sans-serif;
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const Traits = styled.section`
  display: grid;
  font-family: sans-serif;
  gap: 0.2rem;

  input {
    padding: 0.5rem;
    border: none;
    background: none;
    width: 10vw;
    color: var(--secondary);
  }

  input:focus {
    outline: none;
  }

  input::placeholder {
    color: var(--black);
  }
`;

const TraitCloud = styled.div`
  display: flex;
  flex-wrap: wrap;

  span {
    background: #9e38a2;
    color: ivory;
    padding: 0.3rem;
    border-radius: 0.3rem;
    margin: 0.2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Button = styled.button`
  background: none;
  border: none;
  color: black;
`;
