import { createBoard } from '@wixc3/react-board';
import { BackupRestore } from '../../../components/backup-restore/backup-restore';

export default createBoard({
    name: 'BackupRestore',
    Board: () => <BackupRestore />,
    isSnippet: true,
    environmentProps: {
        windowHeight: 1280,
        windowWidth: 1972,
    },
});
