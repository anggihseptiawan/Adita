import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableNativeFeedback,
  Image,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Container} from '../components/Container';
import {Adita} from '../assets';
import {BoldText} from '../components/BoldText';
import {NormalText} from '../components/NormalText';
import {Gap} from '../components/Gap';

const Home = ({navigation}: any) => {
  return (
    <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
      <Container>
        <View style={styles.header}>
          <Image source={Adita} style={styles.image} />
          <Gap mt={6} />
          <BoldText fs={16}>Halo, Aku Adita</BoldText>
          <Gap mt={2} />
          <NormalText>Virtual Assistant Pradita University</NormalText>
        </View>
      </Container>
      <View style={styles.boxContainer}>
        <TouchableNativeFeedback onPress={() => navigation.navigate('Chat')}>
          <View style={styles.boxChat}>
            <BoldText>Interaktif Chat</BoldText>
            <View style={styles.line}></View>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={() => navigation.navigate('Events')}>
          <View style={styles.boxEvent}>
            <BoldText>Events</BoldText>
            <View style={styles.line}></View>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={() => navigation.navigate('News')}>
          <View style={styles.boxNews}>
            <BoldText>News</BoldText>
            <View style={styles.line}></View>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={() => navigation.navigate('About')}>
          <View style={styles.boxAbout}>
            <BoldText>About</BoldText>
            <View style={styles.line}></View>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={() => navigation.navigate('Career')}>
          <View style={styles.boxCareer}>
            <BoldText>Career</BoldText>
            <View style={styles.line}></View>
          </View>
        </TouchableNativeFeedback>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#FFCF86',
  },
  header: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
  },
  boxContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 30,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  boxCareer: {
    position: 'relative',
    display: 'flex',
    width: '46%',
    marginBottom: 10,
    marginHorizontal: 5,
    minHeight: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FEB18F',
    borderRadius: 20,
  },
  boxChat: {
    position: 'relative',
    display: 'flex',
    width: '46%',
    marginBottom: 10,
    marginHorizontal: 5,
    minHeight: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFCF86',
    borderRadius: 20,
  },
  boxEvent: {
    position: 'relative',
    display: 'flex',
    width: '46%',
    marginBottom: 10,
    marginHorizontal: 5,
    minHeight: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FA6E5A',
    borderRadius: 20,
  },
  line: {
    position: 'absolute',
    bottom: 10,
    height: 8,
    width: '50%',
    borderRadius: 6,
    backgroundColor: '#FFF',
  },
  boxAbout: {
    position: 'relative',
    display: 'flex',
    width: '46%',
    marginBottom: 10,
    marginHorizontal: 5,
    minHeight: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#808AFF',
    borderRadius: 20,
  },
  boxNews: {
    position: 'relative',
    display: 'flex',
    width: '46%',
    marginBottom: 10,
    marginHorizontal: 5,
    minHeight: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6CB28E',
    borderRadius: 20,
  },
  event: {
    width: 200,
    height: 200,
  },
});

export default Home;
