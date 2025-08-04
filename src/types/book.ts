export interface IBook {
    // TODO: edit fields
  id: string;
  imageLinks: {
    smallThumbnail: string;
    thumbnail: string;
  };
  title: string;
  authors: string[];
  publishedDate: string;
  isAvailable: boolean;
  isLiked?: boolean;
}