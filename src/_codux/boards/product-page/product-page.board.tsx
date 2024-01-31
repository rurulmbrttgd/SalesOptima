import { createBoard } from '@wixc3/react-board';
import { ProductPage } from '../../../components/product-page/product-page';

export default createBoard({
    name: 'ProductPage',
    Board: () => <ProductPage />,
    isSnippet: true,
    environmentProps: {
        windowHeight: 1080,
        windowWidth: 1920,
        canvasWidth: 1926,
    },
});
