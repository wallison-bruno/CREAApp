import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content:{
    alignItems: 'center',
    marginTop: 25,
    flex: 1,
  },
  viewButtonTop:{
    flexDirection: 'row',
    marginLeft: 7
  },
  viewButtonBottom:{
    flexDirection: 'row',
    marginLeft: 7  
},
  button:{
    width: 168,
    height: 79,
    backgroundColor: theme.colors.milk,
    borderRadius: 4,
    marginTop: 8,
    elevation: 3,
    justifyContent: 'center',
    marginRight: 11
  },
});