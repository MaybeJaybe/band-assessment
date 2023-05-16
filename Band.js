import React from 'react';
import { Text, StyleSheet, View, TouchableHighlight } from 'react-native';

function Band({ name, origin, formed, fans, split }) {
  fans = fans * 1000
  return (
    <TouchableHighlight style={styles.band}>
      <View>
        <View style={styles.view}>
          <Text style={[(split === '-') ? styles.active : styles.ifSplit]}>{name}</Text>
          <Text style={styles.origin}>{origin}</Text>
        </View>
        {/* band name and formation on left, country of origin and fans are on right */}
        <View style={styles.view}>
          <Text style={styles.info}>{formed}</Text>
          <Text style={styles.info}>{fans.toLocaleString('en-US')}</Text>
        </View>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  band: {
    padding: 20,
    backgroundColor: '#000'
  },
  active: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff'
  },
  ifSplit: {
    fontSize: 18,
    color: '#666',
    textDecorationLine: 'line-through'
  },
  origin: {
    fontSize: 18,
    color: '#999'
  },
  info: {
    fontSize: 12,
    color: '#fff'
  },
  view: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

export default Band