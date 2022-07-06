import React from 'react';
import { StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';

import CurrentPrice from './src/components/CurrentPrice';
import HitoryGraphic from './src/components/HistoryGraphic';
import QuotationList from './src/components/QuotationList';
import QuotationItem from './src/components/QuotationList/QuotationItem';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar 
        backgroundColor="#b28704"
        barStyle="ligth-content"
      />
      <CurrentPrice />
      <HitoryGraphic />
      <QuotationList />
      <QuotationItem />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    paddingTop: Platform.OS === "android" ? 40 : 0
  },
});
