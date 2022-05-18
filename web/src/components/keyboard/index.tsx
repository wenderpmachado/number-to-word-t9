import React, { useState } from 'react';
import { Container, Messages, Textbox, Hints, Keys } from './styles';
import { KEYS } from './constants';

const Keyboard: React.FC = () => {
  const [messages, setMessages] = useState([] as string[]);
  const [text, setText] = useState([] as string[]);
  const [sequence, setSequence] = useState('');
  const [hints, setHints] = useState([] as string[]);

  function renderMessages(messages: string[]) {
    return <></>
  }

  function renderHints(hints: string[]) {
    return <></>
  }

  function renderKeys() {
    return <></>
  }

  function renderExtraKeys() {
    return <></>
  }

  return (
    <Container>
      <Messages>
        {renderMessages(messages)}
      </Messages>
      <Textbox readOnly={true} />
      <Hints>
        {renderHints(hints)}
      </Hints>
      <Keys>
        <>
          {renderKeys}
          {renderExtraKeys}
        </>
      </Keys>
    </Container>
  );
};

export default Keyboard;
