import { faker } from '@faker-js/faker'
import { range } from '../utils/range'
import { getCollection } from 'astro:content';

export async function getLatestBeritaItems(n: number = 10) {
  const _items = await getCollection("berita")
  _items.sort((a, b) => {
    return b.data.date.getTime() - a.data.date.getTime()
  })

  const total = _items.length
  const items = _items.slice(0, n).map(item => {
    return {
      id: item.id,
      creator: 'admin bkd',
      date: item.data.date,
      title: item.data.title,
      image: item.data.coverImage
    }
  })
  return {
    total,
    items
  }
}