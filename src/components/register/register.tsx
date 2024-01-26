import classNames from 'classnames';
import styles from './register.module.scss';

export interface RegisterProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Register = ({ className }: RegisterProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles['logo-div']}>
                <img
                    src="https://res.cloudinary.com/dxzvh2xex/image/upload/v1706204573/salesoptima-logo_kpbyj3.png"
                    alt=""
                    className={styles['login-logo']}
                />
            </div>
            <svg
                width="148"
                height="1080"
                viewBox="0 0 148 1080"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M103.5 1080L144.974 866.644C149.509 843.314 145.587 819.131 133.909 798.43L13.928 585.736C-2.84687 555.999 -3.29059 519.758 12.7512 489.619L134.883 260.159C145.939 239.387 149.316 215.383 144.42 192.367L103.5 0"
                    stroke="white"
                    className={classNames(styles['middle-line'], styles['forgotPassword-line'])}
                />
            </svg>
            <div className={styles['login-div']}>
                <div className={styles.name}>
                    <div className={styles['first-last-name']}>
                        <label className={styles.label}>First name</label>
                        <input className={styles.input} value="Erica Joy" />
                        <svg
                            width="450"
                            height="2"
                            viewBox="0 0 450 2"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={styles.line}
                        >
                            <line
                                x1="-0.00228882"
                                y1="0.518097"
                                x2="449.998"
                                y2="0.518097"
                                stroke="white"
                            />
                        </svg>
                    </div>
                    <div className={styles['first-last-name']}>
                        <label className={styles.label}>Last name</label>
                        <input className={styles.input} value="Cavaneyro" />
                        <svg
                            width="450"
                            height="2"
                            viewBox="0 0 450 2"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={styles.line}
                        >
                            <line
                                x1="-0.00228882"
                                y1="0.518097"
                                x2="449.998"
                                y2="0.518097"
                                stroke="white"
                            />
                        </svg>
                    </div>
                </div>
                <div className={styles.email}>
                    <label className={styles.label}>Email Address</label>
                    <input className={styles['input']} value="abcde@gmail.com" />
                    <svg
                        width="450"
                        height="2"
                        viewBox="0 0 450 2"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={styles.line}
                    >
                        <line
                            x1="-0.00228882"
                            y1="0.518097"
                            x2="449.998"
                            y2="0.518097"
                            stroke="white"
                        />
                    </svg>
                </div>
                <div className={styles.company}>
                    <label className={styles.label}>Company</label>
                    <input className={styles['input']} value="WeebDev" />
                    <svg
                        width="450"
                        height="2"
                        viewBox="0 0 450 2"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={styles.line}
                    >
                        <line
                            x1="-0.00228882"
                            y1="0.518097"
                            x2="449.998"
                            y2="0.518097"
                            stroke="white"
                        />
                    </svg>
                </div>
                <div className={styles['phone-number']}>
                    <label className={styles.label}>Phone Number</label>
                    <input className={styles['input']} value="+63 908 123 4567" />
                    <svg
                        width="450"
                        height="2"
                        viewBox="0 0 450 2"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={styles.line}
                    >
                        <line
                            x1="-0.00228882"
                            y1="0.518097"
                            x2="449.998"
                            y2="0.518097"
                            stroke="white"
                        />
                    </svg>
                </div>
                <div className={styles['main-password']}>
                    <div className={styles.password}>
                        <label className={styles.label}>Password</label>
                        <input className={styles.input} value="ericajoy" type="password" />
                        <svg
                            width="450"
                            height="2"
                            viewBox="0 0 450 2"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={styles.line}
                        >
                            <line
                                x1="-0.00228882"
                                y1="0.518097"
                                x2="449.998"
                                y2="0.518097"
                                stroke="white"
                            />
                        </svg>
                    </div>
                    <div className={styles.password}>
                        <label className={styles.label}>Confirm Password</label>
                        <input className={styles.input} value="ericajoy" type="password" />
                        <svg
                            width="450"
                            height="2"
                            viewBox="0 0 450 2"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className={styles.line}
                        >
                            <line
                                x1="-0.00228882"
                                y1="0.518097"
                                x2="449.998"
                                y2="0.518097"
                                stroke="white"
                            />
                        </svg>
                        <input className={styles.input} />
                    </div>
                </div>
                <div className={styles.certificate}>
                    <label className={styles.label}>Business Certificate</label>
                    <input type="file" className={styles['file-upload']} style={{ display: '' }} />
                </div>
                <div className={styles['Terms-Condition']}>
                    <input type="checkbox" className={styles.checkbox} />
                    <p className={styles.text}>I agree with the Terms and Conditions</p>
                </div>
                <svg
                    width="123"
                    height="99"
                    viewBox="0 0 123 99"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.next}
                >
                    <path
                        d="M20.5 78.375V20.625L82 49.5L20.5 78.375Z"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linejoin="round"
                    />
                    <path d="M102.5 16.5V82.5" stroke="white" stroke-width="1.5" />
                </svg>
            </div>
        </div>
    );
};
