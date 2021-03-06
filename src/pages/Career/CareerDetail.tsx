import React, { useEffect, useState } from 'react';
import {Container} from '../../components/Container';
import {View, StyleSheet} from 'react-native';
import {BoldText} from '../../components/BoldText';
import {Gap} from '../../components/Gap';
import {NormalText} from '../../components/NormalText';
import { ScrollView } from 'react-native-gesture-handler';

interface CareerProps {
	id_career: number,
	title: string,
	qualification: string,
	description: string,
	duedate: string,
	createdAt: string,
	updatedAt: string
  } 

const CareerDetail = ({route}: any) => {
	const [career, setCareer] = useState<CareerProps>({} as CareerProps)
	useEffect(() => {
		const {id_career} = route.params;
		
		fetch(`https://c620377b9efe.ngrok.io/api/career/${id_career}`)
    	.then(res => res.json())
    	.then(({data}) => setCareer(data))

	}, [])
	return (
		<ScrollView showsVerticalScrollIndicator={false} style={styles.wrapper}>
			<Container>
				<View style={styles.section}>
					<BoldText>Position</BoldText>
					<Gap mb={5} />
					<NormalText>{career?.title}</NormalText>
				</View>
				<View style={styles.section}>
					<BoldText>Description</BoldText>
					<Gap mb={5} />
					<NormalText>{career?.description}</NormalText>
				</View>
				<View style={styles.section}>
					<BoldText>Requirement</BoldText>
					<Gap mb={5} />
					<NormalText>{career?.qualification}</NormalText>
				</View>
				<Gap mb={10} />
				<View>
					<BoldText>Due Date</BoldText>
					<Gap mb={5} />
					<NormalText>{new Date(career?.duedate).toDateString()}</NormalText>
				</View>
			</Container>

		</ScrollView>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		backgroundColor: "#FFCF86"
	},
	section: {
		paddingVertical: 10,
	},
	title: {
		fontWeight: '700',
		marginBottom: 5,
	},
});

export default CareerDetail;
