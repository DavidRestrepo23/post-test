import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    link: {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '18px'
    },
    brand: {
        color: '#fff',
        textDecoration: 'none !important',
    },
    session: {
        color: '#fff',
    }
}));