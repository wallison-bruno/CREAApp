import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  title:{
    // backgroundColor: 'red'
    fontSize: 10,
    paddingBottom: 4,
    fontFamily: theme.fonts.SemiBold600,
    color: theme.colors.darkgray
  },
  textOption:{
    paddingLeft: 16,
    alignItems: 'center',
    fontSize: 14,
    fontFamily: theme.fonts.SemiBold600
  },
  touchableOpacity:{
      width: 310,
      height: 48,
      justifyContent: 'space-between',
      alignItems: 'center',
      borderWidth: 1,
      borderRadius: 4,
      borderColor: '#C7C7C7',
      backgroundColor: 'white',
      flexDirection: 'row',
      paddingRight: 16,
      marginBottom: 12
  }
});