import React, { useState } from 'react'; // Import React and useState
import classNames from 'classnames';
import styles from './login.module.scss';

export interface LoginProps {
  className?: string;
}

export const Login = ({ className }: LoginProps) => {
  // Create a state variable to hold the input value
  const [email, setEmail] = useState('abcde@gmail.com');

  // Define an onChange handler to update the email state
  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setEmail(event.target.value);
  };

  return (
    <div className={classNames(styles.root, className)}>
      <div className={styles['login-div']}>
        <div className={styles.email}>
          <h4 className={styles.label}>Email</h4>
          <h4>
            <input
              className={styles['input']}
              value={email} // Bind the value to the 'email' state
              onChange={handleChange} // Attach the onChange handler
            />
          </h4>
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
          <h4 className={styles.label}>Password</h4>
          <h4 className={styles['password-text']}>
            <input
              className={styles['input']}
              value="abcde@gmail.com"
              type="password"
              onChange={handleChange}
            />
          </h4>
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
        <div className={styles['sign-in']}>
          <button className={styles.button}>Sign In</button>
        </div>
        <div className={styles['reg-forgot']}>
          <button className={styles.register}>Register</button>
          <button className={styles['forgot-password']}>Forgot Password?</button>
        </div>
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
