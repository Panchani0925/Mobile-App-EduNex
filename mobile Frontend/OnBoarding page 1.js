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
         {/* Text content */}
         <View style={styles.textContainer}>
          <Text style={styles.text}>
            Education is the most powerful weapon which you can use to change the world.
          </Text>
        </View>

          {/* Progress indicator */}
          <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View style={styles.progressIndicator} />
          </View>
        </View>
        
        {/* Navigation buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.nextButton} 
            onPress={onNext}
          >
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={onSkip}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
        </View>
      </View>
      