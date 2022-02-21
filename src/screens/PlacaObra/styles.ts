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
  viewButton:{
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginBottom: 70
  },
  buttonOne:{
    backgroundColor: theme.colors.verylightgray,
    justifyContent: 'center',
    alignItems: 'center',
    width:342,
    height: 56,
    borderRadius: 4,
    marginTop: 25,
    elevation: 3,
  },
  menubar:{
    
  }
});