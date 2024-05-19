import React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import styles from './CategoryRenderItem.style';
import { useNavigation } from "@react-navigation/native";


const CategoryRenderItem = ({ category }) => {

    const navigation = useNavigation()

    const onNavigateMeals = () => {
        navigation.navigate('Meals', { strCategory: category.strCategory });
    }

    return (
        <TouchableOpacity style={styles.container} onPress={onNavigateMeals}>
            <View style={styles.content_container}>
                <Image style={styles.image} source={{ uri: category.strCategoryThumb }} />
                <Text style={styles.category_name}>{category.strCategory}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default CategoryRenderItem;