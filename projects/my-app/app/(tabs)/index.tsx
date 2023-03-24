//welcome page
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

import QRCode from 'qrcode';

const text = 'Hello, world!';
const options = {
    width: 256,
    height: 256,
};

const imageDataUrl = QRCode.toCanvas(text, options);

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.separator2}> Zip Zap </Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>

   
  );
  
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  } ,
  separator2: {
    fontSize: 50,
    fontWeight: 'bold',
  } ,
});

