import React, { useState } from 'react';
import { Container, Messages, Textbox, Hints, Keys, Key, KeyLetter, KeyNumber } from './styles';
import { KEYS } from './constants';

const Keyboard: React.FC = () => {
  const [messages, setMessages] = useState([] as string[]);
  const [text, setText] = useState([] as string[]);
  const [sequence, setSequence] = useState('');
  const [hints, setHints] = useState([] as string[]);

  function incrementSequence(event: any, number: string) {
    event.preventDefault();

    setSequence(sequence.concat(number));
  }

  // render helpers

  const renderMessages = (messages: string[]) => (<></>)

  const renderHints = (hints: string[]) => (<></>)

  const renderKeys = (
    <>
      { Object.keys(KEYS)
        .filter((key) => isNaN(Number(key)))
        .map((letter) => {
          const number = KEYS[letter as unknown as number];

          return (
            <Key key={number} onClick={(e) => incrementSequence(e, number)}>
              <KeyNumber>{ number }</KeyNumber>
              <KeyLetter>{ letter }</KeyLetter>
            </Key>
          );
        })}
    </>
  );

  const renderExtraKeys = (<></>);

  // end render helpers

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
        {renderKeys}
        {renderExtraKeys}
      </Keys>
    </Container>
  );
};

export default Keyboard;
