import { FooterCTA } from "./FooterCTA";
import { FooterSitemap } from "./FooterSitemap";
import { FooterSocials } from "./FooterSocials";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 mb-8 px-12">
      {/* Horizontal line */}
      <div className="border-t border-gray-300 pt-8 pb-8">
        <div className="content-container">
          <div className="flex flex-row gap-12 justify-between width-full px-8">
            {/* Call to Action Section */}
            <FooterCTA />
            <FooterSitemap />
            <FooterSocials />
            {/* Copyright */}
          </div>

          <div className="flex flex-row width-full justify-end">
            <div className="text-center text-gray-600 text-sm pt-4">
              <p>© {currentYear} Rafał Łukawski</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
