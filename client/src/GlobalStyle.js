import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`


:root {
/*   --primary: hsl(311, 57%, 37%); 	
  --primary-light: #eee4e1;
  --primary-lightest:  ;
  --primary-dark: hsl(311, 57%, 28%) ;
  --primary-darkest:  hsl(311, 57%, 18%);
  --secondary: hsl(241, 39%, 26%);
  --secondary-light: #E7D8C9;
  --secondary-lightest:  ;
  --secondary-dark:  ;
  --secondary-darkest:  ;
  --white: #ecf8f8;
  --black: #211103; */

  
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
  line-height: 1.5;
  font-family: var(--ff-sans);
  font-size: 1.25rem; /* var(--fs-400) */
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
