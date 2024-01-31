import { createBoard } from '@wixc3/react-board';
import { FeedbackPage } from '../../../components/feedback-page/feedback-page';

export default createBoard({
    name: 'FeedbackPage',
    Board: () => <FeedbackPage />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080,
        canvasWidth: 2362,
    },
});
