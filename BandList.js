import * as React from 'react';
import { SafeAreaView, StyleSheet, FlatList } from 'react-native';
import data from './metal.json'
import Band from './Band';

function BandList() {
	return (
		<SafeAreaView>
			<FlatList 
				data={data}
				renderItem={({ item, index }) => {
					return (
						<Band 
							name={item.band_name}
							origin={item.origin}
							formed={item.formed}
							fans={item.fans}
							split = {item.split}
						/>
					)
				}}
				keyExtractor={(item) => item.id}
			/>
		</SafeAreaView>
	);
}

export default BandList;