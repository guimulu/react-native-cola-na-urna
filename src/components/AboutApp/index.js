import React, { Component } from 'react';
import createNavigator from 'routes';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';

import { TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default class AboutApp extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      dispatch: PropTypes.func,
    }).isRequired,
  };

  goToAbout = async () => {
    await this.props.navigation.navigate({ routeName: 'About' });
  }

  render() {
    return (
      <TouchableOpacity onPress={this.goToAbout}>
        <Icon name="info-circle" size={16} style={styles.icon} />
      </TouchableOpacity>
    );
  }
}
