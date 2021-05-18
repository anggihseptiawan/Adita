import React, {useEffect} from 'react';
import {Container} from '../components/Container';
import {View, Image, StyleSheet, Text} from 'react-native';
import {Adita} from '../assets';
import {BoldText, NormalText, Gap} from '../components/Index';

const Splash = ({navigation}: any) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 4000);
  }, []);

  return (
    <Container>
      <View style={styles.wrapper}>
        <Image source={Adita} style={styles.image} />
        <BoldText fs={18}>Halloo, Selamat Datang.. 👋</BoldText>
        <Gap mb={4} />
        <NormalText fs={15} align="center">
          Update Info Lebih Mudah Dengan Chatbot Assistant Pradita University
        </NormalText>
        <Text style={styles.footer}>Powered By Adita</Text>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  image: {
    width: 150,
    height: 150,
  },
  footer: {
    fontFamily: 'DMSans-Regular',
    fontWeight: '600',
    position: 'absolute',
    bottom: -25,
  },
});

export default Splash;
