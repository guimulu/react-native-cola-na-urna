import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
    padding: metrics.basePadding * 2,
    justifyContent: 'center',
    alignItems: 'stretch',
  },

  title: {
    textAlign: 'center',
    color: colors.white,
    fontSize: 26,
    fontWeight: 'bold',
  },

  text: {
    textAlign: 'center',
    marginTop: metrics.baseMargin,
    fontSize: 18,
    color: colors.light,
    lineHeight: 21,
  },

  form: {
    marginTop: metrics.baseMargin * 2,
  },

  button: {
    backgroundColor: colors.green,
    borderRadius: metrics.baseRadius,
    height: 44,
    marginTop: metrics.baseMargin,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 20,
  },

});

export default styles;
