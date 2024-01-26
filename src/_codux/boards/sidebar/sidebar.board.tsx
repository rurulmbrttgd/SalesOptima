import { createBoard } from '@wixc3/react-board';
import { Sidebar } from '../../../components/sidebar/sidebar';

export default createBoard({
    name: 'Sidebar',
    Board: () => <Sidebar />,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 1084,
        canvasWidth: 2030,
        windowWidth: 1920,
        windowHeight: 1080,
    },
});
