import { faker } from '@faker-js/faker'
import { range } from '../utils/range'

export async function getLatestPengumumanItems() {
  const n = 6
  const total = faker.number.int({ min: 32, max: 70 })
  const items = range(n).map(i => {
    return {
      id: i + 1,
      creator: 'admin bkd',
      date: faker.date.past(),
      title: faker.lorem.sentence(12),
    }
  })
  return {
    total,
    items
  }
}