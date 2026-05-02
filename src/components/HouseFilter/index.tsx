import styles from './styles.module.scss'

type Props = {
  selected: string
  onSelect: (house: string) => void
}

const houses = ['All', 'Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff']

const houseIcons: Record<string, string> = {
  Gryffindor: '/Gryffindor.png',
  Slytherin: '/Slytherin.png',
  Ravenclaw: '/Ravenclaw.png',
  Hufflepuff: '/Hufflepuff.png',
}

export const HouseFilter = ({ selected, onSelect }: Props) => {
  return (
    <div className={styles.container}>
      {houses.map((house) => (
        <button
          key={house}
          data-house={house}
          onClick={() => onSelect(house)}
          className={`${styles.button} ${
            selected === house ? styles.active : ''
          }`}
        >
          {house !== 'All' && (
            <img
              src={houseIcons[house]}
              alt={house}
              className={styles.icon}
            />
          )}

          {house}
        </button>
      ))}
    </div>
  )
}