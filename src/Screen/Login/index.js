import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Pressable, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function() {
    const navigation= useNavigation();
    return(
        <SafeAreaView>
            <Text>Login</Text>
            <Pressable onPress={() => navigation.navigate('App')}>
                <Text>Entrar</Text>
            </Pressable>
        </SafeAreaView>
    );
}