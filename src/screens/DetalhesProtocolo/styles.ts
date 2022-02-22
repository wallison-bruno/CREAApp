import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content:{

  },
  viewButton:{
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 22
  },
  button:{
    backgroundColor: theme.colors.secondary20,
    justifyContent: 'center',
    alignItems: 'center',
    width:346,
    height: 56,
    borderRadius: 4,
    marginTop: 10,
    elevation: 3,
  },
  conteudo:{
    width: 346,
    height: 128,
    backgroundColor: theme.colors.milk,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    marginBottom: 5,
    alignSelf: 'center',
    borderRadius: 4
  }
});