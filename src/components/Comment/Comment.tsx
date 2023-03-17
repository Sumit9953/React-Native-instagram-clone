import { View, Text } from 'react-native'
import React from 'react'
import colors from '../../theme/color';
import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './styles'
import { IComment } from '../../types/models';

interface ICommentProps {
  comment : IComment
}

const Comment = ({comment}: ICommentProps) => {
  return (
     <View style={styles.comment}>
       <Text style={styles.commenttext}>
         <Text style={styles.bold}>{comment.user.username}</Text>{' '}
         {comment.comment}
       </Text>
       <AntDesign
         name={'hearto'}
         size={16}
         style={styles.icon}
         color={colors.black}
       />
     </View>
  )
}

export default Comment