import { Text, View, Pressable, Image, StyleSheet, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";

import MealDetail from "../MealDetail";

function MealItem({ id, title, imageUrl, duration, complexity, affordability }) {
    const navigation = useNavigation();

    function selectMealItem() {
        navigation.navigate('MealDetail', {
            mealId: id
        })
    }

    return (
        <View style={styles.mealItem}>
            <Pressable onPress={selectMealItem} android_ripple={{ color: '#ccc' }} style={({ pressed }) => (pressed ? styles.buttonPressed : null)}>
                <View style={styles.innerContainer}>
                    <View>
                        <Image style={styles.image} source={{ uri: imageUrl }} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <MealDetail duration={duration} complexity={complexity} affordability={affordability} />
                </View>
            </Pressable>
        </View>
    )
}

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    },
    buttonPressed: {
        opacity: 0.5
    }
})