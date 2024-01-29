import { createBoard } from '@wixc3/react-board';
import { Feedback } from '../../components/feedback/feedback';
export default createBoard({
    name: 'Feedback',
    Board: () => <Feedback />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080,
        canvasWidth: 2062,
        canvasHeight: 1080,
    },
});
