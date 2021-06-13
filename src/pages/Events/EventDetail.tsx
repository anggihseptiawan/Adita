import React, { useEffect, useState } from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Container} from '../../components/Container';
import {NormalText} from '../../components/NormalText';
import {BoldText} from '../../components/BoldText';
import {Gap} from '../../components/Gap';

interface EventsProps {
	id_event: number,
	title: string,
	image: string,
  	schedule: string,
	content: string,
	createdAt: string,
	updatedAt: string
}

const EventDetail = ({route}: any) => {
	const [event, setEvent] = useState<EventsProps>({} as EventsProps)

	useEffect(() => {
		const {id_event} = route.params;
		
		fetch(`https://c620377b9efe.ngrok.io/api/events/${id_event}`)
    	.then(res => res.json())
    	.then(({data}) => setEvent(data))
	}, [])
	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<Container>
				<View style={styles.header}>
					<BoldText>{event?.title}</BoldText>
					<Gap mt={6} />
					<NormalText fs={11}>{new Date(event?.schedule).toDateString()}</NormalText>
				</View>
				<Image
					style={styles.image}
					source={{
						uri:
							`https://c620377b9efe.ngrok.io/${event?.image}`,
					}}
				/>
				<View>
					<Gap mt={8} />
					<NormalText>{event?.content}</NormalText>
				</View>
			</Container>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 10,
		paddingTop: 20,
		paddingBottom: 50,
		width: '100%',
	},
	header: {
		paddingBottom: 20,
	},
	image: {
		width: '100%',
		height: 210,
		borderRadius: 6,
		marginBottom: 8,
	},
});

export default EventDetail;
