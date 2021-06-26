import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import Logo from '../assets/images/logo.svg';
import ArrowIcon from '../assets/images/arrowIcon.svg';

export default function Home() {
  return (
    <LandingPageWrapper>
      <LogoWrapper>
        <LogoImage src={Logo} alt='Logo of Pawzies' />
      </LogoWrapper>
      <TextWrapper>
        <Paragraph>
          Ready to adopt a <span> Friend For Life ?</span>
        </Paragraph>
        <StyledLink to='/search'>
          <PrimaryButton>
            GO!
            <img src={ArrowIcon} alt='Submit Icon' />
          </PrimaryButton>
        </StyledLink>
        <Paragraph isSecondary>For Organizations:</Paragraph>
        <StyledLink to='/add'>
          <Button>
            ADD PET
            <img src={ArrowIcon} alt='Submit Icon' />
          </Button>
        </StyledLink>
      </TextWrapper>
    </LandingPageWrapper>
  );
}

const LandingPageWrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(
    180deg,
    rgba(49, 211, 211, 1) 0%,
    rgba(31, 153, 182, 1) 32%,
    rgba(8, 55, 118, 1) 100%
  );
  height: 100vh;
  width: 100vw;
  margin: 0;
`;

const LogoWrapper = styled.div`
  display: grid;
  place-items: center;
  background: var(--gray);
  border-radius: 50%;
  margin-bottom: 2rem;
  margin-top: 4rem;
  padding: 1.7rem;
  width: 12rem;
`;

const LogoImage = styled.img`
  width: 10rem;
`;

const TextWrapper = styled.section`
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  gap: 1rem;
  color: var(--white);

  span {
    display: block;
    font-weight: bold;
  }
`;

const Paragraph = styled.p`
  text-align: center;
  font-size: ${(props) => (props.isSecondary ? '1.2rem' : '1.6rem')};
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
  padding: 0.5rem;
  width: 9rem;

  img {
    width: 1rem;
  }
`;

const PrimaryButton = styled(Button)`
  justify-content: space-evenly;
  font-size: 2rem;
  margin-bottom: 2.5rem;
  padding: 1rem;
  width: 10rem;

  img {
    width: 1.3rem;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
