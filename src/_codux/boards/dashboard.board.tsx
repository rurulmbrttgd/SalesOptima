import { createBoard } from '@wixc3/react-board';
import { Topbar } from '../../components/topbar/topbar';
import { Sidebar } from '../../components/sidebar/sidebar';
import Dashboard_module from '../../components/dashboard/dashboard.module.scss';
import { Feedback } from '../../components/feedback/feedback';

export default createBoard({
    name: 'Home',
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
    isSnippet: true,
    environmentProps: {
        canvasWidth: 1920,
        windowWidth: 1920,
        windowHeight: 1080,
    },
});
