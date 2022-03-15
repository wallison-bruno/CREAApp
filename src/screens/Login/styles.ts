import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    paddingTop: RFValue(80),
    paddingHorizontal: RFValue(37),
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
    marginTop: RFValue(80),
  },

  titleRecover: {
    fontSize: 14,
    color: theme.colors.milk,
    paddingHorizontal: 4,
    fontFamily: theme.fonts.Regular400
  },

  linkRecover:{
    fontSize:14,
    fontWeight: 'bold',
    color: theme.colors.milk,
    fontFamily: theme.fonts.Regular400
  },

  enter:{
    width: '100%',
  },

  buttonEnter:{
    backgroundColor: theme.colors.secondary20,

    borderRadius: 4,

    marginTop: 25,
    paddingVertical: RFValue(19),

    alignItems: 'center',
    
    elevation: 3,
  },

  public:{
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: RFValue(30)
  },

  imagePublic:{
    width: 25.48,
    height: 18,
    marginRight: 9.5
  },

  titlePublic: {
    fontSize: 14,
    // fontWeight: 'medium',
    color: theme.colors.milk,
    fontWeight: 'bold',
    fontFamily: theme.fonts.Regular400
  }
  
});