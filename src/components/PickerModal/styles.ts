import { StyleSheet } from 'react-native';
import { theme } from '../../global/theme';

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      },
      modal: {
        backgroundColor: theme.colors.highlight,
        borderRadius: 5,
      },
      option:{
        alignItems: 'flex-start',
        backgroundColor: '#DADADA',
      },
      text:{
        margin: 20,
        fontSize: 18,
        fontFamily: theme.fonts.Medium500,
        color: theme.colors.darkgray
      }
});