import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,
        backgroundColor: theme.colors.highlight
    },
    content:{
        marginTop: 30,
        width: '100%',
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
    },
    viewText:{
       width: 125,
       marginLeft: 12
    },
    name:{
       fontFamily: theme.fonts.Bold700,
       fontSize: 16
    },
    idCrea:{
        fontFamily: theme.fonts.Medium500,
        fontSize: 10
    },
    viewImage:{
        backgroundColor: theme.colors.highlight,
    },
    image:{
        width: 34,
        height: 34,
        borderRadius: 17
    },
    viewIcon:{
        padding: 10,
        marginLeft: 150
    },
    icon:{
        width: 14,
        height: 17
    }
});