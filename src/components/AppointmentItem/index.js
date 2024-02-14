// Write your code here
import './index.css'

const AppointmentItem = props => {
  const {arrayList} = props
  const {tittle, date} = arrayList

  return (
    <li>
      <div className="items">
        <div className="space">
          <h1>{tittle}</h1>
          <img
            alt=""
            src="https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png"
          />
        </div>
        <p>{`Date:${date}`}</p>
      </div>
    </li>
  )
}

export default AppointmentItem
