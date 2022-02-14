import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    maxWidth: 302,
    maxHeight: 145,
    marginTop: 8,
    marginRight: 13,
    marginLeft: 5,
    elevation: 2,
    justifyContent: 'flex-end',
  },
  titleBackground:{
    backgroundColor: theme.colors.darkgray,
    opacity: 0.70,
    width: 302,
    height: 70,
    borderRadius: 5,
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
    //faz o texto sobrepor
    ...StyleSheet.absoluteFillObject,
    width: 302,
    height: 145,
    borderRadius: 5
  }
});