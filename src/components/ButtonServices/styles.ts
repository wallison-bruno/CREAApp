import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  titleServices: {
    paddingBottom: 8,
    color: theme.colors.darkgray,
    fontFamily: theme.fonts.Bold700,
    fontSize: 12
  },
  content:{
    paddingBottom: 8,
    alignSelf: 'flex-start',
    flexDirection: 'row'
  },
  left:{
    marginRight: 5,
  },
  right:{
    marginLeft: 5
  },
  imageLeft:{
    borderRadius: 4
  },
  imageRight:{
    borderRadius: 4,  
  },
  titleLeft:{
    ...StyleSheet.absoluteFillObject,
    fontFamily: theme.fonts.Bold700,
    fontSize: 12,
    color: theme.colors.milk,
    marginTop: 58,
    marginLeft: 16,
  },
  titleRight:{
    ...StyleSheet.absoluteFillObject,
    fontFamily: theme.fonts.Bold700,
    fontSize: 12,
    color: theme.colors.milk,
    marginTop: 58,
    marginLeft: 16,
  },
  arrowleft:{
    ...StyleSheet.absoluteFillObject,
    marginTop: 76,
    marginLeft: 84,
  },
  arrowright:{
    ...StyleSheet.absoluteFillObject,
    marginTop: 76,
    marginLeft: 63,
  }
});