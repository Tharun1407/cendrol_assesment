import './index.css'

const Counter = props => {
  const {Count, onIncrement, ButtonClicked} = props

  const onButton = () => {
    onIncrement()
  }
  return (
    <div className={ButtonClicked ? 'counter-true' : 'counter-container'}>
      <h1>{Count}</h1>
      <button onClick={onButton} className="counter" type="button">
        Click to increase Count
      </button>
    </div>
  )
}

export default Counter
