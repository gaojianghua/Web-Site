import clsx from 'clsx';
import type { NextPage } from 'next';
import styles from './index.module.scss'

const Custom404: NextPage = () => {
    return (<div className={clsx(styles.custom404)}>
        <div className={clsx(styles.child)}></div>
    </div>);
};

export default Custom404;