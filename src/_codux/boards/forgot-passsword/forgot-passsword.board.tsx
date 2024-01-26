import { createBoard } from '@wixc3/react-board';
import { ForgotPasssword } from '../../../components/forgot-passsword/forgot-passsword';

export default createBoard({
    name: 'ForgotPasssword',
    Board: () => <ForgotPasssword />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 2040,
        windowWidth: 2226,
        windowHeight: 1157,
        canvasHeight: 1220,
    },
});
