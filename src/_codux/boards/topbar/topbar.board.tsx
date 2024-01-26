import { createBoard } from '@wixc3/react-board';
import { Topbar } from '../../../components/topbar/topbar';

export default createBoard({
    name: 'Topbar',
    Board: () => <Topbar />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080,
        canvasWidth: 1951,
        canvasHeight: 1274,
    },
});
