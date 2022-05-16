import { TouchableOpacity, View, Text } from 'react-native';
import React from 'react';
import { style } from './NoData.styles';

interface NoDataProps {
  desc: string;
  onPress: () => void;
}

export const NoData = ({ onPress, desc }: NoDataProps) => {
  return (
    <View style={style.root}>
      <View style={style.errorBlock}>
        <Text style={style.message}>{desc}</Text>
        <TouchableOpacity onPress={onPress} style={style.button}>
          <Text style={style.buttonText}>Try again</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
