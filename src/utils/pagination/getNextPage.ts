const PAGINATION_ERROR_MESSAGE = "Error: Unable to change page";

export const getNextPage = (
  currentPage: number,
  direction: "next" | "prev",
  totalPages: number
): number => {
  if (direction === "next" && currentPage < totalPages) {
    return currentPage + 1;
  } else if (direction === "prev" && currentPage > 1) {
    return currentPage - 1;
  }
  console.error(PAGINATION_ERROR_MESSAGE);
  return currentPage;
};
