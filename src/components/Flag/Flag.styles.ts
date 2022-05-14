import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  flagCont: {
    overflow: 'hidden',
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flagSubCont: {
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const CUSTOM_STYLE_FOR_FLAG: Record<string, Record<string, number>> = {
  BRA: {
    marginTop: -6,
  },
  TUN: {
    marginTop: -12,
  },
};
