import { TouchableOpacity, View, Text } from 'react-native';
import React from 'react';
import { style } from './TeamListError.styles';

interface TeamListErrorProps {
  errorDesc: string;
  onPress: () => void;
}

export const TeamListError = ({ errorDesc, onPress }: TeamListErrorProps) => {
  return (
    <View style={style.root}>
      <View style={style.errorBlock}>
        <Text style={style.message}>Error!</Text>
        <Text style={style.message}>{errorDesc}</Text>
        <TouchableOpacity onPress={onPress} style={style.button}>
          <Text style={style.buttonText}>Try again</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
