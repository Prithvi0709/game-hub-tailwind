export default interface FetchResponse {
  background_image: string;
  name: string;
  id: number;
  metacritic: number;
  rating: number;
  suggestions_count: number;
  rating_top: number;
  released: string;
  esrb_rating: {
    id: number;
    name: string;
  };
  platforms: {
    platform: { id: number; name: string; slug: string };
  }[];
}

export interface GenreData {
  image_background: string;
  name: string;
  id: number;
}

// Just for testing purposes

// interface FetchResponseTest {
//   id: number;
//   rating: number;
//   images: string[];
//   thumbnail: string;
//   title: string;
//   stock: number;
// }
