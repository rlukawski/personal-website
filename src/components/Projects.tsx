import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Dialog, DialogPanel, DialogBackdrop } from "@headlessui/react";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import clinic1 from "../assets/egzoclinic-1.png";
import clinic2 from "../assets/egzoclinic-2.png";

interface Screenshot {
  id: string;
  src: string;
  alt: string;
}

export const Projects = () => {
  const { t } = useTranslation();
  const [selectedScreenshotIndex, setSelectedScreenshotIndex] = useState<number | null>(null);

  const screenshots: Screenshot[] = [
    {
      id: "screen1",
      src: clinic1,
      alt: "EGZOClinic Screen 1",
    },
    {
      id: "screen2",
      src: clinic2,
      alt: "EGZOClinic Screen 2",
    },
  ];

  const handleScreenshotClick = (index: number) => {
    setSelectedScreenshotIndex(index);
  };

  const handleCloseDialog = () => {
    setSelectedScreenshotIndex(null);
  };

  const handlePrevious = () => {
    if (selectedScreenshotIndex !== null) {
      const newIndex = selectedScreenshotIndex > 0 
        ? selectedScreenshotIndex - 1 
        : screenshots.length - 1;
      setSelectedScreenshotIndex(newIndex);
    }
  };

  const handleNext = () => {
    if (selectedScreenshotIndex !== null) {
      const newIndex = selectedScreenshotIndex < screenshots.length - 1 
        ? selectedScreenshotIndex + 1 
        : 0;
      setSelectedScreenshotIndex(newIndex);
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    if (selectedScreenshotIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        handlePrevious();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'Escape') {
        handleCloseDialog();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedScreenshotIndex]);

  return (
    <section id="projects" className="mt-8 scroll-mt-24 container-width w-full">
      <h2 className="heading-2 ml-4">{t('projects.title')}</h2>
      <div className="container-body mt-2">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 md:gap-8">
          {/* Left side: Project name, description, and first miniature */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col">
              <h3 className="heading-3 mb-4">{t('projects.egzoclinic.title')}</h3>
              <p className="body-normal">{t('projects.egzoclinic.description')}</p>
            </div>
            
            {/* First miniature below description */}
            <button
              onClick={() => handleScreenshotClick(0)}
              className="relative group cursor-pointer overflow-hidden rounded-lg border-2 border-gray-200 hover:border-gray-400 transition-all duration-200 hover:shadow-lg w-full max-w-[300px] aspect-video"
            >
              <img
                src={screenshots[0].src}
                alt={screenshots[0].alt}
                className="w-full h-full object-contain transition-transform duration-200 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-200" />
            </button>
          </div>

          {/* Right side: Second miniature */}
          <div className="flex items-start">
            <button
              onClick={() => handleScreenshotClick(1)}
              className="relative group cursor-pointer overflow-hidden rounded-lg border-2 border-gray-200 hover:border-gray-400 transition-all duration-200 hover:shadow-lg w-full max-w-[200px] aspect-video"
            >
              <img
                src={screenshots[1].src}
                alt={screenshots[1].alt}
                className="w-full h-full object-contain transition-transform duration-200 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-200" />
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
        <DialogBackdrop className="fixed inset-0 bg-black/75" />
        
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <DialogPanel className="relative bg-white rounded-lg max-w-5xl max-h-[90vh] w-full overflow-auto">
            <button
              onClick={handleCloseDialog}
              className="absolute top-4 right-4 z-20 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
              aria-label="Close dialog"
            >
              <FaTimes className="w-6 h-6 text-gray-600" />
            </button>
            
            {selectedScreenshotIndex !== null && (
              <div className="relative p-4">
                {/* Left navigation arrow */}
                {screenshots.length > 1 && (
                  <button
                    onClick={handlePrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors"
                    aria-label="Previous image"
                  >
                    <FaChevronLeft className="w-5 h-5 text-gray-600" />
                  </button>
                )}
                
                {/* Image */}
                <img
                  src={screenshots[selectedScreenshotIndex].src}
                  alt={screenshots[selectedScreenshotIndex].alt}
                  className="w-full h-auto rounded-lg"
                />
                
                {/* Right navigation arrow */}
                {screenshots.length > 1 && (
                  <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors"
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

