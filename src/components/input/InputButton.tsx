
type InputButtonPropsType = {
    sendMessage: () => void,
}
export const InputButton = (props: InputButtonPropsType) => {
    const onClickButtonHandler = () => {
        props.sendMessage();
    }

    return (
        <button onClick={onClickButtonHandler}>X</button>
    )
}