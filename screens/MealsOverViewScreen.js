import { View, StyleSheet, FlatList } from "react-native";

import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

function MealsOverViewScreen({ route }) {
    const catId = route.params.categoryId

    const displayedMeals = MEALS.filter((meal) =>
        meal.categoryIds.includes(catId)
    );

    function renderMealItem(itemData) {
        return <MealItem title={itemData.item.title}/>
    }

    return (
        <View style={styles.container}>
            <FlatList data={displayedMeals} keyExtractor={(item) => item.id} renderItem={renderMealItem}/>
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