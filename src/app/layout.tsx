import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Seven Days Code - Alura Challenge",
  description: "Uma jornada de aprendizado em programação com projetos interativos",
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100`}>
        <div className="min-h-screen flex flex-col">
          {/* Header moderno com gradiente */}
          <header className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10 container mx-auto px-6 py-8">
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  Seven Days Code
                </h1>
                <p className="text-lg md:text-xl text-blue-100 font-medium">
                  Desafio Alura - Projetos Interativos de Programação
                </p>
                <div className="mt-4 flex justify-center">
                  <div className="h-1 w-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
                </div>
              </div>
            </div>
            {/* Decoração geométrica */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
          </header>

          {/* Main content com espaçamento adequado */}
          <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {children}
          </main>

          {/* Footer moderno */}
          <footer className="bg-gradient-to-r from-slate-800 to-slate-900 text-white border-t border-slate-700">
            <div className="container mx-auto px-6 py-8">
              <div className="text-center">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-slate-200 mb-2">Seven Days Code</h3>
                  <p className="text-slate-400 text-sm">
                    Desenvolvido como parte do desafio da Alura
                  </p>
                </div>
                <div className="border-t border-slate-700 pt-4">
                  <p className="text-slate-400 text-sm">
                    © 2024 José Enoque. Feito com ❤️ e muito aprendizado.
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
