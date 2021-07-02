import GlobalStyles from './GlobalStyle';

function StyleGuideWrapper({ children }) {
  return (
    <>
      <GlobalStyles />
      <div
        style={{
          maxWidth: '375px',
          border: '2px solid hotpink',
        }}>
        {children}
      </div>
    </>
  );
}

export default StyleGuideWrapper;
