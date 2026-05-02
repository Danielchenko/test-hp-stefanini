import styles from './styles.module.scss'
import type { Character } from '../../types/character'

type Props = {
  character: Character
  style?: React.CSSProperties
}

export const CharacterCard = ({ character }: Props) => {
  const {
    name,
    image,
    dateOfBirth,
    house,
    patronus,
    actor,
    alive,
  } = character

  return (
    <div className={styles.card}>
      <img
        src={image || '/fallback.png'}
        alt={name}
        className={styles.card__image}
        onError={(e) => {
          e.currentTarget.src = '/fallback.png'
        }}
      />

      <div className={styles.card__content}>
        <h2 className={styles.card__name}>{name}</h2>

        <p><strong>Birth:</strong> {dateOfBirth || 'Unknown'}</p>
        <p><strong>House:</strong> {house || 'Unknown'}</p>
        <p><strong>Patronus:</strong> {patronus || 'Unknown'}</p>
        <p><strong>Actor:</strong> {actor || 'Not informed'}</p>

        <span
          className={`${styles.card__status} ${
            alive ? styles.alive : styles.dead
          }`}
        >
          {alive ? 'Alive' : 'Dead'}
        </span>
      </div>
    </div>
  )
}