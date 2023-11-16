import { StyleSheet } from 'react-native'
import colors from '../../../theme/colors'
import borderRadius from '../../../theme/borderRadius'
import fonts from '../../../theme/fonts'
import fontSize from '../../../theme/fontSize'

export const styles = StyleSheet.create({

    containerScreen:{
        flex:1,
        width:'100%',
        height:'100%',
        backgroundColor:colors.primary,
        paddingHorizontal:20,
    },

    containerData:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',

        flex:1,
        width:'100%',
        height:'100%',

        gap:20,
    },

    containerDataPassword:{
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        gap:10,
    },

    containerInput:{
        flex:1,

        justifyContent:'center',
        alignItems:'center',

        gap:20,
    },

    // ----------------- //
    // ----- TITLE ----- //
    // ----------------- //
    containerTitle:{
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
    },

    labelTitle:{
        color:colors.white
    },

    containerVideo:{
        width:'100%',
        height:300,
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


})