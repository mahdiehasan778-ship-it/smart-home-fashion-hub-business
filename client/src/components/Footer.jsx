// src/components/layout/Footer.jsx
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Home } from "lucide-react";
import { footerLinks } from "../../data/trustSectionData";

const socialIconMap = {
  facebook: Facebook,
  instagram: Instagram,
  twitter: Twitter,
  youtube: Youtube,
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-blue-950 text-blue-100">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand + socials */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Home size={22} className="text-orange-400" />
            <span className="text-white font-bold text-lg leading-tight">
              Smart Home & Fashion Hub
            </span>
          </div>
          <p className="text-sm text-blue-200 leading-relaxed mb-4">
            Delivering the best for your home and style — curated deals across
            smart home, kitchen, fashion, and beauty.
          </p>
          <div className="flex gap-3">
            {footerLinks.socials.map((social) => {
              const Icon = socialIconMap[social.id];
              return (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.id}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-orange-500 flex items-center justify-center transition-colors"
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2.5">
            {footerLinks.quickLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-sm hover:text-orange-400 transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h4 className="text-white font-semibold mb-4">Customer Service</h4>
          <ul className="space-y-2.5">
            {footerLinks.customerService.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-sm hover:text-orange-400 transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <Mail size={15} className="mt-0.5 flex-shrink-0" />
              <a href={`mailto:${footerLinks.contact.email}`} className="hover:text-orange-400">
                {footerLinks.contact.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Phone size={15} className="mt-0.5 flex-shrink-0" />
              <a href={`tel:${footerLinks.contact.phone}`} className="hover:text-orange-400">
                {footerLinks.contact.phone}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={15} className="mt-0.5 flex-shrink-0" />
              <span>{footerLinks.contact.address}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Affiliate disclosure */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5">
          <p className="text-xs text-blue-300 leading-relaxed">
            <strong className="text-blue-100">Affiliate Disclosure:</strong> Smart Home
            & Fashion Hub participates in affiliate programs including Amazon Associates,
            Walmart, Target, Best Buy, eBay, and Home Depot. We may earn a commission on
            qualifying purchases made through links on this site, at no additional cost
            to you. Product prices and availability are accurate as of the date shown and
            are subject to change.
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-blue-300">
            © {year} Smart Home & Fashion Hub. All rights reserved.
          </p>
          <p className="text-xs text-blue-300">
            Built with care for smarter homes & better style.
          </p>
        </div>
      </div>
    </footer>
  );
}