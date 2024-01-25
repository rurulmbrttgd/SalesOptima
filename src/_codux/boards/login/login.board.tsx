import { createBoard } from '@wixc3/react-board';
import { Login } from '../../../components/login/login';

export default createBoard({
    name: 'Login',
    Board: () => <Login />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1830,
        canvasWidth: 1964,
        canvasHeight: 1942,
    },
});
