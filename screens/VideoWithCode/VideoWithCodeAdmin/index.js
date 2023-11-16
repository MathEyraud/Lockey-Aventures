import { Alert, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './style';
import { Ionicons } from '@expo/vector-icons';
import colors from '../../../theme/colors';
import ButtonCustom from '../../../components/ButtonCustom';

import TextTitleCustom from '../../../components/Text/TextTitleCustom';

import InputText from '../../../components/InputText';
import InputVideo from '../../../components/InputVideo';

export default function VideoWithCodeAdminScreen({navigation}) {

    // ------------------------------------------- //
    // ---------- GESTION DES VARIABLES ---------- //
    // ------------------------------------------- //
    const [userPassword         ,setUserPassword        ] = useState("")
    const [userPasswordConfirm  ,setUserPasswordConfirm ] = useState("")
    const [userVideoUrl         ,setUserVideoUrl        ] = useState(null)

    //
    //
    //
    //
    //
    // ----------------------------------------------------- //
    // ---------- GESTION DES DONNEES UTILISATEUR ---------- //
    // ----------------------------------------------------- //
    const handleNavigateToVideoWithCode = async () => {   

        console.log("----- handleNavigateToVideoWithCode -----",);

        if (!userVideoUrl) {
            Alert.alert("Erreur", "Merci de choisir une vidéo !")
            return
        }

        if (!userPassword) {
            Alert.alert("Erreur", "Merci de choisir un mot de passe !")
            return
        }

        if (!userPasswordConfirm) {
            Alert.alert("Erreur", "Merci de confirmer votre mot de passe !")
            return
        }

        if (userPassword !== userPasswordConfirm) {
            Alert.alert("Erreur", "Mot de passe différent !")
            return
        }

        navigation.replace('VideoWithCodePlayer1', {userPassword, userVideoUrl})
    }

    //
    //
    //
    //
    //
    // ------------------------------- //
    // ---------- AFFICHAGE ---------- //
    // ------------------------------- //
    return (
        
        <SafeAreaView style={styles.containerScreen}>

            <ScrollView>

                <View style={styles.containerData}>

                    <View>
                        <Ionicons name="link" size={50} color={colors.white} />
                    </View>


                    <View style={styles.containerTitle}>
                        <TextTitleCustom style={styles.labelTitle}>
                            Choisir une vidéo
                        </TextTitleCustom>
                    </View>

                    <View style={styles.containerVideo}>
                        <InputVideo
                            title="Choisir une vidéo"
                            setUserVideo={setUserVideoUrl}
                            iconeSize={40}
                            backgroundColor={colors.white}
                            colorIcone={colors.primary}
                        />
                    </View>
                        

                    <View style={styles.containerDataPassword}>

                        <View style={styles.containerTitle}>
                            <TextTitleCustom style={styles.labelTitle}>
                                Choisir un mot de passe
                            </TextTitleCustom>
                        </View>

                        <InputText
                            onChangeText={setUserPassword}
                            placeholder="Renseignez votre mot de passe"
                            password={true}
                        />

                        <InputText
                            onChangeText={setUserPasswordConfirm}
                            placeholder="Confirmer le mot de passe"
                            password={true}
                        />

                    </View>

                    <View style={{height:20}}></View>

                    <View style={styles.containerButton}>
                        <ButtonCustom
                            title="Valider"
                            buttonEnabled={true}
                            colorButton={colors.white}
                            onPress={handleNavigateToVideoWithCode}
                            stylesLabel={styles.styleLabelButton}
                        />
                    </View>

                </View>

            </ScrollView>

        </SafeAreaView>
    )
};

