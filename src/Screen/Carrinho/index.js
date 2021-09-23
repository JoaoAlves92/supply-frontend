import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Carrinho() {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.titulo}>Carrinho</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#242525',
        paddingHorizontal: 15
    },
    titulo: {
        color: 'white',
        textAlign: 'center',
        fontSize: 26,
        marginTop: 30,
        fontWeight: '700'
    },
})