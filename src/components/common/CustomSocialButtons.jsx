import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { Button } from 'react-native-elements';


const CustomSocialButtons = () => {
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
      backgroundColor: '#3b5998', // Color de fondo de Facebook
      padding: 10,
      borderRadius: 5,
      marginVertical: 10,
    },
    icon: {
      width: 24, // Ancho de la imagen
      height: 24, // Alto de la imagen
      marginRight: 10, // Espaciado entre la imagen y el texto
    },
    socialText: {
      color: '#fff', // Color del texto
      fontSize: 16, // Tamaño del texto
    },
  };
  