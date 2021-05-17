import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Container} from '../../components/Container';
import {NormalText} from '../../components/NormalText';
import {BoldText} from '../../components/BoldText';
import {Gap} from '../../components/Gap';

const NewsDetail = () => {
	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<Container>
				<View style={styles.header}>
					<BoldText>
						Experimental Typography Artwork reviews by WGD
					</BoldText>
					<Gap mt={5} />
					<NormalText fs={11}>Minggu, 20 April 2021</NormalText>
				</View>
				<Image
					style={styles.image}
					source={{
						uri:
							'https://www.pradita.ac.id/assets/img/post/thumb/experimental-typography-artwork-reviews-by-wgd__VeeTJ.jpg',
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
	title: {
		fontWeight: '700',
		marginBottom: 8,
	},
	time: {
		fontSize: 10,
	},
	image: {
		width: '100%',
		height: 210,
		borderRadius: 6,
		marginBottom: 8,
	},
});

export default NewsDetail;
