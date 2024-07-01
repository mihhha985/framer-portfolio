import { Playfair_Display } from 'next/font/google';
import Script from 'next/script';
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
				<Script id="metrika-counter" strategy="afterInteractive">
				{`
					(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
					m[i].l=1*new Date();
					for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
					k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
					(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

					ym(97715889, "init", {
						clickmap:true,
						trackLinks:true,
						accurateTrackBounce:true,
						webvisor:true
					});
				`}
				</Script>
				{children}
			</body>
    </html>
  )
}
