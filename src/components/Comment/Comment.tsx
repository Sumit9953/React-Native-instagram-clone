import { View,Image, Text, Pressable } from 'react-native'
import React , {useState} from 'react'
import colors from '../../theme/color';
import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './styles'
import { IComment } from '../../types/models';

interface ICommentProps {
  comment : IComment
}

const Comment = ({comment}: ICommentProps) => {

  const [isLiked, setIsLiked] = useState(false)

  const toggleLike = () => {
    setIsLiked(v => !v);
  }

  return (
     <View style={styles.comment}>
      <Image source={{uri: comment.user.image}} style={styles.avatar} />

      <View style={styles.middleColum}>
       <Text style={styles.commenttext}>
         <Text style={styles.bold}>{comment.user.username}</Text>{' '}
         {comment.comment}
       </Text>
       <View style={styles.footer}>
        <Text style={styles.footerText}>2d</Text>
        <Text style={styles.footerText}>5 likes</Text>
        <Text style={styles.footerText}>Reply</Text>
       </View>
      </View>

    <Pressable onPress={toggleLike}>
       <AntDesign
         name={isLiked ? 'heart' : 'hearto'}
         size={16}
         style={styles.icon}
         color={isLiked ? colors.accent : colors.black}
       />
       </Pressable>
     </View>
  )
}

export default Comment