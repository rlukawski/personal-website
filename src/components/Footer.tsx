import { FooterCTA } from "./FooterCTA";
import { FooterSitemap } from "./FooterSitemap";
import { FooterSocials } from "./FooterSocials";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 mb-8 px-12">
      {/* Horizontal line */}
      <div className="border-t border-gray-300 pt-12 pb-8">
        <div className="flex flex-row gap-12 justify-between width-full px-8">
          {/* Call to Action Section */}
          <FooterCTA />
          <FooterSitemap />
          <FooterSocials />
          {/* Copyright */}
        </div>
      </div>
      <div className="flex flex-row width-full">
        <div className="text-center text-gray-600 text-sm pt-4 border-t border-gray-200">
          <p>© {currentYear} Rafał Łukawski</p>
        </div>
      </div>
    </footer>
  );
};
