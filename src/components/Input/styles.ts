import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  input:{
    width: '100%',

    paddingVertical: RFValue(16),
    paddingHorizontal: RFValue(18),

    marginBottom: RFValue(16), 

    borderWidth: 1,
    borderRadius: 4,
    borderColor: theme.colors.secondary10,
  
    color: theme.colors.highgray,
    backgroundColor: theme.colors.primary,

    fontFamily: theme.fonts.Regular400,
    fontSize: RFValue(14),

    elevation: 3,
  }
});