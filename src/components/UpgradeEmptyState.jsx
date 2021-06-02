import React, { useState } from "react";
import { useAuth } from "../lib/auth";
import { createCheckoutSession } from "../lib/db";

const UpgradeEmptyState = () => {
  const { user } = useAuth();
  const [isCheckoutLoading, setCheckoutLoading] = useState(false);
  return (
    <button
      onClick={() => {
        setCheckoutLoading(true);
        createCheckoutSession(user.uid);
      }}
      backgroundColor="gray.900"
      color="white"
      fontWeight="medium"
      isLoading={isCheckoutLoading}
      _hover={{ bg: "gray.700" }}
      _active={{
        bg: "gray.800",
        transform: "scale(0.95)",
      }}
    >
      Upgrade to Learn
    </button>
  );
};
export default UpgradeEmptyState;
