import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content:{

  },
  input:{
    alignSelf: 'center',  
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
    marginTop: 21,
    textAlign: 'center',
  },
});