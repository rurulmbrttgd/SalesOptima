import classNames from 'classnames';
import styles from './login.module.scss';

export interface LoginProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Login = ({ className }: LoginProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['login-div']}>
                <div>
                    <h4>Heading 4</h4>
                    <h4>Heading 4</h4>
                </div>
                <div>
                    <h4>Heading 4</h4>
                    <h4>Heading 4</h4>
                    <h4>Heading 4</h4>
                </div>
                <div>
                    <h4>Heading 4</h4>
                    <h4>Heading 4</h4>
                </div>
                <h4>Heading 4</h4>
            </div>
            <svg
                width="148"
                height="1080"
                viewBox="0 0 148 1080"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles['middle-line']}
            >
                <path
                    d="M103.5 1080L144.974 866.644C149.509 843.314 145.587 819.131 133.909 798.43L13.928 585.736C-2.84687 555.999 -3.29059 519.758 12.7512 489.619L134.883 260.159C145.939 239.387 149.316 215.383 144.42 192.367L103.5 0"
                    stroke="white"
                />
            </svg>
            <div className={styles['logo-div']}>
                <img
                    src="https://res.cloudinary.com/dxzvh2xex/image/upload/v1706204573/salesoptima-logo_kpbyj3.png"
                    alt=""
                    className={styles['login-logo']}
                />
            </div>
        </div>
    );
};
