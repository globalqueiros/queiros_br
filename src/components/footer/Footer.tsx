import { Mail, MapPinned } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-blue-900 text-white py-5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10">
                    <div>
                        <Image
                            src="/logo_branco.png"
                            width={200}
                            height={200}
                            alt="Logo da Corporação Queirós"
                        />
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold mb-3">Sobre Nós</h2>
                        <ul className="space-y-2 text-sm my-2 text-gray-300 text-base">
                            <li><a href="/quem_somos" className="hover:underline">Quem Somos</a></li>
                            <li><a href="/contato" className="hover:underline">Subsidiárias</a></li>
                            <li><a href="/contato" className="hover:underline">Contato</a></li>
                        </ul>
                    </div>  
                    <div>
                        <h2 className="text-lg font-semibold mb-3">Links Úteis</h2>
                        <ul className="space-y-2 text-sm my-2 text-gray-300">
                            <li><a href="/servicos" className="hover:underline">Serviços</a></li>
                            <li><a href="/contato" className="hover:underline">Contato</a></li>
                            <li><a href="/politica" className="hover:underline">Política de Privacidade</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold mb-3">Links Úteis</h2>
                        <ul className="space-y-2 text-sm my-2 text-gray-300">
                        <li>
  <a href="/servicos" className="flex items-center space-x-2 hover:underline">
    <MapPinned />
    <span>Alphaville, São Paulo - SP</span>
  </a>
</li>
<li>
  <a href="/contato" className="flex items-center space-x-2 hover:underline">
    <Mail />
    <span>Contato</span>
  </a>
</li>

                            <li><a href="/politica" className="hover:underline">Política de Privacidade</a></li>
                        </ul>
                    </div>
                </div>
                <div className="text-center mt-6 text-sm md-text-sm lg-text-sm xl-text-sm 2xl-text-sm text-white">
                    © {new Date().getFullYear()} Global Holding Corporation Queirós LLC. Todos os direitos reservados
                </div>
            </div>
        </footer>
    );
}  