import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title:{
      fontSize: 16,
      fontFamily: theme.fonts.Bold700,
      marginTop: 22,
      marginLeft: 14,
      marginBottom: 8
  }
});