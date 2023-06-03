import React, {useState} from 'react';
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

    // const changeInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    //     setValue(event.currentTarget.value);
    // }

    const addMessage = (newMessage: MessageType) => {
        setMessages(prev=> [newMessage, ...prev]);
      }

    const callbackButtonHandler = () => {
        addMessage({message: value});
        setValue('');
    }

    return (
        <div className="App">
            {/*<FullInput addMessage={addMessage}/>*/}
            <Input value={value} setValue={setValue}/>
            <InputButton title={'send'} callBack={callbackButtonHandler}/>
            {messages.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )})
            }
        </div>
    );
}

export default App;
