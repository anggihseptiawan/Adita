import React from 'react';
import {
	View,
	Image,
	Text,
	StyleSheet,
	TouchableNativeFeedback,
} from 'react-native';
import {NormalText} from './NormalText';
import {BoldText} from './BoldText';
import {Gap} from './Gap';

export const CardContent = ({title, time, url, handlePress}) => {
	return (
		<TouchableNativeFeedback onPress={handlePress}>
			<View style={styles.event}>
				<Image
					style={styles.poster}
					source={{
						uri: url,
					}}
				/>
				<View style={styles.description}>
					<BoldText>{title}</BoldText>
					<Gap mt={10} />
					<NormalText fs={12}>{time}</NormalText>
				</View>
			</View>
		</TouchableNativeFeedback>
	);
};

const styles = StyleSheet.create({
	event: {
		flexDirection: 'row',
		marginBottom: 8,
	},
	poster: {
		width: 80,
		height: 80,
		borderRadius: 8,
		marginRight: 10,
	},
	description: {
		flex: 1,
		flexDirection: 'column',
	},
	time: {
		fontSize: 10,
		marginTop: 8,
	},
});
