import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation<any>();

  const openModal = () => {
    // getParent() targets the Root Stack Navigator where ModalScreen is defined
    const parentNav = navigation.getParent();
    if (parentNav) {
      parentNav.navigate('ModalScreen');
    } else {
      navigation.navigate('ModalScreen');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>home</Text>
      
      <Pressable
        style={styles.button}
        onPress={() =>
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'hello from home',
          })
        }
      >
        <Text style={styles.buttonText}>go to details</Text>
      </Pressable>

      <Pressable
        style={[styles.button, styles.modalButton]}
        onPress={openModal}
      >
        <Text style={styles.buttonText}>open modal</Text>
      </Pressable>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },
  title: {
    fontSize: 20,
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
  },
  modalButton: {
    backgroundColor: '#28a745',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});