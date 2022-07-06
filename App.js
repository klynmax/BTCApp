import React from 'react';
import { StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';

import CurrentPrice from './src/components/CurrentPrice';
import HitoryGraphic from './src/components/HistoryGraphic';
import QuotationList from './src/components/QuotationList';
import QuotationItem from './src/components/QuotationList/QuotationItem';

function addZero(number){
  if(number <= 9){
    return "0" + number
  }
  return number
}

function url(qtdDay){
  const date = new Date();
  const listLastDay = qtdDay;
  const endDate = `${date.getFullYear()}-${addZero(date.getMonth()+1)}-${addZero(date.getDate())}`;
  date.setDate(data.getDate() - listLastDay)
  const startDate = `${date.getFullYear()}-${addZero(date.getMonth()+1)}-${addZero(date.getDate())}`

  return `https://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&send=${endDate}`

}

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
