import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';

import { TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default class About extends Component {
  goToAbout = async () => {
    NavigationActions.navigate({ routeName: 'About' });
  }

  render() {
    return (
      <TouchableOpacity onPress={this.goToAbout}>
        <Icon name="info-circle" size={16} style={styles.icon} />
      </TouchableOpacity>
    );
  }
}
