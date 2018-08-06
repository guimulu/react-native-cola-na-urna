import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  AsyncStorage,
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';

import styles from './styles';

export default class About extends Component {
  static navigationOptions = {
    title: 'Sobre',
  };

  static propTypes = {
    navigation: PropTypes.shape({
      dispatch: PropTypes.func,
    }).isRequired,
  }

  signOut = async () => {
    await AsyncStorage.removeItem('@ColaNaUrna:session');

    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Welcome' }),
      ],
    });
    this.props.navigation.dispatch(resetAction);
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />

        <Text style={styles.title}>
          Cola na Urna
        </Text>

        <Text style={styles.text}>
          Obrigado por fazer o download do nosso aplicativo.
        </Text>

        <View style={styles.form}>
          <TouchableOpacity style={styles.button} onPress={this.signOut}>
            <Text style={styles.buttonText}>
              Sair
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
