export const calculateTotalPages = (
  totalItems: number,
  itemsPerPage: number
): number => Math.ceil(totalItems / itemsPerPage);
