import './index.css'
import ReactContext from '../../context/ReactContext'

const ChoiceView = props => (
  <ReactContext.Consumer>
    {value => {
      const {isClick} = value
      const {dt} = props
      const onPress = () => {
        isClick(dt.id)
      }
      return (
        <li>
          <button
            type="button"
            className="btn-choice"
            data-testid={`${dt.id.toLowerCase()}Button`}
            onClick={onPress}
          >
            <img src={dt.imageUrl} className="img-ch" alt={dt.id} />
          </button>
        </li>
      )
    }}
  </ReactContext.Consumer>
)

export default ChoiceView
