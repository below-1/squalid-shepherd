import { faker } from '@faker-js/faker'
import { range } from '../utils/range'
import { getCollection } from 'astro:content';
import { getRandomElement } from '../utils/random';
import { colorKeys, colors } from "../utils/colors";
import type { PinnedInfoProps } from '../components/PinnedInfo.astro';

export async function getPinnedItems() {
  const pengumumanItems = await getCollection("pengumuman")
  const beritaItems = await getCollection("berita")
 
  const pinnedBerita = beritaItems.filter(b => b.data.pinned);
  const pinnedPengumuman = pengumumanItems.filter(b => b.data.pinned);

  const merged = [
    ...pinnedBerita,
    ...pinnedPengumuman
  ];
  merged.sort((a, b) => {
    return b.data.date.getTime() - a.data.date.getTime()
  });
  return merged.map((it, index) => {

    if (!it.data.pinnedMainTerm) {
      throw new Error(`For the pinned items, you should provide primary and secondary term.`);
    }

    if (!it.data.pinnedSecondaryTerm) {
      throw new Error(`For the pinned items, you should provide primary and secondary term.`);
    }

    let url: string = "";
    let image: ImageMetadata | undefined;

    if (it.collection == 'pengumuman') {
      url = `/pengumuman/${it.id}`
    } else if (it.collection == 'berita') {
      url = `/berita/${it.id}`;
      image = it.data.coverImage;
    }
    const title = it.data.title;
    const paletteKey = colorKeys[(index % colorKeys.length)];
    const date = it.data.date;
    const creator = "Admin BKD";
    
    return {
      url,
      title,
      date,
      creator,
      image,
      pinnedInfoProps: {
        paletteKey,
        mainTerm: it.data.pinnedMainTerm,
        secondaryTerm: it.data.pinnedSecondaryTerm
      }
    } as PinnedInfoProps
  });
}