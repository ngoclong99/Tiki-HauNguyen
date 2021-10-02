import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { decrease, increase } from "./counterSlice.js"

CounterFeature.propTypes = {}

function CounterFeature(props) {
  const count = useSelector((state) => state.count)
  const dispatch = useDispatch()

  const handleIncreaseClick = () => {
    dispatch(increase())
  }
  const handleDecreaseClick = () => {
    dispatch(decrease())
  }

  return (
    <div>
      <h3>Counter: {count}</h3>
      <button onClick={handleIncreaseClick}>Increment</button>
      <button onClick={handleDecreaseClick}>Decrement</button>
    </div>
  )
}

export default CounterFeature
