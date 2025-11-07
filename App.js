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
          name="Yusuf Ziyrek"
          role="Software Developer"
          imageSource={require('./assets/resim1.png')}
        />
        <ProfileCard
          name="Mehmet Akif Yılmaz"
          role="Software Developer"
          imageSource={require('./assets/resim2.png')}
        />
        <ProfileCard
          name="Muhammed Cengin Gökakın"
          role="philosopher"
          imageSource={require('./assets/resim3.png')}
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
