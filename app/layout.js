import { Playfair_Display } from 'next/font/google';
import '@/styles/globals.css'

const playfair = Playfair_Display({
	subsets: ['latin'],
	weights: ['400', '500', '600', '700', '800', '900'],
	variable: '--font-playfair',
});

export const metadata = {
  title: 'Создание сайтов и приложений под ключ | Mikhail Biketov',
  description: 'Мы команда страстных дизайнеров и разработчиков, которые любят создавать потрясающие веб-сайты и приложения.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={playfair.className}>
				{children}
			</body>
    </html>
  )
}
