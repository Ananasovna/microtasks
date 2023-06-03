import {ChangeEvent} from "react";

type InputPropsType = {
    value: string,
    changeInputValue: (event: ChangeEvent<HTMLInputElement>) => void,
}
export const Input = (props: InputPropsType) => {

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.changeInputValue(event)
    }
    return (
        <input value={props.value} onChange={onChangeInputHandler}/>
    )
}