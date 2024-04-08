import react from 'react';
import { Text, View, StyleSheet } from 'react-native';
export default function profile() {
    return (
        <View style={styles.container}>
            <Text>My Profile</Text>
            <Text>Name: Mostafa Gamal</Text>
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
