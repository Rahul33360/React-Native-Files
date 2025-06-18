import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';

const App2 = () => {
  return (
    <SafeAreaView>
        <ScrollView >
            <FlatCards />
            <ElevatedCards />
            <FancyCard />
            <ActionCard/>
        </ScrollView>
    </SafeAreaView>

)};


export default App2