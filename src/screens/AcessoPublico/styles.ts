import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center'
  },
  title:{
      fontSize: 16,
      fontFamily: theme.fonts.Bold700,
      marginTop: 15,
      marginLeft: 14,
      marginBottom: 8
  },
  content:{
     marginLeft: 14
  },
  newsCircle:{
      paddingBottom: 10
  },
  viewButton:{
    alignItems: 'center',
  },
  buttonAlert:{
    backgroundColor: theme.colors.alertred,
    width:350,
    height: 56,
    borderRadius: 4,
    marginBottom: 8,
    elevation: 3,
    justifyContent: 'center'
  },
  buttonOne:{
    backgroundColor: theme.colors.milk,
    width:350,
    height: 56,
    borderRadius: 4,
    marginTop: 8,
    elevation: 3,
    justifyContent: 'center'   
  }
});