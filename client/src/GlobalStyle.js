import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`


:root {
  --primary: hsl(187, 66%, 44%);
  --primary-light: 	hsl(187, 66%, 60%);
  --primary-lightest: 	hsl(187, 66%, 76%) ;
  --primary-dark: 	hsl(187, 66%, 24%);
  --primary-darkest: 	hsl(187, 66%, 8%) ;
  --secondary: hsl(329, 54%, 47%);
  --secondary-light:	hsl(329, 54%, 68%) ;
  --secondary-lightest: 	hsl(329, 55%, 80%) ;
  --secondary-dark:  hsl(329, 54%, 32%);
  --secondary-darkest:  hsl(329, 55%, 20%);
  --white: hsl(0, 0%, 99%);
  --black: 	hsl(187, 6%, 15%); 
  --blue-dark: 	hsl(225, 41%, 25%);
  --error: hsl(0, 74%, 18%);
  --gray-dark: 	hsl(224, 16%, 28%);
  --gray: hsl(224, 16%, 87%);
  --gray-light:hsl(225, 24%, 93%);


  --ff-sans: 'Dosis', sans-serif;
  --ff-sans-alternative: 'Roboto', sans-serif;
  --ff-cursive: 'Righteous', cursive;
  
}

*,
*::before,
*::after {
  box-sizing: border-box;
}


h1, h2, h3 {
  line-height: 1.2;
  font-family: var(--ff-cursive)
}

body, h1, h2, h3, p {
  margin: 0;
}

body {
  background: linear-gradient(
    180deg,
    rgba(49, 211, 211, 1) 0%,
    rgba(31, 153, 182, 1) 32%,
    rgba(8, 55, 118, 1) 100%
  );
  font-family: var(--ff-sans);
  font-size: 1.25rem; 
  line-height: 1.5;
}

ul[class],
ol[class] {
  list-style: none;
  padding: 0;
  margin: 0;
}

ul[class] li,
ol[class] li {
  list-style: none;
  padding: 0;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

 `;
