import React from 'react';
import {Text, StyleSheet} from 'react-native';

type BoldTextProps = {
  children?: string;
  fs?: number;
};

interface Style {
  text: any;
}

export const BoldText = ({children, fs}: BoldTextProps) => {
  return <Text style={styles.text(fs)}>{children}</Text>;
};

const styles = StyleSheet.create<Style>({
  text: (fs: BoldTextProps) => ({
    fontFamily: 'DMSans-Bold',
    fontSize: fs,
  }),
});
