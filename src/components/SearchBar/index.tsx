import styles from './styles.module.scss'

type Props = {
  value: string
  onChange: (value: string) => void
}

export const SearchBar = ({ value, onChange }: Props) => {
  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Buscar personagem..."
        value={value}
        id='searchbar'
        onChange={(e) => onChange(e.target.value)}
        className={styles.input}
      />
    </div>
  )
}