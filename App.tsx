import {StyleSheet, ScrollView,FlatList, View} from 'react-native';
import HomeScreen from './src/screen/HomeScreen/HomeScreen';
import CommentScreen from './src/screen/CommentScreen/CommentScreen';

const App = () => {
  return (
    <View style={styles.app}>
      <CommentScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});

export default App;
