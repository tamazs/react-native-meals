import { View, Text, StyleSheet } from "react-native";

function Subtitle({ children }) {
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{children}</Text>
        </View>
    )
}

export default Subtitle;

const styles = StyleSheet.create({
    subtitle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
    },
    subtitleContainer: {
        borderBottomColor: 'white',
        borderBottomWidth: 2,
        padding: 6,
        marginVertical: 4,
        marginHorizontal: 12
    }
})