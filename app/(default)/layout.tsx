'use client';
import { ReactNode, useEffect, useState } from 'react';
import { SideBar } from '../../components/SideBar';
import cx from 'classnames';
import styles from './layout.module.css';

export default function Layout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    // TODO: hide from public access
    if (localStorage.getItem('exp') === '1') {
      setEnabled(true);
    }
  }, []);
  return (
    <main className={styles.main} style={{ display: enabled ? '' : 'none' }}>
      <SideBar />
      <div
        className={cx(
          'xl:relative xl:w-max xl:m-auto',
          '2xl:min-w-[75%] 2xl:w-[75%] 2xl:m-0',
        )}
      >
        {children}
      </div>
    </main>
  );
}
