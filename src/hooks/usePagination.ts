import { useState, useMemo, useCallback } from "react";
import { PaginationConfig, PaginationResult } from "@/types";
import { calculateTotalPages } from "@/utils/pagination/calculateTotalPages";
import { getPaginatedItems } from "@/utils/pagination/getPaginatedItems";
import { getNextPage } from "@/utils/pagination/getNextPage";

export const usePagination = <T>({
  items,
  itemsPerPage,
  initialPage = 1,
}: PaginationConfig<T>): PaginationResult<T> => {
  const [currentPage, setCurrentPage] = useState<number>(initialPage);

  const totalPages = useMemo(
    () => calculateTotalPages(items.length, itemsPerPage),
    [items, itemsPerPage]
  );

  const paginatedItems = useMemo(
    () => getPaginatedItems(items, currentPage, itemsPerPage),
    [items, currentPage, itemsPerPage]
  );

  const handlePageChange = useCallback(
    (direction: "next" | "prev") => {
      setCurrentPage((prevPage) =>
        getNextPage(prevPage, direction, totalPages)
      );
    },
    [totalPages]
  );

  return {
    currentPage,
    totalPages,
    paginatedItems,
    handlePageChange,
  };
};
