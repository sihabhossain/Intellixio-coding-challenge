import React from "react";

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (direction: "next" | "prev") => void;
}

export const PaginationControls: React.FC<PaginationControlsProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => (
  <div className="flex justify-between">
    <button onClick={() => onPageChange("prev")} disabled={currentPage === 1}>
      ← Previous
    </button>
    <span>
      Page {currentPage} of {totalPages}
    </span>
    <button
      onClick={() => onPageChange("next")}
      disabled={currentPage === totalPages}
    >
      Next →
    </button>
  </div>
);
