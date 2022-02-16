import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  title:{
    height: 20,
    textAlign: 'left',
    paddingTop: 3,
    marginBottom: 4,
    fontSize: 10,
    color: theme.colors.darkgray,
    fontFamily: theme.fonts.SemiBold600,
  },
  viewInput:{
    width: 310,
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
    paddingLeft: 7,
  },
  buttonRight:{
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    width: 243,
    height: 48,
    fontFamily: theme.fonts.Medium500,
    fontSize: 14,
    paddingLeft: 5
  },
});