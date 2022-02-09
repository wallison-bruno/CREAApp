import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.milk,
    width:340,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginTop: 8,
    elevation: 3
  },
  title:{
    fontSize: 14,
    color: theme.colors.darkgray,
    fontFamily: theme.fonts.SemiBold600,
  }
});