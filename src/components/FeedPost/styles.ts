import { StyleSheet } from "react-native";
import colors from "../../theme/color";
import fonts from "../../theme/fonts";

const styles = StyleSheet.create({
    post: {},
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
    },
    userAvatar: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 10,
    },
    userName: {
      fontWeight: fonts.weight.bold,
      color: colors.black,
    },
    threedots: {
      marginLeft: 'auto',
    },
    image: {
      width: '100%',
      aspectRatio: 1,
    },
    footer: {
      padding: 10,
    },
    iconContainer: {
      flexDirection: 'row',
      marginBottom: 5
    },
    icon: {
      marginHorizontal: 5,
    },
    text: {
      color: colors.black,
      lineHeight: 18
    },
    bold: {
      fontWeight: fonts.weight.bold,
    },
    commenttext: {
      color: colors.black,
      lineHeight: 18,
      flex: 1
    },
    comment: {
      flexDirection: 'row',
      alignItems: 'center'
    }
  });

  export default styles