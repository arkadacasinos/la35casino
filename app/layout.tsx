import '@fontsource-variable/rubik'
import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="bg-[#0b0612] text-white">
      <head>
        <meta name="yandex-verification" content="c8e8eb8cc892091a" />
        <title>La Casino официальный сайт – Ля Казино зеркало рабочее, играть онлайн вход</title>
        <meta
          name="description"
          content="Ля Казино официальный сайт и рабочее зеркало La Casino. Играть онлайн в слоты и live игры, быстрый вывод выигрышей, бонусы до 225% и 1000 фриспинов на четыре депозита. Безопасный доступ 24/7."
        />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://la35casino.vercel.app" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="La Casino официальный сайт – Ля Казино зеркало рабочее, играть онлайн вход" />
        <meta
          property="og:description"
          content="Ля Казино официальный сайт и рабочее зеркало La Casino. Играть онлайн в слоты и live игры, быстрый вывод выигрышей, бонусы до 225% и 1000 фриспинов на четыре депозита. Безопасный доступ 24/7."
        />
        <meta property="og:url" content="https://la35casino.vercel.app" />
        <meta property="og:site_name" content="La Casino" />
        <meta property="og:image" content="https://la35casino.vercel.app/images/hero-bg.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="La Casino официальный сайт – Ля Казино зеркало рабочее, играть онлайн вход" />
        <meta
          name="twitter:description"
          content="Ля Казино официальный сайт и рабочее зеркало La Casino. Играть онлайн в слоты и live игры, быстрый вывод выигрышей, бонусы до 225% и 1000 фриспинов на четыре депозита."
        />
        <meta name="twitter:image" content="https://la35casino.vercel.app/images/hero-bg.png" />
        <meta name="theme-color" content="#0b0612" />
        <link rel="icon" href="/icon.png" type="image/png" />
      </head>
      <body className="antialiased font-sans bg-[#0b0612] text-white min-h-screen">
        {children}
      </body>
    </html>
  )
}
