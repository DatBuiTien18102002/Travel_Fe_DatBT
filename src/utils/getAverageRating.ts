import { reviewType } from "@/types/types";

const getAverageRating = (reviews: reviewType[]) => {
  const totalRating = reviews.reduce((total: number, item: reviewType) => {
    if (item.rating) {
      return total + item.rating;
    }
    return total;
  }, 0);

  return reviews.length ? totalRating / reviews.length : 0;
};

export default getAverageRating;
