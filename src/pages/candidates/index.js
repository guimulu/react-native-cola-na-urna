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
import styles from './styles';

export default class Candidates extends Component {
  static navigationOptions = {
    title: 'Porcure seus Candidatos',
    tabBarIcon: ({ tintColor }) => <Icon name="ios-people" size={20} color={tintColor} />,
  };

  state = {
    data: [],
    loading: true,
    refreshing: false,
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
              { key: 'Devin' },
              { key: 'Jackson' },
              { key: 'James' },
              { key: 'Joel' },
              { key: 'John' },
              { key: 'Jillian' },
              { key: 'Jimmy' },
              { key: 'Julie' },
            ]}
            renderItem={({item}) => <Text>{item.key}</Text>}
        />
      </View>
    );
  }
}
