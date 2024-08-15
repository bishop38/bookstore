'use client';

import Link from 'next/link';

import styles from './HeaderLogo.module.scss';

export default function HeaderLogo() {

    return (
        <div className={styles['header-logo']}>
            <Link className={styles['header-logo__link']} href="/home" replace>
                <span style={{fontSize: '32px'}}>BookStore</span>
            </Link>
        </div>
    )
}