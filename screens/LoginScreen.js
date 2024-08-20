import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('https://api.papacapim.just.pro.br:8000/sessions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          login: email,
          password: password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        // Armazene o token em um estado global ou em AsyncStorage para usar em futuras requisições
        const sessionToken = data.token;
        console.log('Token de sessão:', sessionToken);
        
        // Navegar para a tela principal
        navigation.navigate('Main');
      } else {
        Alert.alert('Erro', 'Login ou senha incorretos');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      Alert.alert('Erro', 'Ocorreu um erro ao tentar fazer login.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Papacapim</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <View style={styles.buttonContainer}>
        <Button title="Entrar" onPress={handleLogin} color="#333" />
        <Button title="Cadastrar" onPress={() => navigation.navigate('Register')} color="#555" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#1c1c1c',
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    color: '#fff',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#555',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: '#fff',
    backgroundColor: '#333',
  },
  buttonContainer: {
    width: '100%',
    marginTop: 10,
  },
});
