import {ChangeEvent, Dispatch, SetStateAction} from "react";

type InputPropsType = {
    value: string,
    setValue: Dispatch<SetStateAction<string>>
}
export const Input = (props: InputPropsType) => {

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setValue(event.currentTarget.value);
    }
    return (
        <input value={props.value} onChange={onChangeInputHandler}/>
    )
}