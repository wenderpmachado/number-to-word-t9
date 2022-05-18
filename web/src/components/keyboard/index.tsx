import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

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

  function decrementSequence(event: any) {

  }

  function addWord(event: any) {

  }

  function sendMessage() {

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

  const renderExtraKeys = (
    <>
      <Key value="" onClick={(e) => decrementSequence(e)}>
        <KeyNumber>
          <FontAwesomeIcon icon={faDeleteLeft} />
        </KeyNumber>
      </Key>
      <Key value="0" onClick={(e) => addWord(e)}>
        <KeyNumber>{ 0 }</KeyNumber>
        <KeyLetter className="turn-down-left">
          ]
        </KeyLetter>
      </Key>
      <Key value="" onClick={sendMessage}>
        <KeyNumber>
          <FontAwesomeIcon icon={faPaperPlane} />
        </KeyNumber>
      </Key>
    </>
  );

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
