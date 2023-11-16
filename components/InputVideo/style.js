import { StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import borderRadius from '../../theme/borderRadius';

const styles = StyleSheet.create({

  container: {
    height:'100%',
    width:'100%',

    justifyContent:'center',
    alignItems:'center',
    
    borderRadius:borderRadius.Input,
    gap:16,
  },

  // ----------------- //

  containerVideo: {

    flex:1,
    width:'100%',

    justifyContent:'center',
    alignItems:'center',
    
    borderRadius:borderRadius.Input,
    backgroundColor:colors.white,
  },

  containerButtons: {
    flexDirection:'row',

    width:'100%',
    gap:16,

    justifyContent:'center',
    alignItems:'center',
  },

  containerButton: {
    flex:1,
    height:50,
  },

  // ----------------- //

  labelTitle: {
    fontSize: 20,
    textAlign:'center',
  },

  video: {
    position:'absolute',
    width: '100%',
    height:'100%', 
    flex:1,
    borderRadius:borderRadius.Primary,
    zIndex:1,
  },

  containerIconeBin:{
    position:'absolute',
    justifyContent:'flex-end',
    flex:1,
    height:'100%',
    width:"100%",
    zIndex:2,
    flexDirection:'row',
  },

  iconeBin:{
    right:16,
    top:16,
  },

});

export default styles;
