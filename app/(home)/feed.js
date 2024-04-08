// simple home page feed
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {Link} from 'expo-router';

export default function Home() {
    return (
        <View style={styles.container}>
            <Text>El-Home-Page</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});