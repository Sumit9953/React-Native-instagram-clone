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
        flex: 1
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
        alignItems: 'center'
      }
})

export default styles;