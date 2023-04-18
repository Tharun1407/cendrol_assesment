import {useState} from 'react'
import Counter from '../Counter'
import './index.css'

function Main() {
  const [Count, setCount] = useState(0)
  const [ButtonClicked, setButtonClicked] = useState(false)

  const onReset = () => {
    setCount(0)
  }

  const onIncrement = () => {
    setCount(Count + 10)
  }

  const onChangeColor = () => {
    setButtonClicked(!ButtonClicked)
  }

  return (
    <div className="home">
      <Counter
        Count={Count}
        onIncrement={onIncrement}
        ButtonClicked={ButtonClicked}
      />

      <button className="color" onClick={onChangeColor} type="button">
        Change Color
      </button>
      <button className="color" type="button" onClick={onReset}>
        Reset Count
      </button>
    </div>
  )
}

export default Main
