import React from 'react';
import { View, Text, Image, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

export default function UserProfileScreen({ navigation }) {
  const dummyUser = {
    name: 'Wendel Muniz',
    username: '@wendelmuniz_',
    bio: 'O papacapim é a melhor rede social que existe, respeita o criador',
    followers: 500,
    following: 223,
  };

  // alterar 'your-auth-token' pelo método de obter o token do seu sistema
  const authToken = 'your-auth-token'; 

  const handleDeleteAccount = async () => {
    Alert.alert(
      "Excluir Conta",
      "Tem certeza que deseja excluir sua conta? Esta ação é irreversível.",
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        { 
          text: "Excluir", 
          onPress: async () => {
            try {
              const response = await axios.delete('https://api.papacapim.just.pro.br:8000/users', {
                headers: {
                  'Authorization': `Bearer ${authToken}`
                }
              });

              if (response.status === 200) {
                Alert.alert('Sucesso', 'Conta excluída com sucesso!');
                navigation.reset({
                  index: 0,
                  routes: [{ name: 'Login' }],
                });
              }
            } catch (error) {
              Alert.alert('Erro', 'Não foi possível excluir a conta.');
              console.error(error);
            }
          }
        }
      ]
    );
  };

  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Tem certeza que deseja sair?",
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        { 
          text: "Sim", 
          onPress: () => navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
          })
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.profilePicture}
        source={{ uri: 'https://via.placeholder.com/150' }}
      />
      <Text style={styles.name}>{dummyUser.name}</Text>
      <Text style={styles.username}>{dummyUser.username}</Text>
      <Text style={styles.bio}>{dummyUser.bio}</Text>
      <View style={styles.statsContainer}>
        <Text style={styles.statsText}>Seguidores: {dummyUser.followers}</Text>
        <Text style={styles.statsText}>Seguindo: {dummyUser.following}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Editar Perfil" onPress={() => navigation.navigate('EditProfile')} color="#333" />
        <Button title="Voltar para o Feed" onPress={() => navigation.navigate('Main')} color="#555" />
      </View>
      <Button title="Logout" onPress={handleLogout} color="red" />
      <Button title="Excluir Conta" onPress={handleDeleteAccount} color="red" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#1c1c1c',
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    borderColor: '#555',
    borderWidth: 2,
    backgroundColor: '#333',
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#fff',
  },
  username: {
    fontSize: 18,
    color: '#aaa',
    marginBottom: 15,
  },
  bio: {
    fontSize: 16,
    color: '#ccc',
    marginBottom: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  statsText: {
    fontSize: 16,
    color: '#fff',
  },
  buttonContainer: {
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
  },
  buttonStyle: {
    marginBottom: 10,
    backgroundColor: '#333',
    borderColor: '#555',
    borderWidth: 1,
    borderRadius: 5,
  },
  logoutButton: {
    marginTop: 20,
    backgroundColor: 'red',
    borderColor: '#333',
    borderWidth: 1,
    borderRadius: 5,
  },
});
