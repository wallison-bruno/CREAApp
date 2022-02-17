import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 49,
    alignItems: 'center',
  },
  content:{
    width: 375,
    height: 49,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    backgroundColor: theme.colors.milk,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8   
  },
});