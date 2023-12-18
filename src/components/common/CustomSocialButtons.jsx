import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { Button } from 'react-native-elements';


const CustomSocialButtons = ({facebookIcon, googleIcon}) => {
    return (
      <View>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={facebookIcon} style={styles.icon} />
          <Text style={styles.socialText}>Facebook</Text>
        </TouchableOpacity>
  
        <TouchableOpacity style={styles.socialButton}>
          <Image source={googleIcon} style={styles.icon} />
          <Text style={styles.socialText}>Google</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  export default CustomSocialButtons;
  
  // Define los estilos adecuados en la variable 'styles'
  const styles = {
    socialButton: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#99D2F5', // Color de fondo de Facebook
      padding: 8,
      borderRadius: 60,
      marginVertical: 10,
    },
    icon: {
      width: 25, // Ancho de la imagen
      height: 25, // Alto de la imagen
      marginRight: 10, // Espaciado entre la imagen y el texto
    },
    socialText: {
      color: 'black', // Color del texto
      fontSize: 17, // Tamaño del texto
    },
  };
  