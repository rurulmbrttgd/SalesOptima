import classNames from 'classnames';
import styles from './backup-restore.module.scss';
import { Sidebar } from '../sidebar/sidebar';
import { Topbar } from '../topbar/topbar';
import Dashboard_module from '../dashboard/dashboard.module.scss';

export interface BackupRestoreProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */

export const BackupRestore = ({ className }: BackupRestoreProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={Dashboard_module['home-dashboard']}>
                <div>
                    <Topbar />
                </div>
                <div className={Dashboard_module.content}>
                    <Sidebar />
                    <h1 className={styles.title}>Data Backup</h1>
                    <h1 className={styles.title2}>Restore Data</h1>
                    <div className={styles.dataBackup}>
                        <div className={styles.mainBackup}>
                            <button className={styles.DownloadData}>Download Data</button>
                            <div className={styles.backUp}>
                                <p className={styles.text}>
                                    From
                                    <select className={styles.dropdown}>
                                        <option>Seleect Month</option>
                                        <option>January</option>
                                        <option>February</option>
                                        <option>March</option>
                                        <option>April</option>
                                        <option>May</option>
                                    </select>
                                </p>
                                <p className={styles.text}>
                                    To
                                    <select className={styles.dropdown}>
                                        <option>Seleect Month</option>
                                        <option>January</option>
                                        <option>February</option>
                                        <option>March</option>
                                        <option>April</option>
                                        <option>May</option>
                                    </select>
                                </p>
                            </div>
                        </div>
                        <div className={styles.mainRestore}>
                            <div className={styles.Restore}>
                                <input type="file" className={styles.fileUpload} />
                            </div>
                            <button className={styles.import}>Import</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
