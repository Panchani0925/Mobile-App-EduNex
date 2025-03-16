import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  Image, 
  TouchableOpacity, 
  StatusBar 
} from 'react-native';

const OnboardingScreen = ({ onNext, onSkip }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      {/* Main content area */}
      <View style={styles.contentContainer}>
        {/* Blue semicircle with illustration */}
        <View style={styles.illustrationContainer}>
          <View style={styles.blueCircle}>
            <Image 
              source={require('./assets/woman-working.png')} 
              style={styles.illustration}
              resizeMode="contain"
            />
          </View>
        </View>