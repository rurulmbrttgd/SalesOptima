import { createBoard } from '@wixc3/react-board';
import { Helpcenter } from '../../../components/helpcenter/helpcenter';

export default createBoard({
    name: 'Helpcenter',
    Board: () => <Helpcenter />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080,
        canvasWidth: 1920,
        canvasHeight: 1306,
    },
});
