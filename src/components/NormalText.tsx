import React from 'react';
import {Text, StyleSheet} from 'react-native';

type NormalTextProps = {
  children?: string;
  fs?: number;
  align?: string;
};

interface Style {
  text: any;
}

export const NormalText = ({children, fs, align}: NormalTextProps) => {
  return <Text style={styles.text(fs, align)}>{children}</Text>;
};

const styles = StyleSheet.create<Style>({
  text: (fs: NormalTextProps, align: NormalTextProps) => ({
    fontFamily: 'DMSans-Regular',
    fontSize: fs,
    textAlign: align,
  }),
});
