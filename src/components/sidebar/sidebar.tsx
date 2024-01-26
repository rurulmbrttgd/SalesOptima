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
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['sidebar-button']}>
                <img
                    src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                    alt=""
                    className={styles.icon}
                />
                <h3 className={styles['sidebar-button-text']}>Home</h3>
            </div>
            <div className={styles['sidebar-button']}>
                <img
                    src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                    alt=""
                    className={styles.icon}
                />
                <h3 className={styles['sidebar-button-text']}>Customers</h3>
            </div>
            <div className={styles['sidebar-button']}>
                <img
                    src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                    alt=""
                    className={styles.icon}
                />
                <h3 className={styles['sidebar-button-text']}>Product</h3>
            </div>
            <div className={styles['sidebar-button']}>
                <img
                    src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                    alt=""
                    className={styles.icon}
                />
                <h3 className={styles['sidebar-button-text']}>Data backup &amp; Restore</h3>
            </div>
            <div className={styles['sidebar-button']}>
                <img
                    src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                    alt=""
                    className={styles.icon}
                />
                <h3 className={styles['sidebar-button-text']}>Message Us</h3>
            </div>
            <div className={styles['sidebar-button']}>
                <img
                    src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                    alt=""
                    className={styles.icon}
                />
                <h3 className={styles['sidebar-button-text']}>Log out</h3>
            </div>
        </div>
    );
};
