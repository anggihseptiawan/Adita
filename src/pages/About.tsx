import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Container} from '../components/Container';
import {BoldText} from '../components/BoldText';
import {NormalText} from '../components/NormalText';
import {Pradita} from '../assets';
import {Gap} from '../components/Gap';

const About = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Container>
        <BoldText>ABOUT PRADITA UNIVERSITY</BoldText>
        <Image source={Pradita} style={styles.headerImage} />
        <NormalText>
          Pradita University lahir dari jaringan korporasi berbagai industri
          yang diprakarsai oleh Summarecon dan mitra bisnis korporasinya.
          Pendidikan kepada mahasiswa ditegakkan dengan fondasi budi pekerti,
          demi melahirkan generasi yang cerdas dan menjunjung tinggi moral,
          serta berorientasi pada landasan teori yang kuat dan keahlian praktis
          yang sesuai kebutuhan industri. Sehingga akan lahir talenta bangsa
          yang siap bekerja, berkarya, serta bernilai tinggi di tengah
          persaingan industri yang sengit, baik sebagai profesional maupun
          entrepreneur.
        </NormalText>
        <View>
          <Gap mt={30} />
          <BoldText>CHAIRMAN OF FOUNDATION PRADITA UNIVERSITY</BoldText>
          <Gap mb={14} />
          <View style={styles.person}>
            <Image
              source={{
                uri: 'https://www.pradita.ac.id/assets/front/images/new/founder.jpg',
              }}
              style={styles.figure}
            />
            <View style={styles.description}>
              <BoldText>SOETJIPTO NAGARIA</BoldText>
              <Gap mb={5} />
              <NormalText>
                Founder of Pradita University, President Commisioner of
                Summarecon
              </NormalText>
            </View>
          </View>
          <View style={styles.person}>
            <Image
              source={{
                uri: 'https://www.pradita.ac.id/assets/front/images/new/Pak%20Bima.jpg',
              }}
              style={styles.figure}
            />
            <View style={styles.description}>
              <BoldText>BIMA HIMAWAN RAMANTIKA</BoldText>
              <Gap mb={5} />
              <NormalText>President of Foundation</NormalText>
            </View>
          </View>
        </View>
        <View>
          <Gap mt={20} />
          <BoldText>PRADITA UNIVERSITY CAMPUS</BoldText>
          <Gap mb={8} />
          <View>
            <NormalText>Scientia Business Park Tower I</NormalText>
            <NormalText>Jl. Boulevard Gading Serpong</NormalText>
            <NormalText>Blok O/1, Summarecon Serpong</NormalText>
          </View>
        </View>
        <View>
          <Gap mt={30} />
          <BoldText>CONTACT US</BoldText>
          <Gap mb={8} />
          <View>
            <NormalText>021 5568 9999</NormalText>
            <NormalText>0815 8510 9999</NormalText>
            <NormalText>info@pradita.ac.id</NormalText>
          </View>
        </View>
      </Container>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerImage: {
    width: '100%',
    height: 200,
    borderRadius: 6,
    marginVertical: 20,
  },
  person: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  description: {
    flex: 1,
  },
  figure: {
    width: 80,
    height: 80,
    borderRadius: 15,
    marginRight: 8,
  },
  location: {
    marginTop: 30,
    marginBottom: 10,
    fontFamily: 'DMSans-Bold',
  },
});

export default About;
