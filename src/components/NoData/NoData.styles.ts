import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 50,
  },
  errorBlock: {
    padding: 20,
    borderColor: '#ddd',
    backgroundColor: '#eee',
    borderWidth: StyleSheet.hairlineWidth,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    flex: 1,
  },
  message: {
    paddingBottom: 10,
  },
  button: {
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 22,
    backgroundColor: '#777',
    padding: 10,
  },
  buttonText: {
    color: '#fff',
  },
});
