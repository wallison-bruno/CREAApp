import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 48,
    backgroundColor: theme.colors.secondary30,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  title:{
    flex: 1,
    fontSize: 16,
    fontFamily: theme.fonts.SemiBold600,
    color: theme.colors.milk,
    textAlign: 'center',
    marginRight: 40
  },
  iconWrapper:{
    maxWidth: 40,
    maxHeight: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon:{
      width: 40,
      height: 40,
      marginTop: 18,
      marginLeft: 14
  }
});