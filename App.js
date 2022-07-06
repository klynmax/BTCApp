import React, { useState, useEffect } from 'react';
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
  date.setDate(date.getDate() - listLastDay)
  const startDate = `${date.getFullYear()}-${addZero(date.getMonth()+1)}-${addZero(date.getDate())}`

  return `https://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&send=${endDate}`
}

async function getListCoins(url){
  let response = await fetch(url);
  let returnApi = await response.json();
  let selectListQuotations = returnApi.bpi;

  const queryCoinList = Object.keys(selectListQuotations).map((key) => {
    return {
      data: key.split(".").reverse().join("/"),
      valor: selectListQuotations[key]
    };
  });

  let data = queryCoinList.reverse();
  return data;
}

async function getPriceCoinsGraphic(url){
  let responseG = await fetch(url);
  let returnApiG = await responseG.json();
  let selectListQuotationsG = returnApiG.bpi;

  const queryCoinList = Object.keys(selectListQuotationsG).map((key) => {
    selectListQuotationsG[key]
  });

  let dataG = queryCoinList;
  return dataG;
}

export default function App() {

  const [coinsList, setCoinsList] = useState([]);
  const [coinsGraphicList, setCoinsGraphicList] = useState([0]);
  const [days, setDays] = useState(30);
  const [updateData, setUpdateData] = useState(true);

  function updateDay(number){
    setDays(number);
    setUpdateData(true);
  }

  useEffect(() => {
    getListCoins(url(days))
    .then((data) => {
     setCoinsList(data)
    });

    getPriceCoinsGraphic(url(days))
    .then((dataG) => {
      setCoinsGraphicList(dataG)
    });

    if(updateData){
      setUpdateData(false);
    }

  }, [updateData])

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
