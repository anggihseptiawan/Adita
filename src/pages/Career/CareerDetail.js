import React from 'react';
import {Container} from '../../components/Container';
import {View, StyleSheet} from 'react-native';
import {BoldText} from '../../components/BoldText';
import {Gap} from '../../components/Gap';
import {NormalText} from '../../components/NormalText';

const CareerDetail = () => {
	return (
		<Container>
			<View style={styles.section}>
				<BoldText>Position</BoldText>
				<Gap mb={5} />
				<NormalText>Software Engineer</NormalText>
			</View>
			<View style={styles.section}>
				<BoldText>Description</BoldText>
				<Gap mb={5} />
				<NormalText>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Recusandae earum tempore pariatur vitae, voluptas autem ullam
					blanditiis magni officia laboriosam officiis praesentium
					perferendis molestiae illum magnam nihil optio! Provident, ea.
				</NormalText>
			</View>
			<View style={styles.section}>
				<BoldText>Requirement</BoldText>
				<Gap mb={5} />
				<NormalText>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
					iusto, tempore dolor corrupti vitae deleniti eveniet fuga id
					provident omnis.
				</NormalText>
			</View>
			<Gap mt={8} />
			<NormalText>Due date, 20 Mei 2021</NormalText>
		</Container>
	);
};

const styles = StyleSheet.create({
	section: {
		paddingVertical: 10,
	},
	title: {
		fontWeight: '700',
		marginBottom: 5,
	},
});

export default CareerDetail;
