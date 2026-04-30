import { CharacterCard } from '../CharacterCard'
import { useCharacters } from '../../hooks/useCharacters'
import styles from './styles.module.scss'

export const CharacterList = () => {
  const { characters, loading, error } = useCharacters()

  if (loading) return <p className={styles.state}>Carregando...</p>
  if (error) return <p className={styles.state}>{error}</p>

  return (
    <div className={styles.container}>
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  )
}