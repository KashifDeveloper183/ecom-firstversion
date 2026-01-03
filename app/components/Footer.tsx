import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-white/40 dark:bg-black/40 backdrop-blur-lg border-t border-white/20 dark:border-zinc-800/40 mt-10">
      <div className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-zinc-700 dark:text-zinc-300">
        
        {/* Brand */}
        <div>
          <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">My Shop</h2>
          <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400 max-w-xs">
            Your trusted store for quality products at the best prices.  
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-lg">
            <FaFacebookF className="cursor-pointer hover:text-pink-600 transition" />
            <FaInstagram className="cursor-pointer hover:text-pink-600 transition" />
            <FaTwitter className="cursor-pointer hover:text-pink-600 transition" />
            <FaYoutube className="cursor-pointer hover:text-pink-600 transition" />
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-medium text-zinc-900 dark:text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a className="hover:text-pink-600 transition" href="#">Home</a></li>
            <li><a className="hover:text-pink-600 transition" href="#">Products</a></li>
            <li><a className="hover:text-pink-600 transition" href="#">Categories</a></li>
            <li><a className="hover:text-pink-600 transition" href="#">Contact</a></li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="font-medium text-zinc-900 dark:text-white mb-3">Customer Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a className="hover:text-pink-600 transition" href="#">Help Center</a></li>
            <li><a className="hover:text-pink-600 transition" href="#">Shipping Info</a></li>
            <li><a className="hover:text-pink-600 transition" href="#">Returns & Refunds</a></li>
            <li><a className="hover:text-pink-600 transition" href="#">Track Order</a></li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h3 className="font-medium text-zinc-900 dark:text-white mb-3">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li><a className="hover:text-pink-600 transition" href="#">Privacy Policy</a></li>
            <li><a className="hover:text-pink-600 transition" href="#">Terms of Service</a></li>
            <li><a className="hover:text-pink-600 transition" href="#">Cookies Policy</a></li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/30 dark:border-zinc-800/40 mt-8 py-4 text-center text-xs text-zinc-600 dark:text-zinc-500">
        © {new Date().getFullYear()} My Shop. All rights reserved.
      </div>
    </footer>
  );
}
