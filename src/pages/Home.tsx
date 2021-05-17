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
          <View style={styles.box}>
            <Text>Interaktif Chat</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={() => navigation.navigate('Events')}>
          <View style={styles.box}>
            <Text>Events</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={() => navigation.navigate('News')}>
          <View style={styles.box}>
            <Text>News</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={() => navigation.navigate('About')}>
          <View style={styles.box}>
            <Text>About</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={() => navigation.navigate('Career')}>
          <View style={styles.box}>
            <Text>Career</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#eaeaf6',
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
    paddingVertical: 30,
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  box: {
    display: 'flex',
    width: '100%',
    marginBottom: 10,
    minHeight: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eaeaf6',
    borderRadius: 8,
  },
  event: {
    width: 200,
    height: 200,
  },
});

export default Home;
