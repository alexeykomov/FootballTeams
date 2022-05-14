import { style } from './Loader.styles';
import { ActivityIndicator, View } from 'react-native';
import React from 'react';

export const Loader = () => (
  <View style={style.root}>
    <ActivityIndicator />
  </View>
);
