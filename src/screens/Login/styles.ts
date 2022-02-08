import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    paddingTop: 80
  },
  logo:{
     alignItems: 'center',
     paddingBottom: 70,
  },
  content:{
      alignItems: 'center',
      justifyContent: 'center',
  },
  recoverPassword:{
    // backgroundColor: theme.colors.secondary20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 80,
  },
  titleRecover: {
    fontSize: 14,
    color: theme.colors.highlight,
    paddingHorizontal: 4,
    fontFamily: theme.fonts.Regular400
  },
  linkRecover:{
    fontSize:14,
    fontWeight: 'bold',
    color: theme.colors.highlight,
    fontFamily: theme.fonts.Regular400
  },
  button:{
     alignItems: 'center',
     marginTop: 25,
  },
  public:{
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30
  },
  imagePublic:{
    width: 25.48,
    height: 18,
    marginRight: 9.5
  },
  titlePublic: {
    fontSize: 14,
    // fontWeight: 'medium',
    color: theme.colors.highlight,
    fontWeight: 'bold',
    fontFamily: theme.fonts.Regular400
  }
  
});