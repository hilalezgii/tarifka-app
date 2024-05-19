import { View, Text } from "react-native"
import useFetch from "../../hooks/useFetch";
import { FlatList } from "react-native-gesture-handler";
import MealRenderItem from "../../components/MealRenderItem";
import styles from './Meals.styles';
const Meals = ({ route }) => {
    const { strCategory } = route.params;

    const { error, loading, data } = useFetch(`/filter.php?c=${strCategory}`)

    if (loading) {
        return <Text>loading</Text>
    }

    if (error) {
        return <Text>Error</Text>
    }

    const renderItem = ({ item }) => {
        return <MealRenderItem meal={item} />
    }

    return (
        <FlatList 
            data={data?.meals}
            renderItem={renderItem} 
            contentContainerStyle={styles.container}
            />
    );
};

export default Meals;