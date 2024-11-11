import React from "react";
import { createStyledLink } from "@/utils/createStyledLink";

export const BackToHome: React.FC = () => {
  return createStyledLink("/", "← Home");
};
