import {View, Text, Image, TextInput, StyleSheet} from 'react-native';
import colors from '../../theme/color';

const Input = () => {
  return (
    <View style={styles.root}>
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
        }}
        style={styles.image}
      />
      <TextInput style={styles.input} placeholder="Write your comment..." />
      <Text style={styles.button}>Post</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    padding: 5,
    borderWidth: 1,
    borderColor: colors.border
  },
  image: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 20,
  },
  input: {
    flex: 1,

    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 25,
    
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginLeft: 5
  },
  button: {

  }
});

export default Input;
