import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import colors       from '../../theme/colors'
import borderRadius from '../../theme/borderRadius'
import fonts        from '../../theme/fonts'
import fontSize     from '../../theme/fontSize'

export const styles = StyleSheet.create({ 

    container:{
        gap:10,
    },

    labelTitle:{
        paddingLeft:borderRadius.Input,
    },

    containerInput:{
        width:'100%',
        height:50,

        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',

        backgroundColor:colors.white,
        borderRadius:borderRadius.Input,
        paddingHorizontal:20,
        borderWidth: 1,
    },

    styleInput:{
        flex:1,
        fontFamily:fonts.PrimaryMedium,
        fontSize:fontSize.Input,
        textAlign:'center',
        color:colors.primary,
    },

})