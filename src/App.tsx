import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Input} from "./components/input/Input";
import {InputButton} from "./components/input/InputButton";

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

    let [value, setValue] = useState<string>('');

    const changeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value);
        console.log(value)
    }

    const addMessage = (newMessage: MessageType) => {
        setMessages(prev=> [newMessage, ...prev]);
      }

    const sendMessage = () => {
        addMessage({message: value});
        setValue('');
        console.log('value = ' + value)
    }

    return (
        <div className="App">
            {/*<FullInput addMessage={addMessage}/>*/}
            <Input value={value} changeInputValue={changeInputValue}/>
            <InputButton sendMessage={sendMessage}/>
            {messages.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )})
            }
        </div>
    );
}

export default App;
