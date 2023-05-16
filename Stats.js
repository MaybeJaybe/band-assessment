import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import data from './metal.json';

// This tab shows statistics from the data in metal.json. 
// Use map, filter, and reduce to find the values displayed here!


// -Total number of Bands - this is equal to the number of bands in the list

const totalBands = (data) => {
	return data.length
}

// -Total metal fans - this is the sum of all fans for each band
const totalFans = (data) => {
	return data.reduce((acc, band) => acc + band.fans, 0)
}

// -Number of Countries represented - 
// You'll need to count each unique country found in all bands

const countryOrigins = (data) => {
	const origins = data.map(band => band.origin)
	return new Set(origins).size
}

// -Number of Active bands - each band has a split property, 
// this is "-" (hyphen) when a band is still active 
// and shows the year they split if they broke up

const totalActive = (data) => {
	const active = data.filter(band => band.split === '-')
	return active.length
}

// -Number of bands that have split

const totalSplit = (data) => {
	const split = data.filter(band => band.split !== '-')
	return split.length
}

// const bandStyles = (data) => {
// 	const style = data.map(band => band.style)
// 	return new Set(style).length
// }
const bandStyles = data.reduce((acc, band) => {
	band.style.split(',').forEach(style => acc.add(style))
	return acc
}, new Set())


function Stats() {
	return (
		<View style={styles.container}>
			<Text style={styles.header}>Metal 🤘</Text>
			<Text style={styles.stats}>Total Bands: {totalBands(data)}</Text>
			<Text style={styles.stats}>Total Metal Fans: {(totalFans(data) * 1000).toLocaleString('en')}</Text>
			<Text style={styles.stats}>Countries: {countryOrigins(data)}</Text>
			<Text style={styles.stats}>Active: {totalActive(data)}</Text>
			<Text style={styles.stats}>Split: {totalSplit(data)}</Text>
			<Text style={styles.stats}>Styles: {bandStyles.size}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#000',
	},
	header: {
		fontSize: 30,
		marginBottom: 10,
		fontWeight: 'bold',
		color: '#fff'
	},
	stats: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#fff'
	}
})

export default Stats;