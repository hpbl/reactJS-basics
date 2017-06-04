import React from 'react'
import {Link} from 'react-router'

export const Home = (props) => {
  return (
    <nav className='navbar navbar-default'>
      <div className='container'>
        <div className='navbar-header'>
          <ul className='nav navbar-nav'>
            <li>
              <Link to={'/home'} activeStyle={{color: 'cyan'}}>Home</Link>
            </li>
            <li>
              <Link to={'/user/8'} activeClassName={'active'}>User</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
