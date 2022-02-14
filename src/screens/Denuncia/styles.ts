import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.highlight,
    alignItems: 'center',
  },
  data:{
    borderRadius: 4,
    width: 342,
    backgroundColor: theme.colors.milk,
    paddingHorizontal: 16,
    marginTop: 16,
  },
  viewTitleID:{
    flexDirection: 'row',
    marginTop: 16,
    marginBottom: 10,
  },
  titleID:{
    color: theme.colors.primary,
    fontFamily: theme.fonts.Bold700,
    fontSize: 14,
    paddingRight: 8,
  },
  
});