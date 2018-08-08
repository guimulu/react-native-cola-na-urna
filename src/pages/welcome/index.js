import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  AsyncStorage,
  Picker,
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

  state = {
    addressState: '',
  };

  saveSession = async () => {
    await AsyncStorage.setItem('@ColaNaUrna:session', 'started');
  }

  saveState = async () => {
    const { addressState } = this.state;
    await AsyncStorage.setItem('@ColaNaUrna:estado', addressState);
  }

  signIn = async () => {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'User' }),
      ],
    });
    this.saveSession();
    this.saveState();
    this.props.navigation.dispatch(resetAction);
  };

  render() {
    const { addressState } = this.state;
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
          eles em uma colinha para não equecer na hora que você estiver na urna.
        </Text>

        <Text style={styles.text}>
          Fique Tranquilo, todas as informações são anônimas, só você vai conseguir acessa-las.
        </Text>

        <Text style={styles.text}>
          Por Favor, antes de começar, poderia informar o estado onde vai votar,
          isso vai facilitar nas buscas dos candidatos :).
        </Text>

        <Picker
          selectedValue={addressState}
          onValueChange={item => this.setState({ addressState: item })}
        >
          <Picker.Item label="Acre" value="AC" />
          <Picker.Item label="Alagoas" value="AL" />
          <Picker.Item label="Amapá" value="AP" />
          <Picker.Item label="Amazonas" value="AM" />
          <Picker.Item label="Bahia" value="BA" />
          <Picker.Item label="Ceará" value="CE" />
          <Picker.Item label="Distrito Federal" value="DF" />
          <Picker.Item label="Espírito Santo" value="ES" />
          <Picker.Item label="Goiás" value="GO" />
          <Picker.Item label="Maranhão" value="MA" />
          <Picker.Item label="Mato Grosso" value="MT" />
          <Picker.Item label="Mato Grosso do Sul" value="MS" />
          <Picker.Item label="Minas Gerais" value="MG" />
          <Picker.Item label="Pará" value="PA" />
          <Picker.Item label="Paraíba" value="PB" />
          <Picker.Item label="Paraná" value="PR" />
          <Picker.Item label="Pernambuco" value="PE" />
          <Picker.Item label="Piauí" value="PI" />
          <Picker.Item label="Rio de Janeiro" value="RJ" />
          <Picker.Item label="Rio Grande do Norte" value="RN" />
          <Picker.Item label="Rio Grande do Sul" value="RS" />
          <Picker.Item label="Rondônia" value="RO" />
          <Picker.Item label="Roraima" value="RR" />
          <Picker.Item label="Santa Catarina" value="SC" />
          <Picker.Item label="São Paulo" value="SP" />
          <Picker.Item label="Sergipe" value="SE" />
          <Picker.Item label="Tocantins" value="TO" />
        </Picker>

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
