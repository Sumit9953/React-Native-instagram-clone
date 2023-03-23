import {Pressable, View, Text, StyleSheet } from 'react-native'
import colors from '../../theme/color'
import fonts from '../../theme/fonts'

interface IButton {
    text?: string,
    onPress?: () => void
}

const Button = ({text = "" , onPress = () => {}} : IButton) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: colors.border,
        padding : 5,
        borderRadius: 5,

        alignItems: 'center',
        flex: 1,
        margin: 5
    },
    text: { 
        color: colors.black,
        fontWeight: fonts.weight.semi
    }
})
export default Button