import React, { useState, useEffect } from 'react';
import { View,  Text, StyleSheet, FlatList,  Image, Button } from 'react-native';
import ImagensCarousel from './Carousel';
import ProdutosHome from './produtos'


const HomeScreen = ({nnavigation}) => { 

  return(
        <View style={styles.container}>
          <ImagensCarousel /> 
          <ProdutosHome />
        </View>
    )
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }

  });

  export default HomeScreen;