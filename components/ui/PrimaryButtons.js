import { Text, View, StyleSheet, Pressable } from 'react-native'
const PrimaryButton = ({ children, buttonHandlerFunction }) => {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable onPress={buttonHandlerFunction} style={({ pressed }) => pressed ? [styles.buttonInnerContainer, styles.iOSpressed] : styles.buttonInnerContainer} android_ripple={{ color: '#640233' }}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}

export default PrimaryButton

const styles = StyleSheet.create({
    buttonOuterContainer: {
        margin: 4,
        borderRadius: 28,
        overflow: 'hidden'
    },
    buttonInnerContainer: {
        backgroundColor: '#72063c',
        paddingHorizontal: 8,
        paddingVertical: 16,
        elevation: 2,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        paddingHorizontal: 10
    },
    iOSpressed: {
        opacity: 0.75
    }

})