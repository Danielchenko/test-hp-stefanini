import styles from './styles.module.scss'

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>Wizard Characters</h1>
        <p className={styles.subtitle}>
          Explore the magical world and discover powerful wizards
        </p>
      </div>
    </section>
  )
}