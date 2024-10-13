"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from 'react';
import styles from './cost.module.scss';

const Cost = ({ oldCost, costNew }) => {
  const { data: session } = useSession(); // Отримуємо сесію з useSession

  if (!session) {
    return (
      <Link href={`/api/auth/signin`} className={styles.tooltip}>
        logIn
        <span className={styles.tooltiptext}> Побачити ціну </span>
      </Link>
    );
  } 
  

  return (
    <div className={styles.Cost}>
      <div className={styles.OldCost}>{oldCost}</div>
      <div className={styles.NewCost}>{costNew}</div>
    </div>
  );
};

export default Cost;
