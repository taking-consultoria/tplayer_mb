import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import logoImage from '../../../assets/logo-rota 1.png'
import vectorImage from '../../../assets/Vector.png'


export const SplashScreen =() => {
  return (
    <View style={styles.container}>
      
      <Image style={styles.logo} source={logoImage}/>
      <Image style={styles.vector} source={vectorImage}/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#132440',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo:{
    height: 280,
    width: 271.6
  },

  vector:{
      height:50,
      width: 50,
      //Top: 10,
      //left: 162,
      opacity: 50
      

  }
});
