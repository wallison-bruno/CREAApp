import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input:{
    width: 302,
    height: 56,
    borderWidth: 2,
    borderColor: theme.colors.secondary10,
    borderRadius: 4,
    backgroundColor: theme.colors.primary,
    paddingLeft: 16,
    fontSize: 16,
    elevation: 3,
    color: theme.colors.labelgray
  }
});