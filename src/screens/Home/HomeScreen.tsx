import React, { useEffect } from 'react';
import { ScrollView, SafeAreaView, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHomeData } from '../../redux/homeSlice';
import { AppDispatch, RootState } from '../../redux/store';

import HeaderComponent from '../../components/Home/HeaderComponent';
import PremiumBoxComponent from '../../components/Home/PremiumBoxComponent';
import GetStartedCarousel from '../../components/Home/GetStartedCarousel';
import CategorySection from '../../components/Home/CategorySection';
import TabBarComponent from '../../components/Home/TabBarComponent';

const HomeScreen: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();

    const { questions, categories } = useSelector((state: RootState) => state.home);

    useEffect(() => {
        dispatch(fetchHomeData());
    }, [dispatch]);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                <HeaderComponent />
                <PremiumBoxComponent />
                <GetStartedCarousel data={questions} />
                <CategorySection data={categories} />
            </ScrollView>
            <TabBarComponent />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#FBFAFA' },
    scrollView: { paddingBottom: 80 },
});

export default HomeScreen;
