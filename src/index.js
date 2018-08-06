import './config/ReactotronConfig';
import React, { Component } from 'react';
import createNavigator from './routes';
import { AsyncStorage } from 'react-native';

export default class App extends Component {
  state = {
    sessionChecked: false,
    sessionLogged: false,
  }

  async componentDidMount() {
    const session = await AsyncStorage.getItem('@ColaNaUrna:session');
    console.log(session);
    this.appLoaded(session);
  }

  appLoaded = (session) => {
    this.setState({
      sessionChecked: true,
      sessionLogged: session,
    });
  }

  render() {
    if (!this.state.sessionChecked) return null;

    const Routes = createNavigator(this.state.sessionLogged);
    return <Routes />;
  }
}
