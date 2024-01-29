import classNames from 'classnames';
import styles from './feedback.module.scss';

export interface FeedbackProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Feedback = ({ className }: FeedbackProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['report-text']}>
                <h1 className={styles['should-text']}>Should you have questions?</h1>
                <h1 className={styles['reports-text']}> Reports?</h1>
            </div>
            <div className={styles.email}>
                <h2 className={styles['subject-text']}>Subject</h2>
                <input className={styles['subject-input']} placeholder='Subject'/>
                <h2 className={styles['desc-text']}>Description</h2>
                <input className={styles['desc-input']} placeholder='Description'/>


            </div>
            <div className={styles['send-button']}>
                <h2 className={styles['send-text']}>Send</h2>
            </div>
        </div>
    );
};
