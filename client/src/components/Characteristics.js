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
    <TraitWrapper>
      <label htmlFor='characteristics'>Characteristics</label>
      <P isDescription>
        Put in some character traits of the animal and press{' '}
        <span style={{ fontWeight: 'bold' }}>Enter</span> to add them.
      </P>
      <Traits>
        <TraitCloud>
          {traits.map((trait, index) => (
            <span
              style={{ color: 'var(--white)', fontSize: '1.2rem' }}
              key={index + trait}>
              {trait}
              <Button type='button' onClick={() => onRemoveTrait(trait)}>
                X
              </Button>
            </span>
          ))}
          <Input
            type='text'
            name='characteristics'
            placeholder='Enter some characteristic features'
            value={trait}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        </TraitCloud>
      </Traits>
    </TraitWrapper>
  );
}

const TraitWrapper = styled.section`
  display: flex;
  align-items: center;
  flex-flow: column nowrap;

  span {
    color: var(--white);
    font-weight: bold;
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

const Traits = styled.section`
  display: grid;
  font-family: sans-serif;
  gap: 0.2rem;
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
  width: 70vw;

  &:focus {
    outline-color: var(--white);
  }

  &::placeholder {
    color: darkgray;
  }
`;

const TraitCloud = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  span {
    background: var(--blue-dark);
    padding: 0.3rem;
    border-radius: 0.3rem;
    margin: 0.2rem;
    height: 2rem;
    display: flex;
    justify-self: flex-start;
    align-items: center;
  }
`;

const Button = styled.button`
  background: none;
  border: none;
  color: var(--secondary);
  font-size: 1.2rem;
  margin: auto;
`;
