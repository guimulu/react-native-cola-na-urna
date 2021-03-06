import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron
    .configure({ host: '10.20.18.151' }) // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .connect();

  console.tron = tron;

  tron.clear();
}
