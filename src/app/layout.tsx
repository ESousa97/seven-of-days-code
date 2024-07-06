import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Configurando a fonte Inter
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Seven Days Code - Alura",
  description: "Uma jornada de aprendizado em programação com Alura.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Assegura que o título é uma string, mesmo se null ou undefined
  const documentTitle = typeof metadata.title === 'string' ? metadata.title : "Default Title";

  return (
    <html lang="en" className="min-h-full bg-gradient-to-b from-transparent via-[rgb(var(--background-start-rgb))] to-[rgb(var(--background-end-rgb))]">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{documentTitle}</title>
      </head>
      <body className={`${inter.className} font-inter text-[rgb(var(--foreground-rgb))]`}>
        <header className="bg-blue-900 text-white text-center p-5">
          <h1>Explore a Programação com Alura no Seven Days Code</h1>
        </header>
        <main className="p-5">
          {children}
        </main>
        <footer className="bg-blue-900 text-white text-center p-3 fixed inset-x-0 bottom-0">
          <p>© 2024 Projeto de José Enoque. Todos os direitos reservados.</p>
        </footer>
      </body>
    </html>
  );
}
