import styles from './styles.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <img src="/logo-gold.png" alt="logo" />
        <svg width="50" height="50" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 20 L180 170 L20 170 Z" stroke="#D4AF37" stroke-width="6" fill="none"/>

          <circle cx="100" cy="120" r="46" stroke="#D4AF37" stroke-width="6" fill="none"/>

          <line x1="100" y1="20" x2="100" y2="170" stroke="#D4AF37" stroke-width="6"/>
        </svg>
      </div>
    </header>
  )
}