import React, { useState, useRef, useEffect } from 'react';
import { View, ScrollView, Image, Dimensions, StyleSheet } from 'react-native';
import data from './data.json';

const { width: screenWidth } = Dimensions.get('window');


const imageMap = {
  'Blackfriday.png': require('../../Assets/Blackfriday.png'),
  'Blackfriday2.png': require('../../Assets/Blackfriday2.png'),
};

const ImagensCarousel = () => {
  const scrollViewRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === data.carousel.length - 1 ? 0 : prevIndex + 1)); }, 3000); 
      // Troca de imagem a cada 3 segundos

    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ x: activeIndex * screenWidth, animated: true });
    }
  }, [activeIndex]);

  
  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onMomentumScrollEnd={(event) => {
          const contentOffsetX = event.nativeEvent.contentOffset.x;
          const newIndex = Math.floor(contentOffsetX / screenWidth);
          setActiveIndex(newIndex);
        }}
      >
        {data.carousel.map((item) => (
          <View key={item.id} style={styles.itemContainer}>
            <Image source={imageMap[item.image]} style={styles.image} />
          </View>
        ))}
      </ScrollView>
      {/* Indicadores de paginação */}
      <View style={styles.paginationContainer}>
        {data.carousel.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              activeIndex === index ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0, // Ocupa todo o espaço disponível
    justifyContent: 'flex-start', // Alinha ao topo
    marginBottom: 20, // Para dar espaço abaixo do carrossel
  },
  itemContainer: {
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15, // Bordas arredondadas
    overflow: 'hidden', // Garante que a imagem não ultrapasse as bordas
  },
  image: {
    width: screenWidth,
    height: 200,
    resizeMode: 'cover',
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5, // Espaço de 5 pixels abaixo das imagens
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5, // Forma redonda
    margin: 5,
  },
  activeDot: {
    backgroundColor: '#FF6347', // Cor para o ponto ativo
  },
  inactiveDot: {
    backgroundColor: '#C0C0C0', // Cor para o ponto inativo
  },
});

export default ImagensCarousel;