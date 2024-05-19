import { View, Text, Image, TouchableOpacity } from "react-native"
import styles from './MealRenderItem.styles';
import { useNavigation } from "@react-navigation/native";
const MealRenderItem = ({ meal }) => {
    const navigation = useNavigation();

    const onNavigateDetail = () => {
        navigation.navigate('Detail', { idMeal: meal.idMeal });
    }

    return (

        <TouchableOpacity onPress={onNavigateDetail} style={styles.container}>
            <Image source={{ uri: meal.strMealThumb }} style={styles.image} />
            <View style={styles.text_wrapper}>
                <Text style={styles.text}>{meal.strMeal}</Text>
            </View>
        </TouchableOpacity>
    )
};

export default MealRenderItem;