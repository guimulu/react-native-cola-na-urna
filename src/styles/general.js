import colors from './colors';
import metrics from './metrics';

export default {
  container: {
    backgroundColor: colors.white,
    height: metrics.baseBox + 30,
    width: metrics.screenWidth - 10,
    marginHorizontal: metrics.baseMargin - 5,
    marginVertical: metrics.baseMargin - 9,
    flex: 1,
  },

  box: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },

  boxNumbers: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flex: 1,
  },

  officeText: {
    color: colors.darkTransparent,
    fontSize: 26,
    fontWeight: 'bold',
    marginLeft: metrics.baseMargin - 5,
  },

  nameText: {
    fontSize: 18,
    color: colors.secundary,
    marginLeft: metrics.baseMargin - 5,
  },
};
