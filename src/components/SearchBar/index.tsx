import styles from './styles.module.scss'

type Props = {
  value: string
  onChange: (value: string) => void
}

export const SearchBar = ({ value, onChange }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.inputWrapper}>
        <input
          type="text"
          placeholder="Search characters..."
          value={value}
          id="searchbar"
          onChange={(e) => onChange(e.target.value)}
          className={styles.input}
        />

        <span className={styles.icon}>
          <svg width="16" height="16" viewBox="0 0 24 24">
            <path
              d="M21 21l-4.35-4.35M10 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"
              stroke="white"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </div>
    </div>
  )
}