import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.highgray,
    width: 10,
    height: 10,
    borderRadius: 5,
    marginLeft: 3
  },
  containerBlack:{
    backgroundColor: 'black',
    width: 10,
    height: 10,
    borderRadius: 5,
    marginLeft: 3
  }
});