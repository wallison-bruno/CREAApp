import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.highlight,
    alignItems: 'center',
  },
  field:{
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
  titleDescribe:{
    fontSize: 10,
    fontFamily: theme.fonts.SemiBold600,
    paddingBottom: 4
  },
  inputDescribe:{
    width: 310, 
    height: 170,
    fontFamily: theme.fonts.Medium500,
    fontSize: 14,
    paddingLeft: 16,
    paddingRight: 16,
    color: theme.colors.darkgray,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: theme.colors.verylightgray, 
    paddingBottom: 100,
    marginBottom: 12
  },
  titleObservation:{
    fontSize: 10,
    fontFamily: theme.fonts.SemiBold600,
    paddingBottom: 4,
  },
  inputObservation:{
    width: 310, 
    height: 95,
    fontFamily: theme.fonts.Medium500,
    fontSize: 14,
    paddingLeft: 16,
    paddingRight: 16,
    color: theme.colors.darkgray,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: theme.colors.verylightgray, 
    paddingBottom: 50,
    marginBottom: 12
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
  buttonAlert:{
    backgroundColor: theme.colors.alertred,
    width:342,
    height: 56,
    borderRadius: 4,
    marginTop: 50,
    marginBottom: 48,
    elevation: 3,
    justifyContent: 'center',    
  },
  sexo:{
    fontFamily: theme.fonts.SemiBold600,
    fontSize: 10,
    color: theme.colors.darkgray
  }
});