import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

class HomePage extends Component {
  render() {
    return (
      <UserConsumer>
        {(props) => {
          return <div>
              {console.log(props)}
              <h1>{props.stores.name}</h1>
              </div>
        }}
      </UserConsumer>
    )
  }
}
export default HomePage;