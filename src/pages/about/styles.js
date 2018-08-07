import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lighter,
    padding: metrics.basePadding,
  },

  info: {
    flexDirection: 'row',
    marginBottom: metrics.baseMargin,
    flex: 0,
    width: metrics.screenWidth - 40,
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
  },

  box: {
    marginLeft: metrics.baseMargin,
  },

  title: {
    color: colors.darker,
    fontSize: 22,
    fontWeight: 'bold',
  },

  boxText: {
    flexDirection: 'row',
    marginRight: 60,
  },

  text: {
    marginTop: metrics.baseMargin - 5,
    color: colors.dark,
    fontSize: 16,
    lineHeight: 18,
    flexWrap: 'wrap',
    textAlign: 'justify',
  },

  button: {
    backgroundColor: colors.danger,
    borderRadius: metrics.baseRadius,
    height: 44,
    marginTop: metrics.baseMargin + 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 20,
  },

  aviso: {
    marginTop: metrics.baseMargin,
    color: colors.dark,
    fontSize: 18,
    lineHeight: 18,
    fontWeight: 'bold',
    flexWrap: 'wrap',
    textAlign: 'center',
  },

  icons: {

  },

});

export default styles;
