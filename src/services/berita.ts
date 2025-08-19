import { faker } from '@faker-js/faker'
import { range } from '../utils/range'

export async function getLatestBeritaItems() {
  const n = 12
  const total = faker.number.int({ min: 32, max: 70 })
  const items = range(n).map(i => {
    return {
      id: i + 77,
      creator: 'admin bkd',
      date: faker.date.past(),
      title: faker.lorem.sentence(12),
      image: `/images/carousel-${(i % 4) + 1}.jpg`
    }
  })
  return {
    total,
    items
  }
}