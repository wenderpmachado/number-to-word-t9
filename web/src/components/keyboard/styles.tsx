import styled from 'styled-components';

const darkGrey = '#333333';
const darkGreyActive = '#3C3C3C';
const mediumGrey = '#b3b3b3';
const lightGrey = '#D8D8D8';

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

export const Messages = styled.section``;
export const Hints = styled.section``;

export const Textbox = styled.input``;
