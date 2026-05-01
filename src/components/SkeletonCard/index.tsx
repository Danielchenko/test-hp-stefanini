import styles from './styles.module.scss'

export const SkeletonCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.image} />
      <div className={styles.content}>
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.lineShort} />
      </div>
    </div>
  )
}