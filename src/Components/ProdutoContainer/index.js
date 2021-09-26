import React from 'react';
import { Text, StyleSheet, Pressable, Image, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default function ProdutoContainer({nome, preco, image}) {
    return(
        <Pressable onPress={() => alert('funcionou')} style={styles.container}>
            <Image
                source={{ uri: image }}
                style={styles.imagem}
            />
            <View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <Text style={styles.titulo}>{nome}</Text>
                    <Pressable onPress={() => alert('adicionado ao carrinho')} style={{ backgroundColor: '#DC3636', borderRadius: 100, marginRight: 4 }}>
                        <MaterialCommunityIcons name="plus" color="white" size={24} />
                    </Pressable>
                </View>
                <Text style={styles.preco}>R$ {preco},00</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#353535',
        width: 140,
        minHeight: 180,
        borderRadius: 20,
        marginRight: 10,
        justifyContent: 'space-around'
    },
    titulo: {
        color: 'white',
        marginLeft: 10,
        fontSize: 16
    },
    preco: {
        color: 'white',
        marginLeft: 10,
        fontSize: 12
    },
    imagem: {
        width: 90,
        height: 90,
        alignSelf: 'center'
    }
})