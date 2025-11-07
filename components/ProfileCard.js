import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ProfileCard({ name, role, imageSource }) {
  const handlePress = () => {
    Alert.alert('Profile Selected', `You tapped on ${name}'s profile.`);
  };

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.8}>
      <View style={styles.card}>
        <Image source={imageSource} style={styles.avatar} />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.role}>{role}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 4,
  },
  role: {
    fontSize: 16,
    color: '#636e72',
  },
});
