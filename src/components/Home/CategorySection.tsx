import React from 'react';
import { View, Image, StyleSheet, Dimensions, FlatList } from 'react-native';
import CustomText from '../../components/CustomText';

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

            <CustomText style={styles.title} weight={'medium'}>{item.title}</CustomText>
            <Image source={{ uri: item.image.url }} style={styles.image} />

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
        paddingHorizontal: width * 0.07,
    },
    row: {
        justifyContent: 'space-between',
    },
    card: {
        width: width * 0.40,
        height: width * 0.40,
        backgroundColor: '#F4F6F6',    // Figma'daki #F4F6F6
        borderRadius: 12,             // 12px kenar yuvarlatma
        marginVertical: 8,
        position: 'relative',
        overflow: 'hidden',

        // Çerçeve (border) 0.5px, #29BB89 %18 opaklık
        borderWidth: 0.5,
        borderColor: 'rgba(41, 187, 137, 0.18)',
    },
    title: {
        position: 'absolute',
        top: 15,
        left: 15,
        fontSize: 16,
        color: '#13231B',
        width: width * 0.35,
        letterSpacing: -0.32,
    },
    image: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: '80%',
        height: '80%',
        resizeMode: 'contain',
    },
});

export default CategorySection;
