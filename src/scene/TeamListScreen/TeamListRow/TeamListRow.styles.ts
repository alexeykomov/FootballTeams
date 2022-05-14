import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    minHeight: 100,
    backgroundColor: '#fff',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ddd',
  },
  flagCont: {
    overflow: 'hidden',
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
  },
  flagSubCont: {
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleCont: {
    paddingLeft: 20,
  },
});
