import styles from './styles.module.scss'
import type { Character } from '../../types/character'

type Props = {
  character: Character
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
      />

      <div className={styles.card__content}>
        <h2 className={styles.card__name}>{name}</h2>

        <p><strong>Nascimento:</strong> {dateOfBirth || 'Desconhecido'}</p>
        <p><strong>Casa:</strong> {house || 'Desconhecida'}</p>
        <p><strong>Patrono:</strong> {patronus || 'Desconhecido'}</p>
        <p><strong>Ator:</strong> {actor || 'Não informado'}</p>

        <span
          className={`${styles.card__status} ${
            alive ? styles.alive : styles.dead
          }`}
        >
          {alive ? 'Vivo' : 'Morto'}
        </span>
      </div>
    </div>
  )
}