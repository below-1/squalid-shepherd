import { faker } from '@faker-js/faker'
import { range } from '../utils/range'

export async function getGallerySnapshoot() {
  const n = 12
  const total = faker.number.int({ min: 32, max: 70 })
  const galleryImages = import.meta.glob<{ default: ImageMetadata }>("/src/images/gallery/*.{jpeg,jpg,png,gif}")
  console.log(galleryImages)
  console.log("galleryImages")

  const items = range(n).map(i => {
    const image = galleryImages[`/src/images/gallery/${((i + 1) % 8) + 1}.jpg`]
    // console.log(image)
    return {
      id: i,
      creator: faker.internet.username(),
      date: faker.date.past(),
      description: faker.lorem.sentence(12),
      image
    }
  })
  return {
    total,
    items
  }
}