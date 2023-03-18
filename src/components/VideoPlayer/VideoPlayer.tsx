import {View, Pressable, Text, StyleSheet} from 'react-native';
import Video from 'react-native-video';
import {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons'
import colors from '../../theme/color';

interface IVideoPlayer {
  uri: string;
  paused: boolean
}

const VideoPlayer = ({uri , paused}: IVideoPlayer) => {
  const [muted, setMuted] = useState(true);

  return (
    <View>
      <Video
        source={{uri}}
        style={styles.video}
        muted={muted}
        repeat
        resizeMode="cover"
        paused={paused}
      />
      <Pressable onPress={() => setMuted(v => !v)} style={styles.muteButton}>
      <Ionicons name={muted ? 'volume-mute' : 'volume-medium'} size={14} color={colors.white} />
      </Pressable>

    </View>
  );
};

const styles = StyleSheet.create({
  video: {
    width: '100%',
    aspectRatio: 1,
  },
  muteButton : {
    backgroundColor: colors.black,
    borderRadius: 25,
    padding : 5,

    position: 'absolute',
    bottom: 10,
    right: 10,
  }
});

export default VideoPlayer;
