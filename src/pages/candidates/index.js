import React, { Component } from 'react';
import api from 'services/api';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  View,
  Text,
  AsyncStorage,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import styles from './styles';

export default class Candidates extends Component {
  static navigationOptions = {
    title: 'Candidates',
    tabBarIcon: ({ tintColor }) => <Icon name="account-search" size={20} color={tintColor} />,
  };

  state = {
    data: [],
    loading: true,
    refreshing: false,
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Candidates</Text>
      </View>
    );
  }
}
