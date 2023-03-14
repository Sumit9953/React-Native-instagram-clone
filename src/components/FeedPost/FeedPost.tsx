import {Image, StyleSheet, Text, View} from 'react-native';
import colors from '../../theme/color';
import fonts from '../../theme/fonts';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import styles from './styles';

const FeedPost = () => {
  return (
    // Header
    <View style={styles.post}>
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://smileworld.in/wp-content/uploads/2021/09/Facebook-Profile-Photo-Free-Download.jpg',
          }}
          style={styles.userAvatar}
        />
        <Text style={styles.userName}>Sumit</Text>

        <Entypo
          style={styles.threedots}
          name="dots-three-horizontal"
          size={16}
        />
      </View>

      {/* Content */}
      <Image
        // resizeMode="contain"
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEXwLPiCBOZ7oBN87cWbl-Z2_IRApG3Wr5rA&usqp=CAU',
        }}
        style={styles.image}
      />

      {/* Footer */}
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <AntDesign
            name={'hearto'}
            size={24}
            style={styles.icon}
            color={colors.black}
          />

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
          <Text style={styles.bold}>66 others</Text>
        </Text>

        {/* post description */}
        <Text style={styles.text}>
          <Text style={styles.bold}>Sumit</Text> Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Fugiat, corrupti iusto itaque fuga
          incidunt cumque earum voluptates harum eveniet nobis cum culpa illo
          velit neque. Architecto impedit sed necessitatibus consequuntur.
        </Text>

        {/* comments */}
        <Text>View all 16 comments</Text>
        <View style={styles.comment}>
          <Text style={styles.commenttext}>
            <Text style={styles.bold}>Sumit</Text> Lorem ipsum dolor sit amet
            consectetur adipisicing elit.
          </Text>
          <AntDesign
            name={'hearto'}
            size={16}
            style={styles.icon}
            color={colors.black}
          />
        </View>

        {/* posted date */}
        <Text>13 March , 2023</Text>
      </View>
    </View>
  );
};

export default FeedPost;
