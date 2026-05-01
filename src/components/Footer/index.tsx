import { BackToTop } from '../BackToTop'
import styles from './styles.module.scss'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© 2026 Wizard App</p>
       <BackToTop />
    </footer>
  )
}