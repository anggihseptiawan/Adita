import React from 'react';
import {View} from 'react-native';

type GapProps = {
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
};

export const Gap = ({mt, mb, ml, mr}: GapProps) => {
  return (
    <View
      style={{
        marginTop: mt,
        marginBottom: mb,
        marginRight: mr,
        marginLeft: ml,
      }}></View>
  );
};
