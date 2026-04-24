import React from "react";
import {
  FiFacebook,
  FiAperture,
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-gray-300 mt-20 border-t border-slate-700">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Tentang Kami</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Platform GO-TTE Kabupaten Lingga menyediakan layanan
              digital untuk proses administrasi dan TTE (Tanda Tangan
              Elektronik) yang aman dan terpercaya.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Menu Cepat</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/user/dashboard"
                  className="text-gray-400 hover:text-blue-400 transition duration-200"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="/user/telegram"
                  className="text-gray-400 hover:text-blue-400 transition duration-200"
                >
                  Telegram
                </a>
              </li>
              <li>
                <a
                  href="/user/tte-status"
                  className="text-gray-400 hover:text-blue-400 transition duration-200"
                >
                  Status TTE
                </a>
              </li>
              <li>
                <a
                  href="/profile"
                  className="text-gray-400 hover:text-blue-400 transition duration-200"
                >
                  Profil
                </a>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Informasi</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <FiMapPin className="text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  Jl. Engku Aman Kelang, Daik, Kabupaten Lingga, Kepulauan Riau.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <FiMail className="text-blue-400 flex-shrink-0" />
                <span className="ext-gray-400">diskominfo@linggakab.go.id</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg">Ikuti Kami</h3>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/diskominfo.lingga/?locale=id_ID"
                target="_blank"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition duration-200"
                title="Facebook"
              >
                <FiFacebook className="text-gray-300" />
              </a>
              <a
                href="https://diskominfo.linggakab.go.id/"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition duration-200"
                target="_blank"
                title="Website"
              >
                <FiAperture className="text-gray-300" />
              </a>
              <a
                href="mailto:diskominfo@linggakab.go.id"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition duration-200"
                target="_blank"
                title="Email"
              >
                <FiMail className="text-gray-300" />
              </a>
            </div>
            <p className="text-xs text-gray-500 pt-2">
              Hubungi kami melalui media sosial resmi
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-8 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            {/* Copyright */}
            <div className="text-sm text-gray-400">
              <p>
                © {currentYear}{" "}
                <span className="font-semibold">Kabupaten Lingga</span>. Semua
                hak dilindungi.
              </p>
            </div>

            {/* Additional Links */}
            <div className="text-sm text-gray-400 md:text-right space-x-4">

            </div>
          </div>

          {/* Version Info */}
          <div className="text-xs text-gray-500 mt-4 pt-4 border-t border-slate-700">
            <p>Platform GO-TTE v1.0 - Powered by Diskominfo Kabupaten Lingga</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
