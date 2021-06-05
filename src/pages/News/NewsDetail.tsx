import React, { useEffect, useState } from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Container} from '../../components/Container';
import {NormalText} from '../../components/NormalText';
import {BoldText} from '../../components/BoldText';
import {Gap} from '../../components/Gap';

interface NewsProps {
	id_news: number,
	title: string,
	image: string,
	content: string,
	createdAt: string,
	updatedAt: string
}

const NewsDetail = ({route}: any) => {
	const [news, setNews] = useState<NewsProps>({} as NewsProps)
	useEffect(() => {
		const {id_news} = route.params;
		
		fetch(`https://ffb1eebfba46.ngrok.io/api/news/${id_news}`)
    	.then(res => res.json())
    	.then(({data}) => setNews(data))

	})
	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<Container>
				<View style={styles.header}>
					<BoldText>{news.title}</BoldText>
					<Gap mt={5} />
					<NormalText fs={11}>{new Date(news.createdAt).toDateString()}</NormalText>
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
					<NormalText>{news.content}</NormalText>
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
