import React, { Component } from 'react';
import api from 'services/api';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  View,
  Text,
  AsyncStorage,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import DeputadoEstadual from 'components/DeputadoEstadual';
import DeputadoFederal from 'components/DeputadoFederal';
import SenadorUm from 'components/SenadorUm';
import SenadorDois from 'components/SenadorDois';
import Governador from 'components/Governador';
import Presidente from 'components/Presidente';
import styles from './styles';

export default class Cola extends Component {
  static navigationOptions = {
    title: 'Cola',
    tabBarIcon: ({ tintColor }) => <Icon name="ios-clipboard" size={20} color={tintColor} />,
  };

  state = {
    data: [],
    loading: true,
    refreshing: false,
  }

  render() {
    return (
      <View style={styles.container}>
        <DeputadoEstadual />
        <DeputadoFederal />
        <SenadorUm />
        <SenadorDois />
        <Governador />
        <Presidente />
      </View>
    );
  }
}
