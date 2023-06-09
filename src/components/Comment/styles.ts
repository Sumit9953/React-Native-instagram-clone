import { StyleSheet } from "react-native";
import colors from "../../theme/color";
import fonts from "../../theme/fonts";

const styles = StyleSheet.create({
    bold: {
        fontWeight: fonts.weight.bold,
      },
      commenttext: {
        color: colors.black,
        lineHeight: 18,
      },
      icon: {
        marginHorizontal: 5,
      },
      text: {
        color: colors.black,
        lineHeight: 18
      },
      comment: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      avatar: {
      width: 40,
      aspectRatio: 1,
      borderRadius: 25,
      marginRight: 5,
      },
      middleColum: {
        flex: 1
      },
      footer : {
        flexDirection: 'row',
        marginBottom: 10
      },
      footerText: {
        marginRight: 10
      }

})

export default styles;