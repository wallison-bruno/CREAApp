import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.highlight,
  },
  navigation:{
    marginTop: 16,
    alignItems: 'center'    
  },
  buttonOne:{
    backgroundColor: theme.colors.milk,
    width:340,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginTop: 8,
    elevation: 3,
  }
});