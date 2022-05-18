import React, { useState, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { isEmpty } from 'lodash';

import { Container, Messages, Textbox, Hints, Keys, Key, KeyLetter, KeyNumber, Hint, MessageContainer, MessageText } from './styles';
import { KEYS } from './constants';
import NumberToWordService from '../../services/number-to-word.service';
import { IMessage } from '../../interfaces/message.interface';
import { IHint } from '../../interfaces/hint.interface';

const Keyboard: React.FC = () => {
  const [messages, setMessages] = useState([] as IMessage[]);
  const [text, setText] = useState([] as string[]);
  const [sequence, setSequence] = useState('');
  const [hints, setHints] = useState([] as IHint[]);

  // hints

  useEffect(() => {
    updateHints(sequence);
  }, [sequence]);

  async function updateHints(sequence: string) {
    if (isEmpty(sequence)) return;

    const { data } = await NumberToWordService.convertToWord(sequence);

    setHints(data.data || []);
  }

  // end hints

  // helpers

  function resetKeyboard(includingText: boolean = false) {
    setHints([]);
    setSequence('');

    if (includingText) {
      setText([]);
    }
  }

  function fullText() {
    return text.join(' ');
  }

  // end helpers

  // actions

  function incrementSequence(event: any, number: string) {
    event.preventDefault();

    setSequence(sequence.concat(number));
  }

  function decrementSequence(event: any) {
    event.preventDefault();

    if (isEmpty(sequence)) {
      if (text.length === 1) {
        setText([]);
      } else {
        setText(text.slice(0, 1));
      }
    } else {
      setSequence(sequence.slice(0, -1));
    }
  }

  function addWord(event: any, word?: string) {
    event.preventDefault();

    if (isEmpty(word) && isEmpty(hints)) return;

    const newWord = word || hints[0].term;

    setText([...text, newWord]);
    resetKeyboard();
  }

  function sendMessage(event: any) {
    event.preventDefault();

    if (isEmpty(text)) return;

    setMessages([
      ...messages,
      {
        text: fullText(),
        createdAt: new Date()
      }
    ]);

    resetKeyboard(true);
  }

  // end actions

  // render helpers

  const renderMessages = (messages: IMessage[]) => (
    <MessageContainer>
      {messages.map(({ text, createdAt }) => (
        <MessageText key={createdAt.toString()}>{text}</MessageText>
      ))}
    </MessageContainer>
  )

  const renderHints = (hints: IHint[]) => hints.map((hint) => (
    <Hint key={hint._id} onClick={(e) => addWord(e, hint.term)}>
      { hint.term }
    </Hint>
  ));

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
      <Textbox onChange={() => {}} value={fullText()} readOnly={true} />
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
