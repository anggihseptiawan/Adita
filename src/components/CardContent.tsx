import React from 'react';
import {Image, StyleSheet, TouchableNativeFeedback, View} from 'react-native';
import {BoldText} from './BoldText';
import {Gap} from './Gap';
import {NormalText} from './NormalText';

type CardContentProps = {
  title?: string;
  time?: string;
  url?: string;
  handlePress?: any;
};

export const CardContent = ({
  title,
  time,
  url,
  handlePress,
}: CardContentProps) => {
  return (
    <TouchableNativeFeedback onPress={handlePress}>
      <View style={styles.event}>
        <Image
          style={styles.poster}
          source={{
            uri: url,
          }}
        />
        <View style={styles.description}>
          <BoldText>{title}</BoldText>
          <Gap mt={10} />
          <NormalText fs={12}>{time}</NormalText>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  event: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  poster: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 10,
  },
  description: {
    flex: 1,
    flexDirection: 'column',
  },
  time: {
    fontSize: 10,
    marginTop: 8,
  },
});
