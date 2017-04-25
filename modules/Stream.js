import React, {Component} from 'react'

export default class Stream extends Component{
  login () {
    console.log('logging in')
  }

  render () {
    return (
      <div>
        <a href="https://api.twitch.tv/kraken/oauth2/authorize?response_type=code&client_id=mafllvn2ycrixc59ygrh12orgg03p4&redirect_uri=http://localhost:8080/authCallback&scope=viewing_activity_read
      &state=950g9loz5s9jsvnm861g4aizw74h6y">
          Click here to see the live stream
        </a>
        <div>{this.props.params.code}</div>
      </div>
    )
  }
}
