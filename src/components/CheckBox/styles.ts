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
  label:{
    fontSize: 14,
    color: theme.colors.highlight,
    paddingLeft: 10,
    fontFamily: theme.fonts.Regular400
  },
  checkbox:{
    justifyContent: 'center',
    alignItems: 'center'
  }
});