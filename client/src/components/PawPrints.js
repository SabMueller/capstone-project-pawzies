import styled, { keyframes } from 'styled-components/macro';

export default function PawPrints() {
  return (
    <PawsWrapper>
      <div className='paw-print-1'>
        <div className='pad large'></div>
        <div className='pad small-1'></div>
        <div className='pad small-2'></div>
        <div className='pad small-3'></div>
        <div className='pad small-4'></div>
      </div>

      <div className='paw-print-2'>
        <div className='pad large'></div>
        <div className='pad small-1'></div>
        <div className='pad small-2'></div>
        <div className='pad small-3'></div>
        <div className='pad small-4'></div>
      </div>

      <div className='paw-print-3'>
        <div className='pad large'></div>
        <div className='pad small-1'></div>
        <div className='pad small-2'></div>
        <div className='pad small-3'></div>
        <div className='pad small-4'></div>
      </div>

      <div className='paw-print-4'>
        <div className='pad large'></div>
        <div className='pad small-1'></div>
        <div className='pad small-2'></div>
        <div className='pad small-3'></div>
        <div className='pad small-4'></div>
      </div>

      <div className='paw-print-5'>
        <div className='pad large'></div>
        <div className='pad small-1'></div>
        <div className='pad small-2'></div>
        <div className='pad small-3'></div>
        <div className='pad small-4'></div>
      </div>

      <div className='paw-print-6'>
        <div className='pad large'></div>
        <div className='pad small-1'></div>
        <div className='pad small-2'></div>
        <div className='pad small-3'></div>
        <div className='pad small-4'></div>
      </div>

      <div className='paw-print-7'>
        <div className='pad large'></div>
        <div className='pad small-1'></div>
        <div className='pad small-2'></div>
        <div className='pad small-3'></div>
        <div className='pad small-4'></div>
      </div>

      <div className='paw-print-8'>
        <div className='pad large'></div>
        <div className='pad small-1'></div>
        <div className='pad small-2'></div>
        <div className='pad small-3'></div>
        <div className='pad small-4'></div>
      </div>
    </PawsWrapper>
  );
}

const walk = keyframes`  
  25%  {opacity: 1;}
  100% {opacity: 0;}
  `;

const PawsWrapper = styled.section`
  z-index: 0;

  .pad {
    width: 1.2rem;
    height: 1.2rem;
    background-color: var(--blue-dark);
    border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
    position: absolute;
  }
  .large {
    width: 3rem;
    height: 3rem;
  }
  .small-1 {
    left: -1.4rem;
  }
  .small-2 {
    top: -1.5rem;
  }
  .small-3 {
    position: absolute;
    left: 1.9rem;
    top: -1.5rem;
  }
  .small-4 {
    position: absolute;
    left: 3.2rem;
  }

  .paw-print-1 {
    opacity: 0;
    position: absolute;
    left: 2rem;
    bottom: 2rem;
    transform: rotate(-40deg);
    animation: /*keyframe*/ ${walk} /*duration*/ 8s /*transition*/ linear
      /*repeat*/ infinite;
  }
  .paw-print-2 {
    opacity: 0;
    position: absolute;
    left: 5rem;
    bottom: 10rem;
    transform: rotate(15deg);
    animation: ${walk} 8s linear infinite /*delay*/ 1s;
  }
  .paw-print-3 {
    opacity: 0;
    position: absolute;
    left: 3rem;
    bottom: 16rem;
    transform: rotate(-25deg);
    animation: ${walk} 8s linear infinite 2s;
  }
  .paw-print-4 {
    opacity: 0;
    position: absolute;
    left: 2rem;
    bottom: 24rem;
    transform: rotate(20deg);
    animation: ${walk} 8s linear infinite 3s;
  }
  .paw-print-5 {
    opacity: 0;
    position: absolute;
    left: 4rem;
    bottom: 30rem;
    transform: rotate(-5deg);
    animation: ${walk} 8s linear infinite 4s;
  }
  .paw-print-6 {
    opacity: 0;
    position: absolute;
    left: 2rem;
    bottom: 36rem;
    transform: rotate(10deg);
    animation: ${walk} 8s linear infinite 5s;
  }
  .paw-print-7 {
    opacity: 0;
    position: absolute;
    left: 8rem;
    bottom: 40rem;
    transform: rotate(35deg);
    animation: ${walk} 8s linear infinite 6s;
  }
  .paw-print-8 {
    opacity: 0;
    position: absolute;
    left: 14rem;
    bottom: 42rem;
    transform: rotate(20deg);
    animation: ${walk} 8s linear infinite 7s;
  }
`;
/* walking effect animation keyframes */
