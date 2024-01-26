import classNames from 'classnames';
import styles from './topbar.module.scss';

export interface TopbarProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const Topbar = ({ className }: TopbarProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['top-bar-logo']}>
                <img
                    src="https://res.cloudinary.com/dxzvh2xex/image/upload/v1706257191/salesoptima-logo2_ltpbkb.png"
                    alt="SalesOptima Logo"
                />
                <h1 className={styles['Sales-text']}>SALES</h1>
                <h1 className={styles['Optima-text']}>OPTIMA</h1>
            </div>
            <img
                src="https://res.cloudinary.com/dxzvh2xex/image/upload/v1706257373/Online_Support_cfiypq.png"
                alt="Online Support"
            />
        </div>
    );
};
