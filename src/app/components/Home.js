import React from 'react'
import PropTypes from 'prop-types'

export class Home extends React.Component {
  constructor (props) {
    super()
    this.state = {
      age: props.initialAge,
      status: 0
    }
  }

  onMakeMeOlder () {
    this.setState({
      age: this.state.age + 3
    })
  }

  render () {
    return (
      <div>
        <p>In a new Component!</p>

        <p>Name: {this.props.name}</p>
        <p>Age: {this.state.age}</p>
        <p>Status: {this.state.status}</p>

        <p>User Object Name: {this.props.otherPerson.name}</p>
        <h4>Hobbies:</h4>
        <ul>
          {this.props.otherPerson.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
        </ul>
        <hr />
        {this.props.children}
        <hr />
        <button onClick={() => this.onMakeMeOlder()} className='btn btn-primary'>Make me Older!</button>
      </div>
    )
  }
}

Home.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  otherPerson: PropTypes.object,
  children: PropTypes.element.isRequired
}
