import { createBoard } from '@wixc3/react-board';
import { Dashboard } from '../../../components/dashboard/dashboard';

export default createBoard({
    name: 'Dashboard',
    Board: () => <Dashboard />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080,
        canvasWidth: 1940,
        canvasHeight: 1080,
    },
});
