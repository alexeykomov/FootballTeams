import { style } from './Flag.styles';
import { Image, View } from 'react-native';
import { SvgUri } from 'react-native-svg';
import React from 'react';
import { CUSTOM_STYLE_FOR_FLAG } from './Flag.styles';
import { ErrorBoundary } from '../ErrorBoundary';

interface FlagProps {
  uri: string;
  flagName: string;
}

export const Flag = ({ uri, flagName }: FlagProps) => (
  <View style={style.flagCont}>
    {uri ? (
      <ErrorBoundary>
        <View style={[style.flagSubCont, CUSTOM_STYLE_FOR_FLAG[flagName]]}>
          {uri.endsWith('.svg') ? (
            <SvgUri height="70%" width="70%" uri={uri} />
          ) : (
            <Image source={{ uri }} />
          )}
        </View>
      </ErrorBoundary>
    ) : null}
  </View>
);
