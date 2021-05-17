import React from 'react';
import {View, StyleSheet} from 'react-native';

export const Container = ({children}) => {
	return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 15,
		paddingTop: 20,
		paddingBottom: 50,
		width: '100%',
		backgroundColor: '#eaeaf6',
	},
});
