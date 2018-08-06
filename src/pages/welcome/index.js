import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  AsyncStorage,
} from 'react-native';
import styles from './styles';

export default class Welcome extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      dispatch: PropTypes.func,
    }).isRequired,
  };

  saveSession = async () => {
    await AsyncStorage.setItem('@ColaNaUrna:session', 'started');
  }

  signIn = async () => {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'User' }),
      ],
    });
    this.saveSession();
    this.props.navigation.dispatch(resetAction);
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />

        <Text style={styles.title}>
          Bem-vindo
        </Text>

        <Text style={styles.text}>
          Obrigado por fazer o download do nosso aplicativo.
        </Text>

        <Text style={styles.text}>
          Ele foi desenvolvido com o objetivo de você buscar seus candidatos e armazenar
          eles em uma "colinha" para não equecer na hora que você estiver na urna.
        </Text>

        <Text style={styles.text}>
          Fique Tranquilo, todas as informações são anônimas, só você vai conseguir acessa-las.
        </Text>

        <Text style={styles.text}>
          Está pronto?
        </Text>

        <View style={styles.form}>
          <TouchableOpacity style={styles.button} onPress={this.signIn}>
            <Text style={styles.buttonText}>
              Vamos lá!
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
