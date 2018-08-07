import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  AsyncStorage,
  ScrollView,
  BackHandler,
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default class About extends Component {
  static navigationOptions = {
    title: 'Informações',
  };

  static propTypes = {
    navigation: PropTypes.shape({
      dispatch: PropTypes.func,
    }).isRequired,
  }

  signOut = async () => {
    await AsyncStorage.removeItem('@ColaNaUrna:session');

    BackHandler.exitApp();
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>

          <View style={styles.info}>
            <View>
              <Ionicons name="ios-time" size={60} style={styles.icon} />
            </View>
            <View style={styles.box}>
              <Text style={styles.title}>
                Data e hora
              </Text>
              <View style={styles.boxText}>
                <Text style={styles.text}>
                  A votação será no domingo, dia 7 de outubro, das 8h às 17h
                  (respeitando o horário local).
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.info}>
            <View>
              <FontAwesome name="vcard" size={42} style={styles.icon} />
            </View>
            <View style={styles.box}>
              <Text style={styles.title}>
                Documento com foto
              </Text>
              <View style={styles.boxText}>
                <Text style={styles.text}>
                O eleitor, com idade entre 18 e 70 anos incompletos, deverá
                comparecer a sua seção eleitoral para votar com documento original com foto
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.info}>
            <View>
              <Ionicons name="ios-contacts" size={60} style={styles.icon} />
            </View>
            <View style={styles.box}>
              <Text style={styles.title}>
                Senador
              </Text>
              <View style={styles.boxText}>
                <Text style={styles.text}>
                  Não é possível votar duas vezes no mesmo candidato a senador.
                  Se o eleitor fizer isso, o segundo voto será nulo, é possível
                  escolher apenas um candidato e anular ou votar em branco no
                  segundo candidato, Também é possível anular ou votar em branco
                  duas vezes.
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.info}>
            <View>
              <Ionicons name="ios-close-circle" size={60} style={styles.icon} />
            </View>
            <View style={styles.box}>
              <Text style={styles.title}>
                Errei o voto. O que faço?
              </Text>
              <View style={styles.boxText}>
                <Text style={styles.text}>
                  Após votar, confira se a opção está correta, Se não estiver
                  correta é possível aperta a tecla "Corrige" e votar novamente.
                  Caso já tenha confirmado, não é possível corrigir.
                </Text>
              </View>
            </View>
          </View>

          <Text style={styles.aviso}>
            Seja consciente, com o voto, podemos mudar o rumo do nosso país!
          </Text>

          <View style={styles.form}>
            <TouchableOpacity style={styles.button} onPress={this.signOut}>
              <Text style={styles.buttonText}>
                Sair do Aplicativo
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}
