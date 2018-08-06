import { StackNavigator, TabNavigator } from 'react-navigation';

import Welcome from 'pages/welcome';
import Cola from 'pages/cola';
import Candidates from 'pages/candidates';
import About from 'pages/about';

const createNavigator = (isSession) => StackNavigator({
  Welcome: {
    screen: Welcome,
  },
  About: {
    screen: About,
  },
  User: {
    screen: TabNavigator({
      Cola: {
        screen: Cola,
      },
      Candidates: {
        screen: Candidates,
      },
    }),
  },
}, {
  initialRouteName: isSession ? 'User' : 'Welcome',
});

export default createNavigator;
