"use client";

import React, { useState, useEffect } from "react";
import { InlineWidget } from "react-calendly";
import { motion } from "framer-motion";

interface CalendlyEmbedProps {
  url: string;
}

const CalendlyEmbed: React.FC<CalendlyEmbedProps> = ({ url }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Use setTimeout to simulate loading and auto-display the calendar
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1500); // Reduced loading time for better UX

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        <InlineWidget
          url={url}
          styles={{
            height: "650px",
            width: "100%",
          }}
          pageSettings={{
            backgroundColor: "121212",
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
            primaryColor: "946fff",
            textColor: "ffffff",
          }}
          prefill={{
            email: "",
            firstName: "",
            lastName: "",
            name: "",
          }}
          utm={{
            utmCampaign: "portfolio",
            utmContent: "contact_page",
            utmMedium: "website",
            utmSource: "luansingjavier.info",
            utmTerm: "booking",
          }}
        />
      </motion.div>

      {!isLoaded && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isLoaded ? 0 : 1 }}
          className="h-[650px] w-full flex items-center justify-center"
        >
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-2 border-t-accent border-r-accent border-b-transparent border-l-transparent mb-4"></div>
            <p className="text-gray-400">Loading calendar...</p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default CalendlyEmbed;
