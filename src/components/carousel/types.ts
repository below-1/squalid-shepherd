export type PostLikeItem = {
	imageUrl: undefined;

  active?: boolean;

	url: string;
	image?: ImageMetadata;
	title: string;
	subtitle: string;
}

export type ImageLikeItem = {
	imageUrl?: ImageMetadata;
	description: string;
  active?: boolean;
}

export type CarouselItem = ImageLikeItem | PostLikeItem;