export type Product = {
  name: string;
  description: string;
  price: string;
  id: string;
};

export interface PaginationConfig<T> {
  items: T[];
  itemsPerPage: number;
  initialPage?: number;
}

export interface PaginationResult<T> {
  currentPage: number;
  totalPages: number;
  paginatedItems: T[];
  handlePageChange: (direction: "next" | "prev") => void;
}
