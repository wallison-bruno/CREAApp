import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content:{
    flex: 1,
    alignItems: 'center'
  },
  field:{
    borderRadius: 4,
    width: 342,
    backgroundColor: theme.colors.milk,
    paddingHorizontal: 16,
    marginTop: 16,
  
  },
  viewTitle:{
    marginTop: 16,
    marginBottom: 10,
  },
  title:{
    color: theme.colors.primary,
    fontFamily: theme.fonts.Bold700,
    fontSize: 14,
    paddingRight: 8,
  },
  contentInputTop:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  contentInputBottom:{
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textInput:{
    height: 20,
    textAlign: 'left',
    paddingTop: 3,
    marginBottom: 4,
    fontSize: 10,
    color: theme.colors.darkgray,
    fontFamily: theme.fonts.SemiBold600,
  },
  input:{
    width: 149,
    height: 48,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: theme.colors.verylightgray,
    marginBottom: 12,
    padding: 10
  },
  picker:{
    width: 149,
    height: 48,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: theme.colors.verylightgray,
    justifyContent: 'center'
  },
  contentButton:{
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  contentButtonLeft:{
    borderWidth: 1,
    borderColor: '#797E92',
    borderRadius: 4,
    marginVertical: 24,
    
  },
  contentButtonRight:{
    borderWidth: 1,
    borderColor: '#F63E0D',
    borderRadius: 4,
    marginVertical: 24,
    backgroundColor: '#F63E0D'
  },

});