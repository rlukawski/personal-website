import { useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Dialog, DialogPanel, DialogBackdrop } from "@headlessui/react";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import clinic1 from "../assets/egzoclinic-1.png";
import clinic2 from "../assets/egzoclinic-2.png";

interface Screenshot {
  id: string;
  src: string;
  alt: string;
  sourceUrl?: string;
}

export const Projects = () => {
  const { t } = useTranslation();
  const [selectedScreenshotIndex, setSelectedScreenshotIndex] = useState<number | null>(null);

  const sourceUrl = "egzotech.com";

  const screenshots: Screenshot[] = [
    {
      id: "screen1",
      src: clinic1,
      alt: "EGZOClinic Screen 1",
      sourceUrl: sourceUrl,
    },
    {
      id: "screen2",
      src: clinic2,
      alt: "EGZOClinic Screen 2",
      sourceUrl: sourceUrl,
    },
  ];

  const handleScreenshotClick = (index: number) => {
    setSelectedScreenshotIndex(index);
  };

  const handleCloseDialog = useCallback(() => {
    setSelectedScreenshotIndex(null);
  }, []);

  const handlePrevious = useCallback(() => {
    if (selectedScreenshotIndex !== null) {
      const newIndex = selectedScreenshotIndex > 0 
        ? selectedScreenshotIndex - 1 
        : screenshots.length - 1;
      setSelectedScreenshotIndex(newIndex);
    }
  }, [selectedScreenshotIndex, screenshots.length]);

  const handleNext = useCallback(() => {
    if (selectedScreenshotIndex !== null) {
      const newIndex = selectedScreenshotIndex < screenshots.length - 1 
        ? selectedScreenshotIndex + 1 
        : 0;
      setSelectedScreenshotIndex(newIndex);
    }
  }, [selectedScreenshotIndex, screenshots.length]);

  // Handle keyboard navigation
  useEffect(() => {
    if (selectedScreenshotIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrevious();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'Escape') {
        handleCloseDialog();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedScreenshotIndex, handlePrevious, handleNext, handleCloseDialog]);

  return (
    <section id="projects" className="mt-8 scroll-mt-24 container-width w-full">
      <h2 className="heading-2 ml-4">{t('projects.title')}</h2>
      <div className="container-body mt-2">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 md:gap-8">
          {/* Left side: Project name and description */}
          <div className="flex flex-col">
            <h3 className="heading-3 mb-0">{t('projects.egzoclinic.title')}</h3>
            <p className="text-sm text-gray-500 mb-2">{t('projects.egzoclinic.dateRange')}</p>
            <p className="text-sm text-muted">{t('projects.egzoclinic.description')}</p>
          </div>

          {/* Right side: First miniature next to name and description */}
          <div className="flex items-center">
            <button
              onClick={() => handleScreenshotClick(0)}
              className="relative group cursor-pointer overflow-hidden rounded-lg border-2 border-gray-200 hover:border-gray-400 transition-all duration-200 hover:shadow-lg w-full max-w-[200px] bg-gray-50 p-1"
            >
              <img
                src={screenshots[0].src}
                alt={screenshots[0].alt}
                className="w-full h-auto block rounded transition-transform duration-200 group-hover:scale-105"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Dialog for full screenshot with navigation */}
      <Dialog
        open={selectedScreenshotIndex !== null}
        onClose={handleCloseDialog}
        className="relative z-50"
      >
        <DialogBackdrop 
          className="fixed inset-0 bg-black/75 transition-opacity duration-300 ease-out" 
        />
        
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <DialogPanel 
            className="relative bg-white rounded-lg max-w-5xl max-h-[90vh] w-full overflow-auto transform transition-all duration-300 ease-out"
            style={{
              animation: selectedScreenshotIndex !== null 
                ? 'dialogEnter 0.3s ease-out' 
                : undefined
            }}
          >
            <button
              onClick={handleCloseDialog}
              className="absolute top-4 right-4 z-20 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-all duration-200 hover:scale-110"
              aria-label="Close dialog"
            >
              <FaTimes className="w-6 h-6 text-gray-600" />
            </button>
            
            {selectedScreenshotIndex !== null && (
              <div className="relative p-4 min-h-[200px]">
                {/* Left navigation arrow */}
                {screenshots.length > 1 && (
                  <button
                    onClick={handlePrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-all duration-200 hover:scale-110 active:scale-95"
                    aria-label="Previous image"
                  >
                    <FaChevronLeft className="w-5 h-5 text-gray-600" />
                  </button>
                )}
                
                {/* Image */}
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    key={selectedScreenshotIndex}
                    src={screenshots[selectedScreenshotIndex].src}
                    alt={screenshots[selectedScreenshotIndex].alt}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                
                {/* Source */}
                {screenshots[selectedScreenshotIndex].sourceUrl && (
                  <div className="mt-4 text-right">
                    <span className="text-sm text-gray-600">
                      Source: {screenshots[selectedScreenshotIndex].sourceUrl}
                    </span>
                  </div>
                )}
                
                {/* Right navigation arrow */}
                {screenshots.length > 1 && (
                  <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-all duration-200 hover:scale-110 active:scale-95"
                    aria-label="Next image"
                  >
                    <FaChevronRight className="w-5 h-5 text-gray-600" />
                  </button>
                )}
              </div>
            )}
          </DialogPanel>
        </div>
      </Dialog>
    </section>
  );
};

