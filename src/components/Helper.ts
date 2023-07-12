export default interface FetchResponse {
  background_image: string;
  name: string;
  id: number;
  metacritic: number;
  platforms: {
    platform: { id: number; name: string; slug: string };
  }[];
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
