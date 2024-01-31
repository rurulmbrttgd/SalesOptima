import classNames from 'classnames';
import styles from './helpcenter-page.module.scss';
import { Topbar } from '../topbar/topbar';
import { Sidebar } from '../sidebar/sidebar';
import { Helpcenter } from '../helpcenter/helpcenter';
import Helpcenter_module from '../helpcenter/helpcenter.module.scss';

export interface HelpcenterPageProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const HelpcenterPage = ({ className }: HelpcenterPageProps) => {
    return (
        <div>
            <Topbar />
            <div className={Helpcenter_module.content}>
                <Sidebar />
                <Helpcenter />
            </div>
        </div>
    );
};
