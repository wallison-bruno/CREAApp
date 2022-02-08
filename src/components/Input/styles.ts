import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  input:{
    width: 302,
    height: 56,
    borderWidth: 2,
    borderRadius: 4,
    borderColor: theme.colors.secondary10,
    color: theme.colors.highgray,
    backgroundColor: theme.colors.primary,
    fontFamily: theme.fonts.Regular400,
    fontSize: 16,
    paddingLeft: 16,
    elevation: 3,
  }
});