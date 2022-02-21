import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 42,
    flexDirection: 'row'
  },
  left:{
    flex: 1,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.milk
  },
  titleLeft:{
    fontFamily: theme.fonts.SemiBold600,
    color: theme.colors.darkgray
  },
  right:{
    flex: 1,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.milk
  },
  titleRight:{
    fontFamily: theme.fonts.SemiBold600,
    color: theme.colors.darkgray,
  }
});