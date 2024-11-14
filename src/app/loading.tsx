import React from 'react';
import styles from './styles/skeletonLoading.module.css'; // Assuming you have a CSS module for styling

const SkeletonLoading: React.FC = () => {
    return (
        <div className={styles.skeletonContainer}>
            <div className={styles.skeletonTitle}></div>
            <div className={styles.skeletonText}></div>
            <div className={styles.skeletonText}></div>
            <div className={styles.skeletonImage}></div>
        </div>
    );
};

export default SkeletonLoading;