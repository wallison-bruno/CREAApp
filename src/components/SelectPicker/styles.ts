import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
    container:{
      
    },
    title:{
      fontFamily: theme.fonts.SemiBold600,
      fontSize: 10,
      color: theme.colors.darkgray,
      paddingBottom: 4,
    },
    viewPicker:{
      borderWidth: 1,
      borderRadius: 4,
      borderColor: theme.colors.verylightgray,
      justifyContent: 'center',
      marginBottom: 12
    },
    pickerComponent: {
      width: '100%',
      height: 48,
    },
});