import { useEffect, useState } from 'react'
import type { Character } from '../types/character'

export const useCharacters = () => {
  const [characters, setCharacters] = useState<Character[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://hp-api.onrender.com/api/characters')
        const data = await res.json()
        setCharacters(data)
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