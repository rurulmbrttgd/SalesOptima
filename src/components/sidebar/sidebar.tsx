import classNames from 'classnames';
import styles from './sidebar.module.scss';

export interface SidebarProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Sidebar = ({ className }: SidebarProps) => {
    return <div className={classNames(styles.root, className)}>Sidebar</div>;
};
