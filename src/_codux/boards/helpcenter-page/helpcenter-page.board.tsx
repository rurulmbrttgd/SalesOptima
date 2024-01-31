import { createBoard } from '@wixc3/react-board';
import { HelpcenterPage } from '../../../components/helpcenter-page/helpcenter-page';

export default createBoard({
    name: 'HelpcenterPage',
    Board: () => <HelpcenterPage />,
    isSnippet: true,
    environmentProps: {
        canvasHeight: 1130,
        windowWidth: 1920,
        windowHeight: 1080,
        canvasWidth: 2010,
    },
});
