// TermsSwitch.js
import React, { useState } from 'react';
import { View, Switch, Text, StyleSheet } from 'react-native';

const TermsSwitch = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Acepto los Términos y Condiciones y el Aviso de Privacidad</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // Alinea los elementos hijos (el texto y el switch) al centro
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  textStyle: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center', // Asegura que el texto también esté centrado
  },
  // ... otros estilos que necesites ...
});

export default TermsSwitch;
