export function getAverageRating(ratings: number[]) {
    const totalRatingsSum = ratings.reduce((sum: number, rating: number) => sum += rating, 0);

    return totalRatingsSum / ratings.length;
}
