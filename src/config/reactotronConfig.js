import Reactotron from 'reactotron-react-native';

const reactotron = Reactotron.configure({
  name: 'TCGRDNA',
  host: '192.168.1.5',
}).useReactNative();

if (reactotron) {
  reactotron.connect();
  reactotron.clear();
}
export default reactotron;
console.tron = reactotron;
