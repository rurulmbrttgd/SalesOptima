import { createBoard } from '@wixc3/react-board';
import { ProductPage } from '../../../components/product-page/product-page';

export default createBoard({
    name: 'ProductPage',
    Board: () => <ProductPage />,
    isSnippet: true,
    environmentProps: {
        windowHeight: 1201,
        windowWidth: 2136,
    },
});
