import React from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';

function App(){
  fetch('https://api.nationaltransport.ie/gtfsr/v2/gtfsr?format=json', {
        method: 'GET',
        // Request headers
        headers: {
            'Cache-Control': 'no-cache',
            'x-api-key': '••••••••••••••••••••••••••••••••',}
    })
    .then(response => {
        console.log(response.status);
        console.log(response.text());
    })
    .catch(err => console.error(err));
 return 

 /*const button = document.createElement("button");
 button.textContent = "Click me!";
 button.type = "button";
 button.addEventListener("click", () => {
  console.log("Button clicked!")
  document.body.appendChild(button)*/
};



const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default App;