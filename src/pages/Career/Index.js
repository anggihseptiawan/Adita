import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableNativeFeedback,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Container} from '../../components/Container';
import {Arrow} from '../../assets';
import {BoldText} from '../../components/BoldText';
import {NormalText} from '../../components/NormalText';
import {Gap} from '../../components/Gap';

const Career = ({navigation}) => {
	return (
		<ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
			<Container>
				<BoldText>Bergabung bersama kami!</BoldText>
				<Gap mb={10} />
				<TouchableNativeFeedback
					onPress={() => navigation.navigate('CareerDetail')}>
					<View style={styles.card}>
						<View>
							<BoldText>Software Engineer</BoldText>
							<Gap mt={4} />
							<NormalText fs={11}>25 april 2021</NormalText>
						</View>
						<Image style={styles.image} source={Arrow} />
					</View>
				</TouchableNativeFeedback>
				<TouchableNativeFeedback
					onPress={() => navigation.navigate('CareerDetail')}>
					<View style={styles.card}>
						<View>
							<BoldText>Dosen Teknik Informatika</BoldText>
							<Gap mt={4} />
							<NormalText fs={11}>25 april 2021</NormalText>
						</View>
						<Image style={styles.image} source={Arrow} />
					</View>
				</TouchableNativeFeedback>
				<TouchableNativeFeedback
					onPress={() => navigation.navigate('CareerDetail')}>
					<View style={styles.card}>
						<View>
							<BoldText>Marketing</BoldText>
							<Gap mt={4} />
							<NormalText fs={11}>25 april 2021</NormalText>
						</View>
						<Image style={styles.image} source={Arrow} />
					</View>
				</TouchableNativeFeedback>
			</Container>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		minHeight: '100%',
	},
	headerTitle: {
		marginBottom: 20,
	},
	card: {
		backgroundColor: 'white',
		paddingHorizontal: 10,
		paddingVertical: 15,
		borderRadius: 6,
		marginBottom: 10,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	job: {
		fontWeight: '700',
		marginBottom: 5,
	},
	time: {
		fontSize: 10,
	},
	image: {
		width: 20,
		height: 10,
	},
});

export default Career;
