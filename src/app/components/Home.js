import React from 'react'
import PropTypes from 'prop-types'

export class Home extends React.Component {
  constructor (props) {
    super()
    this.state = {
      age: props.initialAge,
      status: 0,
      homeLink: props.initialHomeLink
    }
  }

  onMakeMeOlder () {
    this.setState({
      age: this.state.age + 3
    })
  }

  onChangeLink () {
    this.props.changeLink(this.state.homeLink)
  }

  onInputChage (event) {
    this.setState({
      homeLink: event.target.value
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
        <hr />
        <button onClick={this.props.greet} className='btn btn-primary'>Say Hello!</button>
        <hr />
        <input
          type='text'
          value={this.state.homeLink}
          onChange={(event) => this.onInputChage(event)} />
        <button onClick={() => this.onChangeLink()} className='btn btn-primary'>Change homelink</button>
      </div>
    )
  }
}

Home.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  otherPerson: PropTypes.object,
  children: PropTypes.element.isRequired,
  greet: PropTypes.func
}
