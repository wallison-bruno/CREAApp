import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    height: '100%',
  },
  title:{
    fontSize: 16,
    fontFamily: theme.fonts.Bold700,
    marginTop: 22,
    marginLeft: 14,
    marginBottom: 8
  },
  content:{
    marginLeft: 14,
    height: 270,
    minHeight: 130, 
  },
  newsCircle:{
    paddingBottom: 10,
  },
  viewButton:{
    alignItems: 'center',
    paddingBottom: 30
  },
  buttonAlert:{
    backgroundColor: theme.colors.alertred,
    width:340,
    height: 56,
    borderRadius: 4,
    marginBottom: 8,
    elevation: 3,
    justifyContent: 'center'
  },
  button:{
    backgroundColor: theme.colors.milk,
    width:340,
    height: 56,
    borderRadius: 4,
    marginTop: 8,
    elevation: 3,
    justifyContent: 'center'   
  },
  
});