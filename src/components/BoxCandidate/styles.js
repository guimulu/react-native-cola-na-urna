import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  box: {
    backgroundColor: colors.light,
    height: metrics.baseBox + 30,
    width: metrics.screenWidth - 10,
    margin: metrics.baseMargin - 5,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },

  text: {

  },
});

export default styles;
