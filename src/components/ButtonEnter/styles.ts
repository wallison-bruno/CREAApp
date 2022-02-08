import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.secondary20,
    width:302,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4
  },
  title:{
    fontSize: 16,
    fontWeight: 'bold',
    color: theme.colors.primary,
    fontFamily: theme.fonts.Bold700
  }
});