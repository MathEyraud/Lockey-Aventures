import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../theme/colors'
import borderRadius from '../../theme/borderRadius'

export const styles = StyleSheet.create({

    container:{
        flexDirection:'column',
        gap:10,
    },  

    labelTitle:{
        paddingLeft:borderRadius.Primary,
        fontSize : 25,
    },

    containerData:{
        height:50,

        justifyContent:'center',
        alignItems:'center',

        backgroundColor:colors.white,
        borderRadius : borderRadius.Input,

        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },

})