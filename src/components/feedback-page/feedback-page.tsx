import classNames from 'classnames';
import styles from './feedback-page.module.scss';
import { Topbar } from '../topbar/topbar';
import { Sidebar } from '../sidebar/sidebar';
import { Feedback } from '../feedback/feedback';

export interface FeedbackPageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const FeedbackPage = ({ className }: FeedbackPageProps) => {
    return (
        <div>
            <Topbar />
            <div className={styles.content}>
                <Sidebar />
                <Feedback />
            </div>
        </div>
    );
};
