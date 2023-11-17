import { View, StyleSheet,Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import StylishCards from './components/StylishCards'
import ShadowCard from './components/ShadowCard'
import FlatCards from './components/FlatCards'
import ActivityCard from './components/ActivityCard'



export default function App() {
  return (
    <SafeAreaView>
    <ScrollView>
      <StylishCards />
      <ShadowCard/>
     
      <FlatCards/>
      <ActivityCard />
    </ScrollView>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
