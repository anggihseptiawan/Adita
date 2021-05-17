import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CardContent} from '../../components/CardContent';
import {Container} from '../../components/Container';

const News = ({navigation}: any) => {
  return (
    <Container>
      <Text style={styles.header}>Berita Terbaru</Text>
      <View style={styles.eventWrapper}>
        <CardContent
          url="https://www.pradita.ac.id/assets/img/post/thumb/experimental-typography-artwork-reviews-by-wgd__VeeTJ.jpg"
          title="Experimental Typography Artwork reviews by WGD"
          time="minggu, 22 april 2021"
          handlePress={() => navigation.navigate('NewsDetail')}
        />
        <CardContent
          url="https://www.pradita.ac.id/assets/img/post/thumb/brand-identity-competition-for-new-wgd-logo-student-chapter__ca6Y7.jpg"
          title="Brand Identity Competition for New WGD Logo Student Chapter"
          time="Senin, 23 april 2021"
          handlePress={() => navigation.navigate('NewsDetail')}
        />
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
