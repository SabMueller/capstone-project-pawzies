import styled from 'styled-components/macro';
import Navigation from '../components/Navigation';

export default function Main() {
  return (
    <div style={{ backgroundColor: 'var(--black)', height: '100vh' }}>
      <h1>Main</h1>
      <Navigation />
    </div>
  );
}

//        <a.div className='bg' onClick={() => close()} style={bgStyle}></a.div>
/* const close = (velocity = 0) => {
    set({ y: height, immediate: false, config: { ...config.stiff, velocity } });
  }; */
/*   const bgStyle = {
    transform: y.to(
      [0, height],
      ['translateY(-8%) scale(1.16)', 'translateY(0px) scale(1.05)']
    ),
    opacity: y.to([0, height], [0.4, 1], 'clamp'),
  }; */
