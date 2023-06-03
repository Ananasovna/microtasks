
type InputButtonPropsType = {
    title: string;
    callBack: () => void,
}
export const InputButton = (props: InputButtonPropsType) => {
    const onClickButtonHandler = () => {
        props.callBack();
    }

    return (
        <button onClick={onClickButtonHandler}>{props.title}</button>
    )
}