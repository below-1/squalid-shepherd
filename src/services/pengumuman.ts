import { faker } from '@faker-js/faker'
import { range } from '../utils/range'
import { getCollection } from 'astro:content';

export async function getLatestPengumumanItems(n: number = 6) {
  const _items = await getCollection("pengumuman")
  _items.sort((a, b) => {
    return b.data.date.getTime() - a.data.date.getTime()
  })
  // console.log(_items)

  const total = _items.length
  const items = _items.slice(0, n).map(item => {
    return {
      id: item.id,
      creator: 'admin bkd',
      date: item.data.date,
      title: item.data.title,
    }
  })
  return {
    total,
    items
  }
}