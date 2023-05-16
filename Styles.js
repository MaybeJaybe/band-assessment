import * as React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import StyleBand from './StyleBand';
import data from "./metal.json"

function Styles() {
  const styles = Array.from(
    data.reduce((acc, band) => {
      band.style.split(",").forEach(style => acc.add(style))
      return acc
    }, new Set())
  )
  return (
    <SafeAreaView>
      <FlatList 
        data={styles}
        renderItem={({item}) => <StyleBand name={item}/>}
        keyExtractor={(item) => item}
      />
    </SafeAreaView>
  );
}

export default Styles