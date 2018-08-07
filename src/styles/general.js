import colors from './colors';
import metrics from './metrics';

export default {
  container: {
    backgroundColor: colors.light,
    height: metrics.baseBox + 30,
    width: metrics.screenWidth - 10,
    margin: metrics.baseMargin - 5,
    flex: 1,
  },

  box: {
    backgroundColor: colors.green,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },

  boxNumbers: {
    backgroundColor: colors.yellow,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flex: 1,
  },

  officeText: {
    fontSize: 26,
    fontWeight: 'bold',
    marginLeft: 5,
  },

  nameText: {
    fontSize: 18,
    color: colors.blue,
  },
};
