import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    width: 302,
    height: 56,
  },
  selection:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  title1:{
    fontSize: 14,
    color: theme.colors.darkgray,
    paddingLeft: 8,
    paddingRight: 24,
    fontFamily: theme.fonts.Medium500
  },
  title2:{
    fontSize: 14,
    color: theme.colors.darkgray,
    paddingLeft: 8,
    paddingRight: 24,
    fontFamily: theme.fonts.Medium500
  },
});