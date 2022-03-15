import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  title:{
    fontSize: RFValue(16),
    fontFamily: theme.fonts.Bold700
  }
});