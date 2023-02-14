
import { useSelector, useDispatch } from 'react-redux'
import {doIncrement, doDecrement} from "./store/actions/CounterActions"
function App() {
  const count = useSelector((store) =>store.CounterReducer.count)
  const dispatch = useDispatch()
  console.log(count);
  const decrementHandler = () => {
    dispatch(doDecrement(5))
}

const incrementHandler = () => {
    dispatch(doIncrement(5))
}
  return (
    <div className="App" style={{ padding: 20 }}>
        <h1>Counter App</h1>
        <button onClick={decrementHandler}>-</button>
        <span style={{ padding: 10 }}>{count}</span>
        <button onClick={incrementHandler}>+</button>
    </div>
  );
}

export default App;
