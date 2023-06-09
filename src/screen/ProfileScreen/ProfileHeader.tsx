
import {View,Image,Text} from 'react-native'
import Button from '../../components/Button';
import user from '../../assets/data/user.json';
import styles from './styles';

const ProfileHeader = () => {
    return (
      <View style={styles.root}>
        <View style={styles.headerRow}>
          <Image style={styles.avatar} source={{uri: user.image}} />
  
          <View style={styles.numberContainer}>
            <Text style={styles.numberText}>98</Text>
            <Text>Posts</Text>
          </View>
          <View style={styles.numberContainer}>
            <Text style={styles.numberText}>107</Text>
            <Text>Followers</Text>
          </View>
          <View style={styles.numberContainer}>
            <Text style={styles.numberText}>98</Text>
            <Text>Following</Text>
          </View>
        </View>
  
        <Text style={styles.name}>{user.name}</Text>
        <Text>{user.bio}</Text>
  
        <View style={{flexDirection: 'row'}}>
          <Button
            text="Edit Profile"
            onPress={() => console.warn('On Edit profile')}
          />
          <Button
            text="Another button"
            onPress={() => console.warn('On Edit profile')}
          />
        </View>
      </View>
    );
  };

  export default ProfileHeader;