import React from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';

export default function EditProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Perfil</Text>
      <Image
        style={styles.profilePicture}
        source={{ uri: 'https://via.placeholder.com/150' }}
      />
      <Button
        title="Alterar foto"
        onPress={() => alert('Funcionalidade de alterar foto')}
        color="#555"
      />
      <TextInput
        style={styles.input}
        placeholder="Nome"
        placeholderTextColor="#aaa"
        defaultValue="Wendel Muniz"
      />
      <TextInput
        style={styles.input}
        placeholder="Nome de usuário"
        placeholderTextColor="#aaa"
        defaultValue="@wendelmuniz_"
      />
      <TextInput
        style={styles.input}
        placeholder="Bio"
        placeholderTextColor="#aaa"
        defaultValue="O papacapim é a melhor rede social que existe, respeita o criador"
        multiline
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Salvar Alterações"
          onPress={() => {
            alert('Perfil atualizado');
            navigation.navigate('UserProfile');
          }}
          color="#333"
        />
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
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
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
