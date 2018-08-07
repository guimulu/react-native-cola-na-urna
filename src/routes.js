import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Welcome from 'pages/welcome';
import Cola from 'pages/cola';
import Candidates from 'pages/candidates';
import About from 'pages/about';
import AboutApp from 'components/AboutApp';

import { metrics, colors } from 'styles';

const createNavigator = (isSession = false) => StackNavigator({
  Welcome: {
    screen: Welcome,
  },
  User: {
    screen: TabNavigator({
      Cola: {
        screen: Cola,
      },
      Candidates: {
        screen: Candidates,
      },
    }, {
      tabBarPosition: 'bottom',
      tabBarOptions: {
        showIcon: true,
        showLabel: false,
        activeTintColor: colors.white,
        inactiveTintColor: colors.whiteTransparent,
        style: {
          backgroundColor: colors.regular,
        },
        indicatorStyle: {
          backgroundColor: colors.dark,
        },
      },
    }),
  },
  About: {
    screen: About,
    navigationOptions: () => ({
      headerRight: false,
    }),
  },
}, {
  initialRouteName: isSession ? 'User' : 'Welcome',
  navigationOptions: ({ navigation }) => ({
    headerStyle: {
      paddingHorizontal: metrics.basePadding,
    },
    headerRight: <AboutApp navigation={navigation} />,
  }),
});

export default createNavigator;
