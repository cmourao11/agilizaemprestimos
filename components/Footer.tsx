import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface-dark text-gray-300 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="font-bold text-2xl text-white">A</span>
              </div>
              <span className="font-bold text-xl text-white">Agiliza</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Sua parceira para soluções de crédito consignado. Agilidade e confiança para servidores públicos.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-white tracking-wider uppercase mb-6">Navegação</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary transition-colors">Início</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary transition-colors">Sobre Nós</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-primary transition-colors">Dúvidas Frequentes</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary transition-colors">Contato</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white tracking-wider uppercase mb-6">Contato</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <span className="material-icons-outlined text-primary mt-1">location_on</span>
                <span className="text-sm">Edifício Copas Verde, 1º andar, Sala 23, 104 Sul Rua SE 3, Palmas, TO, 77020016</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-icons-outlined text-primary">call</span>
                <span className="text-sm">(63) 98483-2805</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-icons-outlined text-primary">email</span>
                <span className="text-sm">contato@agilizacredito.com</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-white tracking-wider uppercase mb-6">Redes Sociais</h4>
            <div className="flex gap-4">
               <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-all hover:scale-110">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8KyY_40boV2BjZMZkk1EAfsv0xHR6D3GtoeYxhMRDtLq6F5gniryd8ZTBZTgNZv7TOl3tSpk_aNSlDR1eLfpH7o0_u1SE2ZqZbOTg-4BavIliruA_TOan7E7H-fmsC9TpBvD6L0Xtca6tOvKdFWvW3zTPy8OirUa9eigOywyvFok1SMJJpNyv2-KUisgr38Ns4k7H0XxUGTu4gRNT6gFvYWhi0Gvmy9w31uMUvdtpQI6Wuf3A2hln8i_aPXSNxJMugHa-4zrGMsA" alt="Instagram" className="w-5 h-5 invert opacity-80 hover:opacity-100" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-all hover:scale-110">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNGFk0-tzAOv0QxHOc6uKof0B0Sq6LHz2g984EdQQlVYwzpF7dmnRlvcC2A0uPK7gutYJ5fIazTWCuhrc13BzFLSRb4h4lz68-JGWROh-9ZvPMK9jyQbe_F5Aj_ntF-cV_2MFUT3Dn4jm9oxIh4EobPfo5sIHq4nKduAd_fDk5DuYWVngKisXdG4k_D7Sq26C50M3SZLI-ALu_rljdxCplSzOFUUEQgIICBlstdCQgd5J8FCyAmrZ5giubMc-rG4W6QEb977DQGqI" alt="Facebook" className="w-5 h-5 invert opacity-80 hover:opacity-100" />
              </a>
              <a href="https://wa.me/5563984832805" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-all hover:scale-110">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8rTvSnYDGy_XIjNzbAL8N9CeCEHDUddGbbLTy6SxFEsf4Rez9snDLzeQ5sH29___ShysRxFN7EREOpQtvRucc23pDk52AZTIfQfVDnAWVcCLqohukBPguuQGHsISN9WkvIm3bhhNUBI_T_hyYsPn193AxXCdJanByWsn7p0EsS4pxqC9jczB7u0B_F5Inl-wijk_MfZrQdcq6Fi3Vk0fcqKfz3m8Cw8-PKDxNDybbBccXlBvk7JRFkng8X1WOf5N0qKOYOVhMvBU" alt="WhatsApp" className="w-5 h-5 invert opacity-80 hover:opacity-100" />
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-xs text-gray-500 text-center">
                <p>© 2024 Agiliza Crédito e Soluções. <br/>Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;