import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function PostScreen({ navigation }) {
  const [postContent, setPostContent] = useState('');

  return (    
    <View style={styles.container}>
      <Text style={styles.title}>Nova Postagem</Text>
      <TextInput
        style={styles.input}
        placeholder="O que está acontecendo?"
        placeholderTextColor="#aaa"
        multiline
        numberOfLines={4}
        onChangeText={setPostContent}
        value={postContent}
      />
      <Button 
        title="Postar" 
        onPress={() => {
          alert('Postagem enviada!');
          navigation.navigate('Feed');
        }}
        disabled={postContent.length === 0}
        color="#333"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#1c1c1c',
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    color: '#fff',
  },
  input: {
    height: 100,
    borderColor: '#555',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    textAlignVertical: 'top',
    color: '#fff',
    backgroundColor: '#333',
  },
});
