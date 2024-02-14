import {Component} from 'react'
import {format} from 'date-fns'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'

import './index.css'

class Appointments extends Component {
  state = {
    tittle: '',
    date: '',
    arrayList: [],
  }

  inputValue = event => {
    this.setState({tittle: event.target.value})
  }

  dateValue = event => {
    this.state({
      date: event.target.value,
    })
  }

  addBtn = event => {
    event.preventDefault()
    const {tittle, date} = this.state
    const newDate = date ? format(new Date(date), 'dd MMMM yyyy, EEEE') : ''
    const newValues = {
      id: uuidv4,
      tittle,
      date: newDate,
    }

    this.setState(preVstate => ({
      arrayList: [...preVstate.arrayList, newValues],
      tittle,
      date,
    }))
  }

  render() {
    const {tittle, date, arrayList} = this.state
    return (
      <div className="bg">
        <div className="card">
          <div className="cols">
            <div className="col">
              <h1>Add Appointment</h1>
              <p>Tittle</p>
              <form onSubmit={this.addBtn}>
                <input
                  type="text"
                  placeholder="Tittle"
                  onChange={this.inputValue}
                  value={tittle}
                />
                <label htmlFor="date" className="label">
                  DATE
                </label>
                <input
                  type="date"
                  id="date"
                  value={date}
                  onChange={this.onChangeDateInput}
                />
                <button type="submit" className="btn">
                  Add
                </button>
              </form>
            </div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
              alt="appointments"
            />
          </div>
          <hr className="li" />
          <div className="colss">
            <h1>Appointments</h1>
            <button type="button" className="btn-1">
              starred
            </button>
          </div>
          <ul>
            {arrayList.map(each => (
              <AppointmentItem key={each.id} arrayList={each} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
