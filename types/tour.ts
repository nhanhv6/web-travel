export interface Tour {
  id: string;
  slug: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  duration: string;
  imageGallery: string[];
  itinerary: string;
  included: string;
  excluded: string;
  image: string;
  distance: string;
  difficulty: string;
  groupSize: string;
  time: {
    start: string;
    end: string;
  };
  content: string;
}
