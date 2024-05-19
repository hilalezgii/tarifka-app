import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import useFetch from "../../hooks/useFetch";
import styles from "./Detail.styles";
import { ScrollView } from "react-native-gesture-handler";

const Detail = ({ route }) => {

    const { idMeal } = route.params;

    const { error, loading, data } = useFetch(`/lookup.php?i=${idMeal}`);

    const mealDetail = data?.meals?.[0];

    const onOpenYoutube = () => {
        Linking.openURL(mealDetail?.strYoutube);
    }

    return (
        <ScrollView style={styles.container}>
            <Image style={styles.image} source={{ uri: mealDetail?.strMealThumb }} />
            <View style={styles.instructions}>
                <Text style={styles.text}>{mealDetail?.strMeal}</Text>
                <Text style={styles.textArea}>{mealDetail?.strArea}</Text>
            </View>
            <Text>{mealDetail?.strInstructions}</Text>

            {
                mealDetail?.strYoutube && <TouchableOpacity
                    onPress={onOpenYoutube}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Watch On Youtube</Text>
                </TouchableOpacity>
            }

        </ScrollView>
    );
};

export default Detail;