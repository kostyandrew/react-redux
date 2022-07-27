import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import {countToTen} from "./features/counter";

function App() {
    const counter = useSelector(state => state.counter.value);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(countToTen());
    }, [])

    return (
        <div>{counter}</div>
    );
}

export default App;
