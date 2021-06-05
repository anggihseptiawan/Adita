import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CardContent} from '../../components/CardContent';
import {Container} from '../../components/Container';

interface NewsProps {
  id_news: number,
  title: string,
  image: string,
  content: string,
  createdAt: string,
  updatedAt: string
} 

const News = ({navigation}: any) => {
  const [allNews, setAllNews] = useState<NewsProps[]>([] as NewsProps[])

  useEffect(() => {
    fetch('https://ffb1eebfba46.ngrok.io/api/news')
    .then(res => res.json())
    .then(({data}) => setAllNews(data))
  }, [])
  return (
    <Container>
      <Text style={styles.header}>Berita Terbaru</Text>
      <View style={styles.eventWrapper}>
        {
          allNews.map(news => {
            return (
              <CardContent
                key={news.id_news}
                url={`https://ffb1eebfba46.ngrok.io/${news.image}`}
                title={news.title}
                time={new Date(news.createdAt).toDateString()}
                handlePress={() => navigation.navigate('NewsDetail', {id_news: news.id_news})}
              />
            )
          })
        }
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  header: {
    marginBottom: 15,
    fontWeight: '700',
  },
  eventWrapper: {
    width: '100%',
  },
});

export default News;
