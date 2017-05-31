import React from 'react'
import { render } from 'react-dom'

import { Header } from './components/Header'
import { Home } from './components/Home'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      homeLink: 'Home'
    }
  }

  sayHello () {
    window.alert('Hello!')
  }

  changeLink (newName) {
    this.setState({
      homeLink: newName
    })
  }

  render () {
    var otherPerson = {
      name: 'Daniel',
      hobbies: [
        'Play Dominos',
        'Code Java'
      ]
    }
    return (
      <div className='container'>

        <div className='row'>
          <div className='col-xs-10 col-xs-offset-1'>
            <Header homelink={this.state.homeLink} />
          </div>
        </div>

        <div className='row'>
          <div className='col-xs-10 col-xs-offset-1'>
            <Home name='Elton'
              initialAge={22}
              otherPerson={otherPerson}
              greet={this.sayHello}
              changeLink={(newName) => this.changeLink(newName)}
              initialHomeLink={this.state.homeLink}>
              <p>This is a paragraph</p>
            </Home>
          </div>
        </div>

      </div>
    )
  }
}

render(<App />, window.document.getElementById('app'))
