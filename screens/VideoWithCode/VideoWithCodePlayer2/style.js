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

        justifyContent:'center',
        alignItems:'center',

        backgroundColor:colors.primary,
        padding:20,
        gap:20,
    },

    containerVideo:{
        width:'100%',
        height:'100%',

        justifyContent:'center',
        alignItems:'center',

        borderRadius:borderRadius,
    },
})