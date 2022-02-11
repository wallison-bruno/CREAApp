import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    width: 310,
  },
  title:{
    height: 20,
    textAlign: 'left',
    marginTop: 8,
    marginBottom: 4,
    fontSize: 10,
    color: theme.colors.darkgray,
    fontFamily: theme.fonts.SemiBold600,
  },
  input:{
    width: 310,
    height: 48,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: theme.colors.verylightgray,
    marginBottom: 10,
    
  },
});