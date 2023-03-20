import {View, Text, Image} from 'react-native';
import user from '../../assets/data/user.json';
import styles from './styles';

const ProfileScreen = () => {
  return (
    <View style={styles.root}>
      <View style={styles.headerRow}>
        <Image style={styles.avatar} source={{uri: user.image}} />

        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>98</Text>
          <Text>Posts</Text>
        </View>
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>98</Text>
          <Text>Posts</Text>
        </View>
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>98</Text>
          <Text>Posts</Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;
