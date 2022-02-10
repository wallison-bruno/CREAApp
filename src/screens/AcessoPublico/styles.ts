import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title:{
      fontSize: 16,
      fontFamily: theme.fonts.Bold700,
      marginTop: 22,
      marginLeft: 14,
      marginBottom: 8
  },
  newstitle:{
     marginLeft: 14
  },
  plus:{
    marginBottom: 470,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 300
}, 
  titlePlus:{
    fontSize: 14,
    marginBottom: 2,
    fontFamily: theme.fonts.SemiBold600,
  },
  imgPlus:{
    marginLeft: 8,
    width: 6,
    height: 10,
  }
});