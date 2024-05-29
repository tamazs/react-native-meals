import { View, Text, StyleSheet } from "react-native";

import { MEALS } from "../data/dummy-data";

function MealsOverViewScreen({ route }) {
    const catId = route.params.categoryId

    return (
        <View style={styles.container}>
            <Text>MealsOverViewScreen - {catId}</Text>
        </View>
    )
}

export default MealsOverViewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})