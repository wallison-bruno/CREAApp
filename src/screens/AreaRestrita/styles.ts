import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.highlight
  },
  content:{
    alignItems: 'center'
  },
  viewInput: {
    width: 345,
  },
  titleInput:{
    height: 20,
    textAlign: 'left',
    paddingTop: 3,
    marginBottom: 4,
    fontSize: 10,
    color: theme.colors.darkgray,
    fontFamily: theme.fonts.SemiBold600,
  },
  InputButtons:{
    width: 345,
    height: 48,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: theme.colors.verylightgray,
    alignItems: 'center',
    marginBottom: 11, 
  },
  buttonLeft:{
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  buttonRight:{
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    marginLeft: 20
  },
  input:{
    width: 243,
    height: 48,
    fontFamily: theme.fonts.Medium500,
    fontSize: 14,
    paddingLeft: 5
  },
  services:{
    
  },
  viewPlus:{
    alignSelf: 'flex-start',
    marginLeft: 23,
    marginTop: 32 
  },
  titlePlus:{
    fontFamily: theme.fonts.Bold700,
    fontSize: 12,
    color: theme.colors.darkgray,
  },
  button:{
    width:346,
    height: 56,
    justifyContent: 'center',
  },
  menubar:{
    width: '100%',
    marginTop: '50%'
  }
});