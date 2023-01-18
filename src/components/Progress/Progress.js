import styles from './Progress.module.css';

export const Progress = ({ percent, name }) => {
  const size = {
    width: `${percent}%`,
  };
  return (
    <div>
      <div className={styles.containerStyles}>
        <h4 className={styles.border}>{name}</h4>
        <div className={styles.fillerStyles} style={size}>
          <span className={styles.labelStyles}>{`${percent}%`}</span>
        </div>
      </div>
    </div>
  );
};
