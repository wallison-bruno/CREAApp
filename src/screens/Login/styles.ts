import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary
  },
  logo:{
     alignItems: 'center',
     paddingVertical: 70,
  },
  content:{
      alignItems: 'center',
      justifyContent: 'center',
  },
  checkbox:{
    alignItems: 'center',
    justifyContent: 'center'
  }
});