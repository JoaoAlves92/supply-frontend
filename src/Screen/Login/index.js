import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function() {
    const navigation= useNavigation();
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    return(
        <SafeAreaView style={styles.container}>
            <Text>Login</Text>
            <TextInput
            onChangeText={texto => setEmail(texto)}
            value={email}
            placeholder="E-mail"
            style={styles.input}
            />

            <TextInput
            onChangeText={texto => setSenha(texto)}
            value={senha}
            placeholder="Senha"
            style={styles.input}
            secureTextEntry
            />

            <Pressable onPress={() => alert('funcionou!')}>
                <Text style={styles.helpersenha}>Esqueceu a senha?</Text>
            </Pressable>

            <Pressable style={styles.botao} onPress={() => navigation.navigate('App')}>
                <Text style={styles.botaoTexto}>Entrar</Text>
            </Pressable>

            <Text style={styles.ouText}>OU</Text>
            <View style={styles.ouLinha}></View>

            <View style={styles.newUserContainer}>
                <Text style={styles.newUserText}>Novo usuário?</Text>
                <Pressable onPress={() => alert('foi')}>
                    <Text style={styles.newUserAction}>Cadastre-se</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#242525',
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        alignSelf: 'center',
        backgroundColor: '#353535',
        marginTop: 10,
        padding: 10,
        borderRadius: 10
    },
    helpersenha: {
        textAlign: 'center',
        color: '#353535',
        marginTop: 10,
        marginBottom: 30
    },
    botao: {
        backgroundColor: '#DC3636',
        borderRadius: 10,
        padding: 10,
        width: '80%',
        alignSelf: 'center'
    },
    botaoTexto: {
        color: 'white',
        textAlign: 'center'
    },
    ouText: {
        color: 'white',
        marginVertical: 20,
        backgroundColor: '#242525',
        zIndex: 10,
        width: 50,
        textAlign: 'center'
    },
    ouLinha: {
        borderTopColor: 'white',
        borderTopWidth: .5,
        width: '100%',
        marginTop: -30
    },
    newUserContainer: {
        flexDirection: 'row',
        marginTop: 30
    },
    newUserText: {
        color: 'white'
    },
    newUserAction: {
        color: '#DC3636',
        marginLeft: 5
    }
})