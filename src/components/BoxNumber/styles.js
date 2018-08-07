import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  box: {
    backgroundColor: colors.white,
    height: metrics.baseBox,
    width: metrics.baseBox,
    padding: metrics.basePadding - 15,
    borderRadius: metrics.baseRadius,
    margin: metrics.baseMargin - 8,
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.dark,
    borderWidth: 1,
  },

  text: {
    fontSize: 36,
    fontWeight: 'bold',
    color: colors.darker,
  },
});

export default styles;
