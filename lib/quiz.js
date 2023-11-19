import { endpoint } from '@/utils/endpoint'

export async function getQuizQuestion() {}

export async function getRandomQuizQuestion() {
  const data = await fetch(`${endpoint}/quiz/random`, { cache: 'no-store' })

  if (!data.ok) {
    throw new Error('Failed to fetch data')
  }

  return data.json()
}
