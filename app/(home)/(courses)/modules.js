import react from 'react';
import { Text, View, StyleSheet } from 'react-native';
export default function modules() {
    return (
        <View style={styles.container}>
            <Text>Chapter 1</Text>
            <Text>Chapter 2</Text>
            <Text>Chapter 3</Text>
            <Text>Chapter 4</Text>
        </View>
    );
} 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});