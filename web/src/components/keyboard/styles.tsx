import styled from 'styled-components';

const darkGrey = '#333333';
const darkGreyActive = '#3C3C3C';
const mediumGrey = '#b3b3b3';
const lightGrey = '#D8D8D8';

const defaultPaddingMargin = 8;
const defaultRadius = 15;

const keysPerLine = 3;
const lines = 4;
const marginWidth = '2px';

export const Container = styled.div`
  display : flex;
  flex-wrap: wrap;
  height : auto;
  min-height : 100%;
  height: 100vh;
  align-content: flex-end;
`;

// KEYS

export const Keys = styled.section`
  display: grid;
  width: 100%;
  height: 150px;
  grid-template-columns: ${Array(keysPerLine).fill('1fr').join(' ')};

  > button:nth-child(1n+${keysPerLine + 1}):not(:nth-child(1n+${keysPerLine * lines + 1})) {
    margin-top: ${marginWidth};
  }

  > button:nth-child(${keysPerLine}n+1) {
    margin-right: ${marginWidth};
  }

  > button:nth-child(${keysPerLine}n+${keysPerLine}) {
    margin-left: ${marginWidth};
  }
`;

export const Key = styled.button`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  border-color: transparent;
  border-radius: 0;

  border-width: 1px;
  color: ${lightGrey};
  background-color: ${darkGrey};

  &:active {
    background-color: ${darkGreyActive};
  }
`;

export const KeyNumber = styled.span`
  font-size: 1.3rem;
`;

export const KeyLetter = styled.span`
  font-size: .60rem;
  letter-spacing: 2px;
  color: ${mediumGrey};
`;

// END KEYS

export const Messages = styled.section`
  display: flex;
`;

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MessageText = styled.span`
  color: ${lightGrey};
  background-color: ${darkGrey};
  border: 1px solid ${darkGreyActive};
  border-radius: ${defaultRadius / 2}px;
  padding: ${defaultPaddingMargin}px;

  &:not(:last-child) {
    margin-bottom: ${defaultPaddingMargin}px;
  }
`;

// textbox

export const Textbox = styled.input`
  width: 100%;
  height: 2.5rem;
  border-radius: ${defaultRadius}px;
  border-width: 0;
  background-color: ${darkGrey};
  color: ${lightGrey};
  margin: ${defaultPaddingMargin}px;
  padding: ${defaultPaddingMargin}px;
`;

// end textbox

// hints

export const Hints = styled.section`
  display: flex;
  /* margin-bottom: ${defaultPaddingMargin}px; */
  padding-bottom: ${defaultPaddingMargin}px;
  max-width: 100vw;
  overflow-x: auto;

  & > button:first-child {
    border-color: ${lightGrey};
    color: black;
    font-weight: bolder;
    background-color: ${mediumGrey};
    border-width: 1px;
  }
`;

export const Hint = styled.button`
  opacity: 80%;
  border-width: 0;
  color: ${mediumGrey};
  margin-left: ${defaultPaddingMargin}px;
  padding: ${defaultPaddingMargin}px;
  border-radius: ${defaultRadius / 2}px;

  background-color: ${darkGrey};

  &:active {
    background-color: ${darkGreyActive};
  }
`;

// end hints
