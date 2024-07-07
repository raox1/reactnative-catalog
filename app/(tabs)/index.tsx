import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from Expo Icons

const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/react-logo.png')} // Replace with actual path to your React Native logo image
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>React Native Catalog</Text>
      <View style={styles.topicContainer}>
        <TouchableOpacity
          style={styles.topicButton}
          onPress={() => navigation.navigate('UIElements')}>
          <Ionicons name="ios-apps" size={32} color="#4a90e2" />
          <Text style={styles.topicText}>UI Elements</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.topicButton}
          onPress={() => navigation.navigate('Animations')}>
          <Ionicons name="ios-git-merge" size={32} color="#2ecc71" />
          <Text style={styles.topicText}>Animations</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.topicButton}
          onPress={() => navigation.navigate('Concurrency')}>
          <Ionicons name="ios-flash" size={32} color="#f39c12" />
          <Text style={styles.topicText}>Concurrency</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.topicButton}
          onPress={() => navigation.navigate('Networking')}>
          <Ionicons name="ios-wifi" size={32} color="#e74c3c" />
          <Text style={styles.topicText}>Networking</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eaf6ff', // Light sky blue background
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333', // Dark text color
  },
  topicContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topicButton: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  topicText: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333', // Dark text color
  },
});

export default HomeScreen;