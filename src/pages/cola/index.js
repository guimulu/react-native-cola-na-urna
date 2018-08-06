import React, { Component } from 'react';
import api from 'services/api';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  View,
  Text,
  AsyncStorage,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import BoxCandidate from 'components/BoxCandidate';
import styles from './styles';

export default class Cola extends Component {
  static navigationOptions = {
    title: 'Cola',
    tabBarIcon: ({ tintColor }) => <Icon name="clipboard-list" size={20} color={tintColor} />,
  };

  state = {
    data: [],
    loading: true,
    refreshing: false,
  }

  render() {
    return (
      <View style={styles.container}>
        <BoxCandidate />
        <BoxCandidate />
        <BoxCandidate />
        <BoxCandidate />
        <BoxCandidate />
        <BoxCandidate />
      </View>
    );
  }
}
