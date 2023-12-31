import { StyleSheet } from 'react-native'
import colors from '../../../theme/colors'
import borderRadius from '../../../theme/borderRadius'
import fonts from '../../../theme/fonts'
import fontSize from '../../../theme/fontSize'

export const styles = StyleSheet.create({

    containerScreen:{
        flex:1,

        backgroundColor:colors.primary,

        padding:20,
        gap:20,

        justifyContent:'center',
    },

    containerInput:{
        flex:1,

        justifyContent:'center',
        alignItems:'center',

        gap:20,
        marginTop:50,
    },

    labelTitle:{
        color:colors.white
    },

    containerVideo:{
        width:'100%',
        height:300,

        justifyContent:'center',
        alignItems:'center',

        borderRadius:borderRadius,
    },

    containerButton:{
        width:'100%',
        height:50,
    },

    styleLabelButton:{
        textTransform:'uppercase', 
        color:colors.primary
    },

    styleLabelButtonNavigation:{
        color:colors.white
    },

    containerTitle:{
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
    },


})