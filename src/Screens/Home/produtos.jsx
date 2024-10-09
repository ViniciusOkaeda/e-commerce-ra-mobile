import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import productsData from '../../../products.json'; 

const ProdutosHome = () => {
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity style={styles.itemContainer}>
        <Image source={{ uri: item.products_image }} style={styles.image} />
        <View style={styles.containerContent}>
          <Text style={styles.textHeader}>{item.products_name}</Text>
          <Text style={styles.textContent}>R$ {item.products_price}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={productsData.data} // Acesso à lista de produtos
      renderItem={renderItem}
      keyExtractor={(item) => item.products_id.toString()} // Chave única para cada item
      numColumns={2} // Número de colunas
      columnWrapperStyle={styles.columnWrapper} // Estilo para o wrapper das colunas
      contentContainerStyle={styles.contentContainer}
    />
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    padding: 10, // Espaçamento em volta da lista
  },
  columnWrapper: {
    justifyContent: 'space-between', // Espaço entre as colunas
  },
  itemContainer: {
    flex: 1,
    borderRadius: 10,
    marginBottom: 10, // Espaçamento entre os itens
    backgroundColor: '#fff', // Cor de fundo do item
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2, // Sombra no Android
  },
  image: {
    width: '100%',
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  containerContent: {
    padding: 10,
  },
  textHeader: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#444',
  },
  textContent: {
    fontSize: 12,
    color: '#9C9C9C',
  },
});

export default ProdutosHome;