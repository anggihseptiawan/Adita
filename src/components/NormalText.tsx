import React from 'react';
import {Text, StyleSheet} from 'react-native';

type NormalTextProps = {
  children?: string;
  fs?: number;
};

interface Style {
  text: any;
}

export const NormalText = ({children, fs}: NormalTextProps) => {
  return <Text style={styles.text(fs)}>{children}</Text>;
};

const styles = StyleSheet.create<Style>({
  text: (fs: NormalTextProps) => ({
    fontFamily: 'DMSans-Regular',
    fontSize: fs,
  }),
});
