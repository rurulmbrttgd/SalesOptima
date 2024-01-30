import classNames from 'classnames';
import styles from './helpcenter.module.scss';

export interface HelpcenterProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Helpcenter = ({ className }: HelpcenterProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['report-text']}>
                <h1 className={styles['should-text']}>How can we help?</h1>
            </div>
            <div className={styles.search}>
                <input
                    className={styles['search-input']}
                    placeholder="Search, Contacts, Message, Reports... "
                />
            </div>
            <div className={styles.helpbox}>
                <div className={styles.youtube}>
                    <h2>SalesOptima Tutorial Video</h2>
                    <div>
                        <img
                            src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                            alt=""
                        />
                    </div>
                </div>
                <div className={styles.handbook}>
                    <h2>SalesOptima Handbook</h2>
                    <div>
                        <img
                            src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                            alt=""
                        />
                    </div>
                </div>
                <div className={styles.faq}>
                    <h2>Frequently Asked Questions</h2>
                    <div>
                        <img
                            src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
