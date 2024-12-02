import { StyleSheet } from 'react-native';
import { colors } from '../utils/colors';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bg,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingTop: 40,
    },
    header: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 30,
    },
    input: {
        width: '100%',
        height: 50,
        borderRadius: 10,
        paddingLeft: 20,
        backgroundColor: '#fff',
        marginBottom: 15,
        fontSize: 16,
        borderColor: colors.white,
        borderStyle: 'solid',
        borderWidth: 1,
    },
    button: {
        backgroundColor: colors.secondary,
        width: '100%',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    button_hover: {
        backgroundColor: colors.primary,
    },

    buttonText: {
        color: colors.white,
        fontSize: 18,
        fontWeight: 'bold',
    },
    taskItem: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 15,
        marginVertical: 5,
        borderRadius: 5,
        borderColor: colors.white,
        borderStyle: 'solid',
        borderWidth: 1,
    },
    rightIcon:{
        flexDirection: 'row',
        gap: 15
    },
    taskText: {
        fontSize: 16,
        color: '#333',
        maxWidth: '85%',
    },
    removeText: {
        color: '#FF5733',  // Red color for the remove button
        fontWeight: 'bold',
        fontSize: 18,
    },
});
