import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const CustomFileInput = ({ icon, title }) => {
  const [fileUri, setFileUri] = useState('');

  const handleSelectFile = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: response.uri };
        setFileUri(source.uri);
      }
    });
  };

  return (
    <View style={styles.inputFieldContainer}>
      <View style={styles.row}>
        {icon && <Image source={icon} style={styles.icon} />}
        <Text style={styles.inputTitle}>{title}</Text>
      </View>
      <TouchableOpacity style={styles.fileInput} onPress={handleSelectFile}>
        <Text style={styles.fileInputText}>Haga clic aquí para cargar la foto</Text>
        {fileUri ? <Image source={{ uri: fileUri }} style={styles.previewImage} /> : null}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputFieldContainer: {
    marginBottom: 25,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  inputTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  fileInput: {
    width: '90%', // Esto controla el ancho del botón. '90%' significa que ocupará el 90% del ancho de su contenedor padre.
    height: 100, // Aumenta la altura del botón aquí
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#C4C4C4',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15, // Puedes aumentar el padding para dar más espacio interno si es necesario
    marginTop: 10, // Agrega un margen en la parte superior si necesitas separarlo de otros elementos
    marginBottom: 10, // Agrega un margen en la parte inferior si es necesario
  },
  
  fileInputText: {
    color: '#333',
    fontSize: 18, // Aumenta el tamaño del texto si es necesario
    fontWeight: 'bold', // Puedes cambiar el peso de la fuente si quieres que sea más grueso
  },
  previewImage: {
    width: 100, // Ajusta según necesidades
    height: 100, // Ajusta según necesidades
    resizeMode: 'cover',
    marginTop: 10,
  },
});

export default CustomFileInput;
