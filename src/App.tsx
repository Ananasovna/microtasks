import React, {useState} from 'react';
import './App.css';
import {FullInput} from './components/input/FullInput';

export type MessageType = {
    message: string;
}

export type MessagesType = MessageType[];

function App() {
    let [messages, setMessages] = useState<MessagesType>([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
        {message: 'message4'},
    ])


    // let mappedMessages = (messages: MessagesType) => {
    //     return
    //     })
    // }

    const addMessage = (newMessage: MessageType) => {
        setMessages(prev=> [newMessage, ...prev]);
      }

    return (
        <div className="App">
            <FullInput addMessage={addMessage}/>
            {messages.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )})
            }
        </div>
    );
}

export default App;
