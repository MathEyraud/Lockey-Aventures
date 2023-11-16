import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { styles } from './style'
import TextCustom from '../Text/TextCustom'
import TextTitleCustom from '../Text/TextTitleCustom'


 const ContainerData = ({
    title,
    data,
    styleContainer,
    styleContainerData,
  })=> {

  return (

    <View style={[styles.container, styleContainer]}>

      <TextCustom style={[styles.labelTitle]}>{title}</TextCustom>

      <View style={[styles.containerData,styleContainerData]}>

        <TextCustom>{data}</TextCustom>

      </View>

  </View>


  )
}

export default ContainerData
