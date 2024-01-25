import { useState } from 'react';
import classNames from 'classnames';
import { ReactComponent as ReactLogo } from './assets/react.svg';
import { ReactComponent as ViteLogo } from './assets/vite.svg';
import { ReactComponent as TypescriptLogo } from './assets/typescript.svg';
import { ReactComponent as ScssLogo } from './assets/scss.svg';
import styles from './App.module.scss';
import { Login } from './components/login/login';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className={styles.App}>
            <Login></Login>
        </div>
    );
}

export default App;
