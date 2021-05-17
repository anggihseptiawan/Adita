import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CardContent} from '../../components/CardContent';
import {Container} from '../../components/Container';

const Events = ({navigation}: any) => {
  return (
    <Container>
      <Text style={styles.header}>Event Terbaru</Text>
      <View style={styles.eventWrapper}>
        <CardContent
          url="https://pradita.ac.id/assets/img/post/image/plc-corner-critical-thinking-berkata-melalui-fakta-with-nadia-soekarno__exi6f.jpg"
          title="PLC Corner - Critical Thinking : Berkata Melalui Fakta with Nadia Soekarno"
          time="minggu, 22 april 2021"
          handlePress={() => navigation.navigate('EventDetail')}
        />
        <CardContent
          url="https://pradita.ac.id/assets/img/post/thumb/experimental-typography-artwork-reviews-by-wgd__VeeTJ.jpg"
          title="Experimental Typography Artwork reviews by WGD"
          time="Senin, 23 april 2021"
          handlePress={() => navigation.navigate('EventDetail')}
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

export default Events;
