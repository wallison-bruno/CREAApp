import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height:'100%',
    borderRadius: 4,
    justifyContent: 'center'
  },
  content:{
    flexDirection: 'row',
    justifyContent: 'center',   
  },
  viewTitle:{
    justifyContent: 'center',
    width: 260,
  },
  title:{
    paddingLeft: 27
  },
  viewIconOne:{
    width: 30,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }, 
  ViewIconTwo:{
    width: 35,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconOne:{
    // marginLeft: 19,
    // marginRight:27,    
  },
  iconTwo:{
    // marginTop: 4,
    // marginLeft: 180,   
  }
});