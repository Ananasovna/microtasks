import React, {ChangeEvent, Dispatch, SetStateAction, useState} from 'react';
import {MessagesType, MessageType} from '../../App';

type FullInputPropsType = {
    addMessage: (message: MessageType) => void;
}
export const FullInput = (props: FullInputPropsType) => {
    let [value, setValue] = useState<string>('');

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value);
    }

    const onClickButtonHandler = (value: string) => {
        props.addMessage({message: value});
        setValue('')
    }

    return (
        <div>
            <input value={value} onChange={onChangeInputHandler}/>
            <button onClick={() => onClickButtonHandler(value)}>+</button>
        </div>
    )
}