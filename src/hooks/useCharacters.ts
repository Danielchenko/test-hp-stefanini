import { useEffect, useState } from 'react'
import type { Character } from '../types/character'
import { fetchCharacters } from '../services/api'

export const useCharacters = () => {
  const [characters, setCharacters] = useState<Character[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchCharacters()
        setCharacters(res)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setError('Erro ao carregar personagens')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  return { characters, loading, error }
}