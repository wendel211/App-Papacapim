import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const dummyPosts = [
  { id: '1', user: 'User1', content: 'Primeira postagem no Papacapim!' },
  { id: '2', user: 'User2', content: 'Adeus, Twitter!' },
  { id: '3', user: 'User3', content: 'Testando o Papacapim...' },
  { id: '4', user: 'User4', content: 'Perdeu Elon Musk!' },
];

export default function FeedScreen() {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
          <Text style={styles.profileButton}>Perfil</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <FlatList
        data={dummyPosts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.post}>
            <Text style={styles.user}>{item.user}</Text>
            <Text style={styles.content}>{item.content}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#1c1c1c',
  },
  post: {
    borderBottomWidth: 1,
    borderBottomColor: '#555',
    paddingVertical: 10,
  },
  user: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#fff',
  },
  content: {
    color: '#ccc',
  },
  profileButton: {
    fontSize: 16,
    color: '#1e90ff',
    marginLeft: 10,
  },
});
