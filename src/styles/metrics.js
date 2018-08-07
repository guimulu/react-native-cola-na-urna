import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
  basePadding: 20,
  baseMargin: 10,
  baseBox: 50,
  baseRadius: 3,
  fontNumberBox: 30,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
};
