import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    maxWidth:310,
    maxHeight: 145,
    borderRadius: 4,
    marginTop: 8,
    marginRight: 18,
    elevation: 1,
    justifyContent: 'flex-end',
  },
  titleBackground:{
    backgroundColor: 'black',
    opacity: 0.70
  },
  title:{
    fontSize: 14,
    color: theme.colors.milk,
    fontFamily: theme.fonts.Regular400,
    paddingHorizontal: 15,
    paddingVertical: 16,
    textAlign: 'justify',
  },
  img:{
    justifyContent: 'center',
    textAlign: 'center',
    ...StyleSheet.absoluteFillObject,
  }
});