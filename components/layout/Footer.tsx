import Link from 'next/link';
import { Scale, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-primary text-brand-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/bege-bco.png" alt="Logo" className="h-10" />
              <div className="flex flex-col">
                <span className="text-sm opacity-80">Advocacia & Consultoria</span>
              </div>
            </div>
            <p className="text-sm opacity-80 max-w-md">
              Oferecemos serviços jurídicos especializados com excelência e dedicação,
              garantindo soluções eficazes e personalizadas para cada cliente.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <div className="space-y-3 text-sm opacity-80">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Av. João Manoel, 600 <br />Center Ville, Arujá - SP, 07400-610</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(11) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>contato@manezadvocacia.com.br</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>Seg-Sex: 8h às 18h</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
            <div className="space-y-2 text-sm opacity-80">
              <Link href="/sobre" className="block hover:opacity-100 transition-opacity">
                Sobre Nós
              </Link>
              <Link href="/servicos" className="block hover:opacity-100 transition-opacity">
                Serviços
              </Link>
              <Link href="/blog" className="block hover:opacity-100 transition-opacity">
                Blog
              </Link>
              <Link href="/login" className="block hover:opacity-100 transition-opacity">
                Login
              </Link>
              <Link href="/politica-privacidade" className="block hover:opacity-100 transition-opacity">
                Política de Privacidade
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-secondary/20 mt-6 pt-6 text-center opacity-80">
          <p className="text-md mb-2">&copy; 2025 Mañez Advocacia & Consultoria. Todos os direitos reservados.</p>
          <p className="text-sm text-white"> Desenvolvido por:
            <a href="https://synctech.com.br" target="_blank" rel="noopener noreferrer"><br />
              <img src="/logo-ret-bco.png" alt="Synctech" className="h-6 inline-block mt-2" />
            </a>
          </p>
        </div>
      </div>
    </footer >
  );
}