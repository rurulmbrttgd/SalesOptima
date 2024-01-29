import { createBoard } from '@wixc3/react-board';
import App from '../../../App';
import { Topbar } from '../../../components/topbar/topbar';
import { Sidebar } from '../../../components/sidebar/sidebar';
import Dashboard_module from '../../../components/dashboard/dashboard.module.scss';
import { Feedback } from '../../../components/feedback/feedback';

export default createBoard({
    name: 'App',
    Board: () => (
        <div className={Dashboard_module['home-dashboard']}>
            <div>
                <Topbar />
            </div>
            <div className={Dashboard_module.content}>
                <Sidebar />
                <Feedback />
            </div>
        </div>
    ),
    environmentProps: {
        canvasWidth: 2274,
        canvasHeight: 1090,
        windowWidth: 1920,
        windowHeight: 1080,
    },
});
