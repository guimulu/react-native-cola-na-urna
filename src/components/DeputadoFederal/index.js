import React, { Component } from 'react';
import { View, Text } from 'react-native';
import BoxNumber from 'components/BoxNumber';
import styles from './styles';

export default class DeputadoFederal extends Component {
  state = {
    number: '0',
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.officeText}>Deputado{'\n'}Federal</Text>
          <View style={styles.boxNumbers}>
            <BoxNumber />
            <BoxNumber />
            <BoxNumber />
            <BoxNumber />
          </View>
        </View>
        <View>
          <Text style={styles.nameText}>Lorem ipsum dolor sit amet</Text>
        </View>
      </View>
    );
  }
}
