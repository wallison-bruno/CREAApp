import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  viewButton:{
    flex: 1,
    alignItems: 'center',
  },
  buttonImage:{
    backgroundColor: theme.colors.radiored,
    width:346,
    height: 48,
    borderRadius: 4,
    marginTop: 10,
    marginBottom: 16,
    elevation: 3,
    justifyContent: 'center',
  },
  info:{
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 25,
    paddingBottom: 12
  },
  infotitle:{
    fontSize: 14,
    fontFamily: theme.fonts.Bold700,
    color: '#717171',
    paddingLeft: 10
  },
  infotext:{
    fontSize: 12,
    fontFamily: theme.fonts.Medium500,
    color: '#717171',
    paddingHorizontal: 16
  },
  conteudo:{
    width: 346,
    height: 98,
    backgroundColor: theme.colors.milk,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    marginBottom: 8,
    alignSelf: 'center',
    borderRadius: 4
  }
});