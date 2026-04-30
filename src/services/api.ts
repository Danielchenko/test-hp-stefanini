
export const fetchCharacters = async () => {
  const response = await fetch('https://hp-api.onrender.com/api/characters')
  return response.json()
}