import styled from 'styled-components/macro';

export default function PawziesContactCard({
  selectedAnimalToContact,
  selectedOrganizationToContact,
}) {
  return (
    <TextWrapper>
      <h3>
        Are you interested in adopting{' '}
        {selectedAnimalToContact.name.toUpperCase()}?
      </h3>
      <p>
        At <span> PAWZIES</span> we want you to find and adopt your{' '}
        <span>Friend For Life</span>. In order to achieve this, it is crucial to
        ensure that you and your chosen animal are 100% compatible. Below, we
        provied all the available contact information of{' '}
        <span>{selectedOrganizationToContact.name}</span> so you can easily get
        in touch with them to discuss availability and prerequisites or schedule
        a meeting to get to know <span>{selectedAnimalToContact.name}</span>{' '}
        better!
      </p>
    </TextWrapper>
  );
}

const TextWrapper = styled.section`
  display: grid;
  place-items: center;

  background-color: var(--secondary-dark);
  border-radius: 2rem;
  color: var(--gray);
  filter: drop-shadow(0 0 0.2rem var(--black));
  padding: 1rem;
  width: 90vw;

  h3 {
    margin-bottom: 1rem;
  }

  p {
    letter-spacing: 0.05rem;

    span {
      font-weight: bold;
      color: var(--white);
    }
  }
`;
