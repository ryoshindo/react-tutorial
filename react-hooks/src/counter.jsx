import React, { useCallback, useState } from "react";

const Title = React.memo(() => {
    console.log("Title Component")

    return (
        <h2>useCallBack Test vol.1</h2>
    )
})

const Button = React.memo(({ handleClick, value }) => {
    console.log("Button child component", value)

    return <button type="button" onClick={handleClick}>{value}</button>
})

const Count = React.memo(({ text, countState }) => {
    console.log("Count child component", text)

    return <p>{text}:{countState}</p>
})

const Counter = () => {
    const [firstCountState, setFirstCountState] = useState(0)
    const [secondCountState, setSecondCountState] = useState(10)

    const incrementFirstCounter = useCallback(() => setFirstCountState(firstCountState + 1), [firstCountState])
    const incrementSecondCounter = useCallback(() => setSecondCountState(secondCountState + 10), [secondCountState])

    return (
        <>
            <Title />
            <Count text="+1 ボタン" countState={firstCountState} />
            <Count text="+10 ボタン" countState={secondCountState} />
            <Button handleClick={incrementFirstCounter} value={"+1 ボタン"} />
            <Button handleClick={incrementSecondCounter} value={"+10 ボタン"} />
        </>
    )
}

export default Counter
