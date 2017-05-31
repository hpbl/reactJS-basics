import React from 'react'
import PropTypes from 'prop-types'

export class Home extends React.Component {
  render () {
    return (
      <div>
        <p>In a new Component!</p>

        <p>Name: {this.props.name}</p>
        <p>Age: {this.props.age}</p>

        <p>User Object Name: {this.props.otherPerson.name}</p>
        <h4>Hobbies:</h4>
        <ul>
          {this.props.otherPerson.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
        </ul>
        <hr />
        {this.props.children}
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
