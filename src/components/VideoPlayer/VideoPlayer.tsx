import { View, Text , StyleSheet } from 'react-native'
import Video from 'react-native-video';

interface IVideoPlayer {
    uri : string;
}

const VideoPlayer = ({uri} : IVideoPlayer) => {
  return (
    <Video source={{uri}} style={styles.video} />
  )
}

const styles = StyleSheet.create({
    video: {
        width: "100%",
        aspectRatio: 1
    }
})

export default VideoPlayer