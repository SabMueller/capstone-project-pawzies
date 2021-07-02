import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components/macro';
import PawPrints from '../components/PawPrints';
import Logo from '../assets/images/logo.svg';
import ArrowIcon from '../assets/images/arrowIcon.svg';

export default function Home() {
  const [isClicked, setIsClicked] = useState(false);

  console.log(isClicked);

  return (
    <LandingPageWrapper>
      <LogoWrapper>
        <LogoImage
          src={Logo}
          alt='Logo of Pawzies'
          onClick={() => {
            setIsClicked(true);
            setTimeout(() => setIsClicked(false), 2000);
          }}
          isClicked={isClicked}
        />
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
      <PawPrints />
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
  z-index: 100;
`;

const wiggle = keyframes`
  0% {transform: rotate(-10deg);}
  25% {transform: rotate(10deg);}
  50% {transform: rotate(-10deg);}
 75% {transform: rotate(10deg);} 
  100% {transform: rotate(0deg);}
`;

const LogoImage = styled.img`
  width: 10rem;
  animation: ${wiggle} 3.7s;
  z-index: 100;
`;

const TextWrapper = styled.section`
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  gap: 1rem;
  color: var(--white);
  z-index: 100;

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
  z-index: 100;

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
  z-index: 100;

  img {
    width: 1.3rem;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
