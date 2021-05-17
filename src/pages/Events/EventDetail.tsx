import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Container} from '../../components/Container';
import {NormalText} from '../../components/NormalText';
import {BoldText} from '../../components/BoldText';
import {Gap} from '../../components/Gap';

const EventDetail = () => {
	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<Container>
				<View style={styles.header}>
					<BoldText>
						PLC Corner - Critical Thinking - Berkata Melalui Fakta with
						Nadia Soekarno
					</BoldText>
					<Gap mt={6} />
					<NormalText fs={11}>Minggu, 20 April 2021</NormalText>
				</View>
				<Image
					style={styles.image}
					source={{
						uri:
							'https://pradita.ac.id/assets/img/post/image/plc-corner-critical-thinking-berkata-melalui-fakta-with-nadia-soekarno__exi6f.jpg',
					}}
				/>
				<View>
					<Gap mt={8} />
					<NormalText>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit.
						Deleniti, quo eos quae minus facilis dolorem quisquam libero
						quas veniam aspernatur.
					</NormalText>
					<NormalText>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Reiciendis, aut? Eos consectetur neque laudantium quae magnam
						cum quaerat esse reprehenderit inventore, sequi nisi. Odio
						molestiae sint incidunt voluptatum voluptatem doloribus sit
						iure eos doloremque reiciendis, error voluptates officiis
						fugit voluptas autem laborum ullam cumque amet obcaecati
						voluptatibus quis commodi repudiandae. Labore aut animi
						ducimus adipisci numquam deserunt sapiente voluptatem aperiam
						quas officia. Animi nesciunt dolorem aliquid ea qui tempore
						reiciendis adipisci commodi possimus. Temporibus cumque
						molestias nihil quisquam vitae sit!
					</NormalText>
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
