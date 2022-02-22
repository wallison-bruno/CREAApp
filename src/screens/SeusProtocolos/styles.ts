import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content:{
    flex: 1,
  },
  gratters:{ 
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 180
  },
  textOne:{
    color: theme.colors.screengray,
    fontFamily: theme.fonts.SemiBold600,
    fontSize: 16,
    marginTop: 21
  },
  textTwo:{
    color: theme.colors.screengray,
    fontFamily: theme.fonts.Regular400,
    fontSize: 14,
    textAlign: 'center',
    marginTop: 4
  },
  input:{
      alignSelf: 'center',  
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