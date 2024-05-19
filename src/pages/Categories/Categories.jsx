import React from "react";
import { View, Text, FlatList } from "react-native"
import useFetch from "../../hooks/useFetch";
import CategoryRenderItem from "../../components/CategoryRenderItem/CategoryRenderItem";

const Categories = () => {
    const { error, loading, data } = useFetch("/categories.php");

    if (loading) {
        return <Text>loading</Text>
    }
    if (error) {
        return <Text>error</Text>
    }

    const renderItem = ({ item }) => <CategoryRenderItem category={item} />

    const keyExtractor = (item) => item?.idCategory?.toString()
    
    return (
        <FlatList
            data={data?.categories}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
        />
    )

}

export default Categories;