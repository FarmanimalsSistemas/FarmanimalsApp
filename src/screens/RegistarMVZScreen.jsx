// RegistrationScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Picker } from 'react-native';
import DocumentPicker from 'react-native-document-picker';

const RegistrationMVZScreen = () => {
  // Estados para los archivos seleccionados
  const [cedula, setCedula] = useState(null);
  // Repite para otros documentos...

  // Función para seleccionar archivos
  const selectFile = async (setFileFunction) => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      setFileFunction(res);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log('User cancelled the picker');
      } else {
        throw err;
      }
    }
  };

  // Funciones para manejar los eventos de los botones
  const handleGuardar = () => {
    console.log('Guardar');
    // Aquí iría la lógica para manejar la acción de guardar
  };

  // Renderiza un botón de archivo personalizado
  const renderFilePickerButton = (title, setFileFunction) => (
    <TouchableOpacity 
      style={styles.filePickerButton} 
      onPress={() => selectFile(setFileFunction)}
    >
      <Image source={require('./path-to-icon.png')} style={styles.iconStyle} />
      <Text style={styles.filePickerText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <Image source={require('./path-to-logo.png')} style={styles.logoStyle} />
      
      {/* Renderiza botones de selección de archivo para cada documento */}
      {renderFilePickerButton('Anexa tu Cédula Profesional', setCedula)}
      {/* Repite para otros documentos... */}

      {/* Número de sucursales - Picker */}
      <View style={styles.pickerContainer}>
        <Picker
          // Estilos y propiedades del Picker
        >
          {/* Items del Picker */}
        </Picker>
      </View>

      {/* Botón para agregar más contactos */}
      <TouchableOpacity style={styles.buttonAgregarContactos}>
        <Text style={styles.buttonText}>Agrega dos contactos más</Text>
      </TouchableOpacity>

      {/* Botón Guardar */}
      <TouchableOpacity style={styles.buttonGuardar} onPress={handleGuardar}>
        <Text style={styles.buttonText}>Guardar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logoStyle: {
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginVertical: 20,
  },
  filePickerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8E8E8',
    margin: 10,
    padding: 10,
    borderRadius: 5,
  },
  filePickerText: {
    marginLeft: 10,
  },
  iconStyle: {
    // Estilos para el ícono van aquí
  },
  pickerContainer: {
    // Estilos para el contenedor del Picker
  },
  buttonAgregarContactos: {
    backgroundColor: '#E8E8E8',
    marginHorizontal: 10,
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
  },
  buttonGuardar: {
    backgroundColor: '#007AFF',
    marginHorizontal: 10,
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  // ... otros estilos que necesites ...
});

export default RegistrationMVZScreen;
