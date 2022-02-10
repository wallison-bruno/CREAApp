import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 16,
  }, 
  barPlus:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  circle:{
    flexDirection: 'row',
    alignItems: 'center', 
    marginLeft: 16
  },
  plus:{
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 70
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