import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'

import { Ionicons } from '@expo/vector-icons';
import { styles } from './style'
import colors from '../../theme/colors';
import TextTitleCustom from '../Text/TextTitleCustom';
import TextCustom from '../Text/TextCustom';

const InputText = ({
    title,
    onChangeText,
    password,
    placeholder,
    styleContainer,
    styleInput,
    editable,
    error,
    ...props
    }) => {

    const [hidePassword, setHidePassword] = useState(password);
    const [isFocused, setIsFocused] = useState(false);

    const inputContainerStyle = [
        styles.containerInput,
        {
          borderColor: error
            ? colors.fail
            : colors.primary
        },
    ];

    const errorText = error ? <TextCustom style={{color: colors.fail}}> {error} </TextCustom> : null;

    return (

        <View style={styles.container}>

            {title && <TextCustom style={styles.labelTitle}>{title} :</TextCustom>}
        
            <View style={inputContainerStyle}>

                <TextInput
                    style={{...styles.styleInput,...styleInput}}
                    onChangeText={onChangeText}
                    secureTextEntry={hidePassword}
                    placeholder={placeholder}
                    editable={editable}
                    {...props}
                />

                {password && (
                    <Ionicons
                        name={hidePassword ? "ios-eye" : "ios-eye-off"}
                        size={24}
                        color={error ? colors.fail : colors.primary}
                        onPress={() => setHidePassword(!hidePassword)}
                    />
                )}

            </View>

            {errorText}

        </View>

    )
} 
export default InputText;