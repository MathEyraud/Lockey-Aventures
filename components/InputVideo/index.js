import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Image, Pressable, Button  } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';
import { Video, ResizeMode } from 'expo-av'

import styles from './style';
import colors from '../../theme/colors';
import TextTitleCustom from '../Text/TextTitleCustom';
import ButtonCustom from '../ButtonCustom';

/* {"assets": [{
    "assetId": null, 
    "base64": null, 
    "duration": null, 
    "exif": null, 
    "height": 648, 
    "rotation": null, 
    "type": "image", 
    "uri": "file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540eyraudmathieu%252Fprofessional-portfolio/ImagePicker/a25508cb-ba7b-432e-9d41-2653350e3d68.png", 
    "width": 864}], 
    "canceled": false, 
    "cancelled": false} 
*/

const InputVideo = ({ 
  title,  
  setUserVideo, 
  iconeSize,
  backgroundColor,
  colorIcone,
  }) => {

  const [selectedVideoUrl, setSelectedVideoUrl] = useState(null);
  const video = useRef(null);
  const [status, setStatus] = useState({});

  // --------------------------------------------------------------------- //
  //                     GESTIONS DE L'AJOUT DE LA PHOTO                   //
  // --------------------------------------------------------------------- //
  const handleVideoSelect = async () => {

    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Videos,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
    }); console.log("result",result);

    if (!result.canceled) {
      setSelectedVideoUrl(result.assets[0].uri)
      setUserVideo(result.assets[0].uri);
    }
  };
  //
  //
  //
  //
  //
  // --------------------------------------------------------------------- //
  //                 FONCTION DE SUPPRESSION DE LA PHOTO                   //
  // --------------------------------------------------------------------- //
  const handleDeleteVideo = async () => {
    setSelectedVideoUrl(null);
  };
  //
  //
  //
  //
  //
  // --------------------------------------------------------------------- //
  //                                 AFFICHAGE                             //
  // --------------------------------------------------------------------- //
  return (

    <View style={styles.container}>
      <Pressable 
        style={({pressed}) => [
          {backgroundColor: pressed ? backgroundColor + 'A0'  : backgroundColor},
          styles.containerVideo,
        ]}
        onPress={handleVideoSelect}
      >

        {selectedVideoUrl ? (
          <>
            <View style={styles.containerIconeBin}>

              <TouchableOpacity style={styles.iconeBin} onPress={() => handleDeleteVideo()}>
                <Ionicons name="close" size={iconeSize} color={colors.warning} />
              </TouchableOpacity>

            </View>
            
            <Video
              ref={video}
              style={styles.video}
              source={{
                uri: selectedVideoUrl,
              }}
              useNativeControls
              resizeMode={ResizeMode.CONTAIN}
              isLooping
              onPlaybackStatusUpdate={status => setStatus(() => status)}
            />

          </>
          
          ) : (

          <>
            <Ionicons name="videocam" size={iconeSize} color={colorIcone} />
            <TextTitleCustom style={[styles.labelTitle,{color:colorIcone}]}>{title}</TextTitleCustom>
          </>
        )}
      </Pressable>

      {selectedVideoUrl ? (
        <View style={styles.containerButtons}>

          <View style={styles.containerButton}>

            <ButtonCustom
              title="Play"
              buttonEnabled={true}
              colorButton={colors.success}
              onPress={() => video.current.playAsync()}
            />

          </View>

          <View style={styles.containerButton}>

            <ButtonCustom
              title="Pause"
              buttonEnabled={true}
              colorButton={colors.warning}
              onPress={() => video.current.pauseAsync()}
            />

          </View>

        </View>
        ):null
      }

    </View>
  );
};

export default InputVideo;
