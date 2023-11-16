import React from 'react';
import { View, Text, Pressable, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './style';
import TextTitleCustom from '../../Text/TextTitleCustom';
import TextCustom from '../../Text/TextCustom';


const HeaderModal = ({
    title,
    }) => {

    const navigation = useNavigation();
      
    return ( 

        <View style={styles.containerHeader}>

            <View style={styles.greyBar}></View>
            <TextCustom>{title}</TextCustom>
                
        </View>
        
    )
};

export default HeaderModal;
