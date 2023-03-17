import {useState} from 'react'
import {Image, StyleSheet, Pressable, Text, View} from 'react-native';
import colors from '../../theme/color';
import fonts from '../../theme/fonts';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import DoublePressable from '../DoublePressable';
import Comment from '../Comment/Comment';
import styles from './styles';
import { IPost } from '../../types/models';

interface IFeedPost {
  post: IPost
}

const FeedPost = ({post}: IFeedPost) => {

  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false)
  const [isLiked, setIsLiked] = useState(true)
  
  const toggleDescriptionExpanded = () => {
    setIsDescriptionExpanded(existingValue => !existingValue);
  }

  const toggleLike = () => {
    setIsLiked(existingValue => !existingValue);
  }


  return (
    // Header
    <View style={styles.post}>
      <View style={styles.header}>
        <Image
          source={{
            uri: post.user.image,
          }}
          style={styles.userAvatar}
        />
        <Text style={styles.userName}>{post.user.username}</Text>

        <Entypo
          style={styles.threedots}
          name="dots-three-horizontal"
          size={16}
        />
      </View>

      {/* Content */}
      <DoublePressable onDoublePress={toggleLike}>
      <Image
        // resizeMode="contain"
        source={{
          uri: post.image,
        }}
        style={styles.image}
      />
      </DoublePressable>

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <Pressable onPress={toggleLike}>  
          <AntDesign
            name={isLiked ? 'heart' : 'hearto'}
            size={24}
            style={styles.icon}
            color={isLiked ? colors.accent : colors.black}
          />
          </Pressable>

          <Ionicons
            name="chatbubble-outline"
            size={24}
            style={styles.icon}
            color={colors.black}
          />

          <Feather
            name="send"
            size={24}
            style={styles.icon}
            color={colors.black}
          />

          <Feather
            name="bookmark"
            size={24}
            style={{marginLeft: 'auto'}}
            color={colors.black}
          />
        </View>

        <Text style={styles.text}>
          Liked by <Text style={styles.bold}>sumit</Text> and{' '}
          <Text style={styles.bold}>{post.nofLike} others</Text>
        </Text>

        {/* post description */}
        <Text style={styles.text} numberOfLines={isDescriptionExpanded ? 0 : 3}>
          <Text style={styles.bold}>{post.user.username}</Text>{' '}
          {post.description}
        </Text>

        <Text onPress={toggleDescriptionExpanded} >{isDescriptionExpanded ? 'less' : 'more'}</Text>

        <Text>View all {post.nofComments} comments</Text>
        {post.comments.map(comment => (
          <Comment key={comment.id} comment={comment} />
        ))}

        {/* posted date */}
        <Text>{post.createdAt}</Text>
      </View>
    </View>
  );
};

export default FeedPost;
