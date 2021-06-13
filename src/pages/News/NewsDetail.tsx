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
		
		fetch(`https://c620377b9efe.ngrok.io/api/news/${id_news}`)
    	.then(res => res.json())
    	.then(({data}) => setNews(data))

	}, [])
	return (
		<ScrollView showsVerticalScrollIndicator={false} style={styles.wrapper}>
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
						`https://c620377b9efe.ngrok.io/${news?.image}`,
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
	wrapper: {
		flex: 1,
		backgroundColor: "#FFCF86"
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
