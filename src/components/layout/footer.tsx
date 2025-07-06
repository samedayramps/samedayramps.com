import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t bg-slate-800 text-white">
      <div className="container px-4 py-16 md:px-6">
        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-white">Same Day Ramps</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Fast, professional wheelchair ramp rentals in Dallas-Fort Worth.
              Installation in as little as 24 hours.
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Wheelchair Ramp Rentals
                </Link>
              </li>
              <li>
                <Link
                  href="/services/post-surgery-ramps"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Post-Surgery Recovery
                </Link>
              </li>
              <li>
                <Link
                  href="/services/aging-in-place-ramps"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Aging in Place
                </Link>
              </li>
              <li>
                <Link
                  href="/services/transitional-hospice-ramps"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Transitional & Hospice
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Dallas-Fort Worth Area</li>
              <li>
                <Link
                  href="tel:+1234567890"
                  className="hover:text-white transition-colors"
                >
                  (123) 456-7890
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:info@samedayramps.com"
                  className="hover:text-white transition-colors"
                >
                  info@samedayramps.com
                </Link>
              </li>

            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-700 pt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-gray-300">
            © 2024 Same Day Ramps. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 text-sm">
            <Link
              href="/privacy"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 