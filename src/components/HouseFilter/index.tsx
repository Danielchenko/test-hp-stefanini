import styles from './styles.module.scss'

type Props = {
  selected: string
  onSelect: (house: string) => void
}

const houses = ['All', 'Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff']

export const HouseFilter = ({ selected, onSelect }: Props) => {
  return (
    <div className={styles.container}>
      {houses.map((house) => (
        <button
          key={house}
          onClick={() => onSelect(house)}
          className={`${styles.button} ${
            selected === house ? styles.active : ''
          }`}
        >
          {house}
        </button>
      ))}
    </div>
  )
}