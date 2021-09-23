import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';


export default function ProdutoContainer({nome, preco}) {
    return(
        <Pressable onPress={() => alert('funcionou')} style={styles.container}>
            <Text>{nome}</Text>
            <Text>R$ {preco},00</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#353535',
        width: 140,
        height: 180,
        borderRadius: 20,
        marginRight: 10,
        elevation: 15
    }
})