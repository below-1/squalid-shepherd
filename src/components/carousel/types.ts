export type PostLikeItem = {
	imageUrl: undefined;

  active?: boolean;

	url: string;
	image: string;
	title: string;
	subtitle: string;
}

export type ImageLikeItem = {
	imageUrl: string;
	description: string;
  active?: boolean;
}

export type CarouselItem = ImageLikeItem | PostLikeItem;