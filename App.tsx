import {Text, View} from 'react-native';
import colors from './src/theme/color';
import { size } from './src/theme/fonts';
import AntDesign from "react-native-vector-icons/AntDesign";

const App = () => {
  return (
    <View>
      <Text style={{color: colors.black , fontSize : size.xxlg}}>Hello world
      <AntDesign name="stepforward" />
      </Text>
    </View>
  );
};

export default App;
