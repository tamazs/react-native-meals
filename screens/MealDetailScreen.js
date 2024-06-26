import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import { useLayoutEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";

import { MEALS } from "../data/dummy-data";
import MealDetail from "../components/MealDetail";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";

import { addFavorite, removeFavorite } from "../store/redux/favorites";

//import { FavoritesContext } from "../store/context/favorites-context";

function MealDetailScreen({ route, navigation }) {
    //   const favoriteMealsCtx = useContext(FavoritesContext);

    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
    const dispatch = useDispatch();

    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    //const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);
    const mealIsFavorite = favoriteMealIds.includes(mealId);

    function changeFavoriteStatusHandler() {
        if (mealIsFavorite) {
            //favoriteMealsCtx.removeFavorite(mealId);
            dispatch(removeFavorite({ id: mealId }))
        } else {
            //favoriteMealsCtx.addFavorite(mealId)
            dispatch(addFavorite({ id: mealId }))
        }
    }

    useLayoutEffect(() => {
        const mealName = MEALS.find((meal) => meal.id === mealId).title;

        navigation.setOptions({
            title: mealName,
            headerRight: () => {
                return <IconButton icon={mealIsFavorite ? "star" : "star-outline"} color="white" onPress={changeFavoriteStatusHandler} />
            }
        })
    }, [navigation, changeFavoriteStatusHandler])

    return (
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetail textStyle={styles.textDetail} duration={selectedMeal.duration} affordability={selectedMeal.affordability} complexity={selectedMeal.complexity} />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients} />
                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>
    )
}

export default MealDetailScreen;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32
    },
    image: {
        width: '100%',
        height: 350
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white',
    },
    textDetail: {
        color: 'white'
    },
    listOuterContainer: {
        alignItems: 'center'
    },
    listContainer: {
        width: '80%'
    }
})