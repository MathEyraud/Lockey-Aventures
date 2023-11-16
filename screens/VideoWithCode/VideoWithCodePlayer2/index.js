import { View, BackHandler, Alert }             from 'react-native'
import React, { useEffect, useRef, useState }   from 'react'
import { SafeAreaView }                         from 'react-native-safe-area-context';
import { Video, ResizeMode }                    from 'expo-av'

import { styles } from './style';

export default function VideoWithCodePlayer2({navigation, route}) {

    // ------------------------------------------- //
    // ---------- GESTION DES VARIABLES ---------- //
    // ------------------------------------------- //
    const [userVideoUrl ,setUserVideoUrl] = useState(route.params.userVideoUrl)
    const [status       ,setStatus      ] = useState({});
    const video = useRef(null);
    //
    //
    //
    //
    //
    // --------------------------------------------------- //
    // ---------- DEMARRER LA VIDEO DIRECTEMENT ---------- //
    // --------------------------------------------------- //
    useEffect(() => {
        video.current.playAsync()
    }, [])
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

            <View style={styles.containerVideo}>

                <Video
                    ref={video}
                    style={{height:'100%',width:'100%',borderRadius:10}}
                    source={{
                        uri: userVideoUrl,
                    }}
                    useNativeControls
                    resizeMode={ResizeMode.COVER}
                    isLooping
                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                />
                
            </View>

        </SafeAreaView>
    )
};

