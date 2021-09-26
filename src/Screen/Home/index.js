import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { Text, StyleSheet, View, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProdutoContainer from '../../Components/ProdutoContainer';

const produtos = [
    {
        id: 1,
        nome: 'Produto 1',
        preco: 127.0,
        image_url: 'https://a-static.mlcdn.com.br/618x463/hiper-100-whey-900g-cookies-cream-probiotica-probiotica/otimanutri/12955/a44712511628650ab6e956ae6d46a3dc.jpg'
    },
    {
        id: 2,
        nome: 'Produto 2',
        preco: 127.0,
        image_url: 'https://a-static.mlcdn.com.br/618x463/hiper-100-whey-900g-cookies-cream-probiotica-probiotica/otimanutri/12955/a44712511628650ab6e956ae6d46a3dc.jpg'
    },
    {
        id: 3,
        nome: 'Produto 3',
        preco: 127.0,
        image_url: 'https://a-static.mlcdn.com.br/618x463/hiper-100-whey-900g-cookies-cream-probiotica-probiotica/otimanutri/12955/a44712511628650ab6e956ae6d46a3dc.jpg'
    },
]

export default function() {
    const navigation= useNavigation();

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.titulo}>Produtos</Text>

            <View style={styles.optionsView}>
                <Text style={styles.optionsTitle}>Cutting</Text>
                <Pressable onPress={() => alert('funcionou')}>
                    <Text style={styles.optionsAction}>Ver mais</Text>
                </Pressable>
            </View>

            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{ maxHeight: '26%', marginLeft: 15 }}
            >
                {produtos.map(produto => (
                    <ProdutoContainer
                        key={produto.id}
                        nome={produto.nome}
                        preco={produto.preco}
                        image={produto.image_url}
                    />
                ))}
            </ScrollView>

            <View style={styles.optionsView}>
                <Text style={styles.optionsTitle}>Off</Text>
                <Text style={styles.optionsAction}>Ver mais</Text>
            </View>

            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{ maxHeight: '26%', marginLeft: 15 }}
            >
                {produtos.map(produto => (
                    <ProdutoContainer
                        key={produto.id}
                        nome={produto.nome}
                        preco={produto.preco}
                        image={produto.image_url}
                    />
                ))}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#242525'
    },
    titulo: {
        color: 'white',
        textAlign: 'center',
        fontSize: 26,
        marginTop: 30,
        fontWeight: '700'
    },
    optionsView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '3%',
        marginBottom: 25,
        paddingHorizontal: 15
    },
    optionsTitle: {
        color: 'white',
        fontSize: 20
    },
    optionsAction: {
        color: '#DC3636'
    }
})