import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfileCard from './components/ProfileCard';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Profile App</Text>
      </View>
      <ScrollView contentContainerStyle={styles.list} showsVerticalScrollIndicator={false}>
        <ProfileCard
          name="Ada Lovelace"
          role="Mathematician"
          imageSource={require('./assets/ada.png')}
        />
        <ProfileCard
          name="Grace Hopper"
          role="Computer Scientist"
          imageSource={require('./assets/grace.png')}
        />
        <ProfileCard
          name="Hedy Lamarr"
          role="Inventor"
          imageSource={require('./assets/hedy.png')}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  header: {
    marginBottom: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#2d3436',
  },
  list: {
    paddingBottom: 24,
  },
});
