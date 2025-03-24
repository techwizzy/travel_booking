// app/components/Footer.jsx
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Instagram, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container px-4 py-12 md:px-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {/* Support Column */}
          <div className="space-y-4">
            <h4 className="font-semibold text-base">Support</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Iure in modi
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Officia sit laborum
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Lorem ea quis labore
                </Link>
              </li>
            </ul>
          </div>

          {/* Community Column */}
          <div className="space-y-4">
            <h4 className="font-semibold text-base">Community</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Nisi velit ut
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Pariatur elit esse
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Laborum aliquip do
                </Link>
              </li>
            </ul>
          </div>

          {/* About Column */}
          <div className="space-y-4">
            <h4 className="font-semibold text-base">About</h4>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Aute.com
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Voluptas
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Nulla iriri
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="space-y-4">
            <h4 className="font-semibold text-base">Subscribe to our newsletter</h4>
            <p className="text-sm text-gray-600">
              For announcements and exclusive deals
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter Your email"
                className="h-10 text-xs"
              />
              <Button type="submit" className="text-white shrink-0 bg-indigo-600 hover:bg-indigo-700">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600 mb-4 md:mb-0">
            &copy; 2023 Company, Inc. &bull; Privacy &bull; Terms
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Globe className="h-4 w-4" />
              <span>USD</span>
            </div>
            <div className="flex items-center gap-3">
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;