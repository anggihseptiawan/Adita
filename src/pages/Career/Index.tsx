import React, { useEffect, useState } from 'react';
import {View, StyleSheet, Image, TouchableNativeFeedback} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Container} from '../../components/Container';
import {Arrow} from '../../assets';
import {BoldText} from '../../components/BoldText';
import {NormalText} from '../../components/NormalText';
import {Gap} from '../../components/Gap';

interface CareerProps {
  id_career: number,
  title: string,
  qualification: string,
  description: string,
  duedate: string,
  createdAt: string,
  updatedAt: string
} 

const Career = ({navigation}: any) => {
  const [careers, setCareers] = useState<CareerProps[]>([] as CareerProps[])

  useEffect(() => { 
    fetch('https://ffb1eebfba46.ngrok.io/api/career')
    .then(res => res.json())
    .then(({data}) => setCareers(data))
  }, [])

  return (
    <ScrollView style={styles.wrapper} showsVerticalScrollIndicator={false}>
      <Container>
        <BoldText>Bergabung bersama kami!</BoldText>
        <View style={styles.imageGroup}>
          <Image
            source={{
              uri: 'https://www.pradita.ac.id/assets/front/images/new/adri.jpg',
            }}
            style={styles.image1}
          />
          <Image
            source={{
              uri: 'https://www.pradita.ac.id/assets/front/images/new/Pak%20Herman.jpg',
            }}
            style={styles.image2}
          />
          <Image
            source={{
              uri: 'https://www.pradita.ac.id/assets/front/images/new/marc.jpg',
            }}
            style={styles.image3}
          />
          <Image
            source={{
              uri: 'https://www.pradita.ac.id/assets/front/images/new/Ibu%20Thresia%20Mareta.jpg',
            }}
            style={styles.image4}
          />
          <Image
            source={{
              uri: 'https://www.pradita.ac.id/assets/front/images/new/Pak%20Tono%20Raharja.jpg',
            }}
            style={styles.image5}
          />
          <View style={styles.you}>
            <BoldText>You ?</BoldText>
          </View>
        </View>
        <Gap mb={10} />
        {
          careers.map(career => {
            return(
              <TouchableNativeFeedback
                onPress={() => navigation.navigate('CareerDetail', {id_career: career.id_career})}
                key={career.id_career}
                >
                <View style={styles.card}>
                  <View>
                    <BoldText>{career?.title}</BoldText>
                    <Gap mt={4} />
                    <NormalText fs={11}>{new Date(career?.createdAt).toDateString()}</NormalText>
                  </View>
                  <Image style={styles.image} source={Arrow} />
                </View>
              </TouchableNativeFeedback>
            )
          })
        }

      </Container>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    minHeight: '100%',
  },
  headerTitle: {
    marginBottom: 20,
  },
  card: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 6,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  job: {
    fontWeight: '700',
    marginBottom: 5,
  },
  time: {
    fontSize: 10,
  },
  imageGroup: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 20,
  },
  image: {
    width: 20,
    height: 14,
  },
  image1: {
    position: 'relative',
    width: 60,
    height: 60,
    borderRadius: 50,
    borderColor: '#FA6E5A',
    borderWidth: 2,
  },
  image2: {
    position: 'relative',
    zIndex: -1,
    left: -10,
    width: 60,
    height: 60,
    borderRadius: 50,
    borderColor: '#FA6E5A',
    borderWidth: 2,
  },
  image3: {
    position: 'relative',
    zIndex: -2,
    left: -20,
    width: 60,
    height: 60,
    borderRadius: 50,
    borderColor: '#FA6E5A',
    borderWidth: 2,
  },
  image4: {
    position: 'relative',
    zIndex: -3,
    left: -30,
    width: 60,
    height: 60,
    borderRadius: 50,
    borderColor: '#FA6E5A',
    borderWidth: 2,
  },
  image5: {
    position: 'relative',
    zIndex: -4,
    left: -40,
    width: 60,
    height: 60,
    borderRadius: 50,
    borderColor: '#FA6E5A',
    borderWidth: 2,
  },
  you: {
    position: 'relative',
    zIndex: -5,
    left: -50,
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: '#FA6E5A',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Career;
