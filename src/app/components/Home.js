import React from 'react'

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
      </div>
    )
  }
}
