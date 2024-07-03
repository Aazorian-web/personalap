import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/mypicture.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Matthew Palmer</ThemedText>
      </ThemedView>
      <ThemedText style={styles.leader}>UX/UI Designer</ThemedText>
      <ThemedView style={styles.About}>Bio:</ThemedView>
      <ThemedView style={styles.text}> I chose to be the UX/UI designer.          
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  
  reactLogo: {
    borderRadius: 220,
    maxWidth: 220,
    height: 220,
  },
  About: {
    height: 120,
    color: 'white',
    fontSize: 25,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },

});