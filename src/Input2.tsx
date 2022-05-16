import React, { useState } from 'react';
import { v1 } from 'uuid';
import { Rating } from './Raiting';
import { Rating2, Rating2ValueType } from './Raiting2';

type messageType = {
  id: string
  message: string
  isCheck: boolean
  rating: Rating2ValueType
}

export const Input2 = () => {

  const [text, setText] = useState<string>('');
  const [messages, setMessages] = useState<messageType[]>([]);
  const [filter, setFilter] = useState<'ALL' | 'CHECKED' | 'UNCHECKED'>('ALL');
  const [rating, setRating] = useState<Rating2ValueType>(0)

  const addMessageHandle = () => {
    if (text.trim() !== '') {
      setMessages([{ id: v1(), message: text, isCheck: false, rating: 0 }, ...filteredMessages]);
    }
    setText('');
  };

  const deleteMessageHandler = (id: string) => setMessages(filteredMessages.filter(message => message.id !== id));

  const checkChangeHandler = (id: string) => {
    let finedMessage = filteredMessages.find(message => message.id === id);
    if (finedMessage) {
      finedMessage.isCheck = !finedMessage.isCheck;
    }
    setMessages([...filteredMessages]);
  }

  const ChangeRatingHandler = (id: string) => {
    let finedMessage = filteredMessages.find(messages => messages.id === id);
    if (finedMessage) {
      setRating(4)
      finedMessage.rating = rating
      console.log(rating);
    }
    setMessages([...filteredMessages])
  }

  let filteredMessages = messages;
  if (filter === 'CHECKED') {
    filteredMessages = messages.filter(message => message.isCheck);
  }
  if (filter === 'UNCHECKED') {
    filteredMessages = messages.filter(message => !message.isCheck);
  }

  const filterMessagesHandler = (filter: 'ALL' | 'CHECKED' | 'UNCHECKED') => setFilter(filter);

  return (
    <div>
      <input
        value={text}
        onChange={(event => setText(event.currentTarget.value))}
        onKeyPress={(event) => {
          if (event.key === 'Enter') {
            addMessageHandle();
          }
        }}
      />
      <button
        onClick={addMessageHandle}
      >+
      </button>
      <div>
        {filteredMessages.map((message, key) =>
          <li key={key}>
            <input
              type="checkbox"
              checked={message.isCheck}
              onChange={() => checkChangeHandler(message.id)}
            />
            {`${key + 1} ${message.message} ${message.rating}`}
            <Rating2 value={message.rating} onClick={() => ChangeRatingHandler(message.id)}/>
            {/*<Rating*/}
            {/*  valueRating={message.rating}*/}
            {/*/>*/}
            <button onClick={() => deleteMessageHandler(message.id)}
            >X
            </button>
          </li>)}
      </div>
      <div>
        <button onClick={() => filterMessagesHandler('ALL')}>ALL</button>
        <button onClick={() => filterMessagesHandler('CHECKED')}>CHECKED</button>
        <button onClick={() => filterMessagesHandler('UNCHECKED')}>UNCHECKED</button>
      </div>
    </div>
  )
}
