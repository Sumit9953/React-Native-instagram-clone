import {View, Text, Image, TextInput, StyleSheet} from 'react-native';
import colors from '../../theme/color';
import fonts from '../../theme/fonts';
import {useState} from 'react';

const Input = () => {
  const [newComment, setNewComment] = useState('');

  const onPost = () => {
    console.warn('posting the coment');

    setNewComment('')
  };

  return (
    <View style={styles.root}>
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
        }}
        style={styles.image}
      />
      <TextInput
        value={newComment}
        onChangeText={newText => setNewComment(newText)}
        style={styles.input}
        placeholder="Write your comment..."
        multiline
      />
      <Text onPress={onPost} style={styles.button}>
        Post
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    padding: 5,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "flex-end"
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
    paddingRight: 50,
    paddingHorizontal: 10,
    marginLeft: 5,
  },
  button: {
    position: 'absolute',
    right: 15,
    bottom: 15,
    fontSize: fonts.size.s,
    fontWeight: fonts.weight.full,
    color: colors.primary,
  },
});

export default Input;
