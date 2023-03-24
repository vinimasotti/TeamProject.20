import { StyleSheet } from 'react-native';
import React from 'react';
import {SafeAreaView, TextInput} from 'react-native';
//bus time NTA app

//import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View, } from '../../components/Themed';
//import type {EmitterSubscription} from 'react-native';

const TextInputExample = () => {
  const [text, onChangeText] = React.useState('    stop number.');
  const [number, onChangeNumber] = React.useState('');

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        maxLength={6}
        autoComplete= 'off'
        inputMode=    'decimal'    
      />
    </SafeAreaView>
  );
};



export default function TabThreeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bus Time</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text > Insert here  NTA API  </Text>
      <TextInputExample></TextInputExample>
    </View>
  );
}
//<EditScreenInfo path="app/(tabs)/three.tsx" />
//new new new new

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',

  }, input: {
    height: 40,
    color:'red',
    margin: 20,
    borderWidth: 1,
    padding: 10,
    width: '80%',
    placeholderTextColor: '999'
  },


});

