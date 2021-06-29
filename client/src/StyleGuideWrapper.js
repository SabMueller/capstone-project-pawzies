import GlobalStyles from './GlobalStyle';

function StyleGuideWrapper({ children }) {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  );
}

export default StyleGuideWrapper;
