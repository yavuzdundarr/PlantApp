import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, FlatList } from 'react-native';

interface Category {
    id: number;
    title: string;
    image: {
        url: string;
    };
}

interface Props {
    data: Category[];
}

const { width } = Dimensions.get('window');

const CategorySection: React.FC<Props> = ({ data }) => {
    const renderItem = ({ item }: { item: Category }) => (
        <View style={styles.card}>
            <Image source={{ uri: item.image.url }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
        </View>
    );

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            columnWrapperStyle={styles.row}
            contentContainerStyle={styles.container}
            scrollEnabled={false}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
    },
    row: {
        justifyContent: 'space-between',
    },
    card: {
        width: width * 0.43,
        height: 150,
        backgroundColor: '#F8F8F8',
        borderRadius: 12,
        marginVertical: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 80,
        height: 80,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 14,
        color: '#222',
        marginTop: 5,
    },
});

export default CategorySection;
