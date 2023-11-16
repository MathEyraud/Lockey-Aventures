import {StyleSheet} from 'react-native';

import colors from '../../../theme/colors';
import fonts from '../../../theme/fonts';
import borderRadius from '../../../theme/borderRadius';

const styles = StyleSheet.create({

    containerHeader :{
        width:'100%',
        height:50,

        flexDirection : 'column',
        justifyContent:'center',
        alignItems: 'center',

        backgroundColor: colors.white,
        borderRadius:borderRadius.Primary,
        gap:10,

        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },

    greyBar:{
        width:'20%',
        height:'5%',

        top:1,

        backgroundColor:colors.grey,
        borderRadius:100,
    },
  
}); export default styles;