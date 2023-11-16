import { View, BackHandler, Alert }                    from 'react-native'
import React, { useEffect, useRef, useState }   from 'react'
import { SafeAreaView }                         from 'react-native-safe-area-context';

import { styles }       from './style';
import colors           from '../../../theme/colors';
import ButtonCustom     from '../../../components/ButtonCustom';
import InputText        from '../../../components/InputText';
import TextTitleCustom  from '../../../components/Text/TextTitleCustom';

export default function VideoWithCodePlayer1({navigation, route}) {
    
    console.log("navigation",navigation);

    // ------------------------------------------- //
    // ---------- GESTION DES VARIABLES ---------- //
    // ------------------------------------------- //
    const [userVideoUrl,setUserVideoUrl ] = useState(route.params.userVideoUrl)
    const [truePassword,setTruePassword ] = useState(route.params.userPassword)
    const [userPassword,setUserPassword ] = useState("")
    const [error       ,setError        ] = useState(null)

    const handlePasswordChange = (newPassword) => {
        setUserPassword(newPassword)
        setError(false)
    };
    //
    //
    //
    //
    //
    // ----------------------------------------------------- //
    // ---------- GESTION DES DONNEES UTILISATEUR ---------- //
    // ----------------------------------------------------- //
    const handleValidatePassword = async () => {    

        console.log("handleNavigateToVideoWithCode",);

        if (userPassword === truePassword) {
            navigation.replace('VideoWithCodePlayer2')
            navigation.replace('VideoWithCodePlayer2', {userVideoUrl})

        } else {
            setError("Aie, ce n'est pas le bon mot de passe !")
        }
    };
    //
    //
    //
    //
    //
    // --------------------------------------------------------------------- //
    //                          GESTION EN CAS DE RETOUR                     //
    // --------------------------------------------------------------------- //
    useEffect(() => {

        const handleHardwareBackButton = () => {
            // Empêche le retour en arrière physique
            // Affiche un message d'erreur
            Alert.alert(
                'VOUS NE POUVEZ PAS QUITTER CETTE APPLICATION !',
                '',
                [
                  { text: 'Annuler', style: 'cancel', onPress: () => {} },
                ],
              );

            // Empêche le retour en arrière physique
            return true;
        };
    
        // Ajoute un écouteur pour le bouton de retour physique
        BackHandler.addEventListener('hardwareBackPress', handleHardwareBackButton);
    
        // Supprime l'écouteur lorsque le composant est démonté
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', handleHardwareBackButton);
        };

    }, []);
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

            <View style={styles.containerTitle}>
                <TextTitleCustom style={styles.labelTitle}>
                    Merci de saisir le mot de passe
                </TextTitleCustom>
            </View>

            <View>

                <InputText
                    onChangeText={handlePasswordChange}
                    placeholder="Renseignez le mot de passe"
                    password={true}
                    error={error}
                />

            </View>

            <View style={styles.containerButton}>

                <ButtonCustom
                    title="Valider"
                    buttonEnabled={true}
                    colorButton={colors.white}
                    onPress={handleValidatePassword}
                    stylesLabel={styles.styleLabelButton}
                />

            </View>

        </SafeAreaView>
    )
};

