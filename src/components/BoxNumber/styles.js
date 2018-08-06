import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  box: {
    backgroundColor: colors.white,
    height: metrics.baseBox,
    width: metrics.baseBox,
    padding: metrics.basePadding - 10,
    borderRadius: metrics.baseRadius,
    margin: metrics.baseMargin - 8,
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.black,
  },
});

export default styles;
