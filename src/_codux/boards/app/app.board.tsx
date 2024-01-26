import { createBoard } from '@wixc3/react-board';
import App from '../../../App';
import { Login } from '../../../components/login/login';

export default createBoard({
    name: 'App',
    Board: () => <Login />,
});
