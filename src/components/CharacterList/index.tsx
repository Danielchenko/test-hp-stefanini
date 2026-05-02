import { useState } from 'react'
import { CharacterCard } from '../CharacterCard'
import { useCharacters } from '../../hooks/useCharacters'
import { HouseFilter } from '../HouseFilter'
import { SkeletonCard } from '../SkeletonCard'
import { SearchBar } from '../SearchBar'
import styles from './styles.module.scss'

export const CharacterList = () => {
  const { characters, loading, error } = useCharacters()

  const [visibleCount, setVisibleCount] = useState(8)
  const [selectedHouse, setSelectedHouse] = useState('All')
  const [search, setSearch] = useState('')

  const filteredByHouse =
    selectedHouse === 'All'
      ? characters
      : characters.filter((c) => c.house?.trim() === selectedHouse)

  const filteredCharacters = filteredByHouse.filter((c) => {
    const term = search.toLowerCase()

    return (
      c.name.toLowerCase().includes(term) ||
      c.actor.toLowerCase().includes(term) ||
      c.house.toLowerCase().includes(term) ||
      c.patronus.toLowerCase().includes(term) ||
      c.species.toLowerCase().includes(term)
    )
  })

  const visibleCharacters = filteredCharacters.slice(0, visibleCount)

   const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 8)

    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',
      })
    }, 100)
  }

  return (
    <>
     <main>
      <HouseFilter
        selected={selectedHouse}
        onSelect={(house) => {
          setSelectedHouse(house)
          setVisibleCount(8)
        }}
      />

       <SearchBar value={search} onChange={(value) => {
        setSearch(value)
        setVisibleCount(8) 
      }} />
     </main>
      {!loading && !error && filteredCharacters.length === 0 && (
          <p className={styles.empty}>
            No characters found
          </p>
        )}
      {loading ? (
        <div className={styles.container}>
          {Array.from({ length: 8 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <div className={styles.container}>
            {visibleCharacters.map((character, index) => (
              <CharacterCard
                key={character.id}
                character={character}
                style={{ animationDelay: `${index * 1}s` }}
              />
            ))}
          </div>

          {visibleCount < filteredCharacters.length && (
            <div className={styles.buttonWrapper}>
              <button onClick={handleLoadMore} className={styles.button}>
                Load more
              </button>
            </div>
          )}
        </>
      )}
    </>
  )
}