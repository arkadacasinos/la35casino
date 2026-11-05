const AFFILIATE_URL = 'https://copper-ray.com/?serial=61365830&creative_id=9330'

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0b0612] text-white">
      {/* CSS-only Drawer Menu */}
      <div id="k8m2-drawer">
        <a href="#!" className="k8m2-drawer-scrim" aria-label="Закрыть меню" />
        <div className="k8m2-drawer-panel">
          <div className="flex items-center justify-between pb-3 border-b border-[#2b1545]">
            <a href={AFFILIATE_URL} className="flex items-center gap-1.5 font-bold text-xl tracking-wide no-underline">
              <span className="text-[#f01a8c] italic text-2xl drop-shadow-[0_0_8px_#ec1282]">ЛЯ</span>
              <span className="text-white text-sm font-semibold tracking-wider uppercase">Casino</span>
            </a>
            <a
              href="#!"
              className="text-[#a89bbd] hover:text-white p-1 text-2xl leading-none"
              aria-label="Закрыть меню"
            >
              ×
            </a>
          </div>

          <nav className="flex flex-col gap-2 mt-2">
            <a
              href={AFFILIATE_URL}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#d1c4e9] hover:text-white hover:bg-[#201136] transition-colors"
            >
              <svg className="w-5 h-5 text-[#f01a8c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v3a2 2 0 01-2 2M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
              <span>Бонусы</span>
            </a>
            <a
              href={AFFILIATE_URL}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#d1c4e9] hover:text-white hover:bg-[#201136] transition-colors"
            >
              <svg className="w-5 h-5 text-[#f01a8c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <span>Казино</span>
            </a>
            <a
              href={AFFILIATE_URL}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#d1c4e9] hover:text-white hover:bg-[#201136] transition-colors"
            >
              <svg className="w-5 h-5 text-[#f01a8c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
              </svg>
              <span>Live Казино</span>
            </a>
          </nav>

          <div className="flex flex-col gap-3 mt-auto pt-4 border-t border-[#2b1545]">
            <a href={AFFILIATE_URL} className="k8m2-btn-login text-center w-full">
              Вход
            </a>
            <a href={AFFILIATE_URL} className="k8m2-btn-register text-center w-full">
              Регистрация
            </a>
          </div>
        </div>
      </div>

      {/* Header Bar */}
      <header className="k8m2-header-bar flex items-center">
        <div className="k8m2-container flex items-center justify-between w-full">
          <div className="flex items-center gap-2 sm:gap-4 lg:gap-6">
            {/* Hamburger Button for Mobile */}
            <a
              href="#k8m2-drawer"
              className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg text-white hover:bg-[#221338] transition-colors lg:hidden"
              aria-label="Открыть меню навигации"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </a>

            {/* Logo */}
            <a href={AFFILIATE_URL} className="flex items-center gap-1 sm:gap-1.5 no-underline group">
              <span className="text-[#f01a8c] italic text-xl sm:text-2xl font-black drop-shadow-[0_0_10px_#ec1282] transition-transform group-hover:scale-105">
                ЛЯ
              </span>
              <span className="text-white text-xs sm:text-base font-bold tracking-widest uppercase">
                Casino
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              <a href={AFFILIATE_URL} className="k8m2-nav-item">
                <svg className="w-4 h-4 text-[#f01a8c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v3a2 2 0 01-2 2M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
                <span>Бонусы</span>
              </a>
              <a href={AFFILIATE_URL} className="k8m2-nav-item">
                <svg className="w-4 h-4 text-[#f01a8c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span>Казино</span>
              </a>
              <a href={AFFILIATE_URL} className="k8m2-nav-item">
                <svg className="w-4 h-4 text-[#f01a8c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                </svg>
                <span>Live Казино</span>
              </a>
            </nav>
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-1.5 sm:gap-3">
            <a
              href={AFFILIATE_URL}
              className="hidden sm:flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full text-[#c2b4d6] hover:text-white hover:bg-[#201136] transition-colors"
              aria-label="Поиск по сайту"
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </a>

            <a
              href={AFFILIATE_URL}
              className="k8m2-btn-login text-xs sm:text-sm px-3 py-1.5 sm:px-4 sm:py-2"
            >
              Вход
            </a>

            <a
              href={AFFILIATE_URL}
              className="k8m2-btn-register text-xs sm:text-sm px-3 sm:px-5 py-1.5 sm:py-2 whitespace-nowrap"
            >
              <span>Регистрация</span>
              <span className="hidden sm:flex absolute -top-1.5 -right-1.5 h-4 w-4 items-center justify-center rounded-full bg-[#120a1d] text-[10px] text-[#f01a8c] border border-[#f01a8c]">
                ★
              </span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col gap-5 sm:gap-8 py-3 sm:py-6">
        {/* Screen 2 Recreation: Hero Banner */}
        <section className="k8m2-container">
          <div className="k8m2-hero-wrapper relative flex flex-col justify-end p-5 sm:p-10 lg:p-14 min-h-[280px] sm:min-h-[360px] lg:min-h-[420px]">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-[position:80%_center] sm:bg-center bg-no-repeat"
              style={{ backgroundImage: "url('/images/hero-bg.png')" }}
              role="img"
              aria-label="La Casino официальный сайт промо баннер"
            />

            {/* Gradient Overlay for high readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c0517]/95 via-[#0c0517]/80 to-transparent sm:bg-gradient-to-r sm:from-[#0c0517]/95 sm:via-[#0c0517]/70 sm:to-transparent z-10" />

            {/* Content on left */}
            <div className="relative z-20 max-w-xl flex flex-col items-start gap-2.5 sm:gap-4">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight drop-shadow-md">
                МОЩНЫЙ СТАРТ:
              </h1>

              <p className="text-sm sm:text-xl lg:text-2xl font-medium text-[#e4daf0] drop-shadow max-w-md">
                до 225% + 1000 ФС на четыре депозита
              </p>

              <div className="pt-1.5 sm:pt-2">
                <a href={AFFILIATE_URL} className="k8m2-hero-cta text-sm sm:text-lg px-6 py-2.5 sm:px-10 sm:py-3.5">
                  Зарегаться!
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Screen 2 Recreation: ТОП Выплаты Ticker Strip */}
        <section className="k8m2-container">
          <div className="k8m2-payouts-box">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3 pb-3 mb-3 border-b border-[#241238]">
              <div className="flex items-center gap-1.5">
                <span className="text-xs uppercase tracking-wider font-bold text-[#b5a3cc]">
                  ТОП Выплаты
                </span>
                <svg className="w-3.5 h-3.5 text-[#f59e0b] fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div className="text-xl sm:text-3xl font-black tracking-tight text-white">
                13 697 415 RUB
              </div>
            </div>

            {/* Live horizontal payouts items */}
            <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
              {/* Item 1 */}
              <a
                href={AFFILIATE_URL}
                className="flex items-center gap-3 bg-[#180e26] hover:bg-[#221336] border border-[#2b1642] rounded-xl px-3.5 py-2.5 min-w-[210px] flex-shrink-0 transition-colors"
              >
                <div className="k8m2-badge-star bg-[#10b981]">
                  ×3,8
                </div>
                <div className="flex flex-col text-xs leading-tight">
                  <span className="text-[#a89bbd]">ID 45•••••73</span>
                  <span className="text-sm font-bold text-white flex items-center gap-1">
                    2 000 RUB <span className="text-[#10b981]">↗</span>
                  </span>
                  <span className="text-[#84739c]">522 RUB депозит</span>
                </div>
              </a>

              {/* Item 2 */}
              <a
                href={AFFILIATE_URL}
                className="flex items-center gap-3 bg-[#180e26] hover:bg-[#221336] border border-[#2b1642] rounded-xl px-3.5 py-2.5 min-w-[210px] flex-shrink-0 transition-colors"
              >
                <div className="k8m2-badge-star bg-[#10b981]">
                  ×1
                </div>
                <div className="flex flex-col text-xs leading-tight">
                  <span className="text-[#a89bbd]">ID 38•••••03</span>
                  <span className="text-sm font-bold text-white flex items-center gap-1">
                    5 000 RUB <span className="text-[#10b981]">↗</span>
                  </span>
                  <span className="text-[#84739c]">5 000 RUB депозит</span>
                </div>
              </a>

              {/* Item 3 */}
              <a
                href={AFFILIATE_URL}
                className="flex items-center gap-3 bg-[#180e26] hover:bg-[#221336] border border-[#2b1642] rounded-xl px-3.5 py-2.5 min-w-[210px] flex-shrink-0 transition-colors"
              >
                <div className="k8m2-badge-star bg-[#f97316]">
                  ×5,7
                </div>
                <div className="flex flex-col text-xs leading-tight">
                  <span className="text-[#a89bbd]">ID 15•••••89</span>
                  <span className="text-sm font-bold text-white flex items-center gap-1">
                    3 000 RUB <span className="text-[#f97316]">↗</span>
                  </span>
                  <span className="text-[#84739c]">530 RUB депозит</span>
                </div>
              </a>

              {/* Item 4 */}
              <a
                href={AFFILIATE_URL}
                className="flex items-center gap-3 bg-[#180e26] hover:bg-[#221336] border border-[#2b1642] rounded-xl px-3.5 py-2.5 min-w-[210px] flex-shrink-0 transition-colors"
              >
                <div className="k8m2-badge-star bg-[#ef4444]">
                  ×9,6
                </div>
                <div className="flex flex-col text-xs leading-tight">
                  <span className="text-[#a89bbd]">ID 81•••••92</span>
                  <span className="text-sm font-bold text-white flex items-center gap-1">
                    5 000 RUB <span className="text-[#ef4444]">↗</span>
                  </span>
                  <span className="text-[#84739c]">521 RUB депозит</span>
                </div>
              </a>

              {/* Item 5 */}
              <a
                href={AFFILIATE_URL}
                className="flex items-center gap-3 bg-[#180e26] hover:bg-[#221336] border border-[#2b1642] rounded-xl px-3.5 py-2.5 min-w-[210px] flex-shrink-0 transition-colors"
              >
                <div className="k8m2-badge-star bg-[#3b82f6]">
                  ×13,2
                </div>
                <div className="flex flex-col text-xs leading-tight">
                  <span className="text-[#a89bbd]">ID 71•••••76</span>
                  <span className="text-sm font-bold text-white flex items-center gap-1">
                    6 876 RUB <span className="text-[#3b82f6]">↗</span>
                  </span>
                  <span className="text-[#84739c]">523 RUB депозит</span>
                </div>
              </a>

              {/* Item 6 */}
              <a
                href={AFFILIATE_URL}
                className="flex items-center gap-3 bg-[#180e26] hover:bg-[#221336] border border-[#2b1642] rounded-xl px-3.5 py-2.5 min-w-[210px] flex-shrink-0 transition-colors"
              >
                <div className="k8m2-badge-star bg-[#f97316]">
                  ×7
                </div>
                <div className="flex flex-col text-xs leading-tight">
                  <span className="text-[#a89bbd]">ID 75•••••33</span>
                  <span className="text-sm font-bold text-white flex items-center gap-1">
                    7 000 RUB <span className="text-[#f97316]">↗</span>
                  </span>
                  <span className="text-[#84739c]">998 RUB депозит</span>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* SEO Text Section: 300-400 words containing all requested keywords */}
        <section className="k8m2-container">
          <article className="k8m2-article flex flex-col">
            <h2 id="official" className="k8m2-heading-2">
              La Casino официальный сайт и возможность в ля казино играть онлайн
            </h2>
            <p className="k8m2-para">
              La Casino официальный сайт предлагает любителям азарта быстрый и надежный доступ к сотням сертифицированных слотов, лайв-дилерам и карточным турнирам. На современной игровой платформе ля казино играть можно в бесплатном демо-режиме без обязательной регистрации или на реальные рубли с гарантированным выводом средств. Клуб La Casino ценят за честные условия, мгновенный расчет ставок и многоуровневую систему поощрений. Каждый новый участник может активировать щедрый приветственный бонус до 225% и до 1000 фриспинов на первые четыре депозита. Если вы ищете проверенное La казино с адаптивным интерфейсом для смартфонов и отзывчивым саппортом, то ля казино онлайн подарит первоклассный гемблинг-опыт в любое удобное время.
            </p>

            <h2 id="mirror" className="k8m2-heading-2">
              Ля казино зеркало рабочее: вход через La Casino зеркало без блокировок
            </h2>
            <p className="k8m2-para">
              При блокировках интернет-провайдерами игрокам всегда доступно актуальное ля казино зеркало рабочее без задержек. Точный дубликат основного сервера La Casino зеркало сохраняет все персональные данные, накопленные баллы лояльности, состояние денежного счета и текущие выигрыши. Найти безопасное La Casino зеркало можно по прямой ссылке на нашем портале, а также в официальном телеграм-канале клуба. Новое ля казино зеркало подключается в один клик и обеспечивает стабильное соединение без сторонних VPN-утилит.
            </p>

            <h2 id="registration" className="k8m2-heading-2">
              Ля казино официальный сайт: регистрация, La казино вход и быстрый вывод средств
            </h2>
            <p className="k8m2-para">
              Чтобы начать делать ставки на рубли, перейдите на ля казино официальный сайт и пройдите быструю регистрацию по электронной почте или номеру телефона. Авторизованный пользователь La Casino официальный сайт получает доступ к пополнению баланса через карты МИР, СБП, Piastrix и криптовалютные кошельки. Игровой зал La казино включает популярные тайтлы от Pragmatic Play, NetEnt, Novomatic и Amatic с высоким процентом возврата RTP до 98%. На портале ля казино играть комфортно и безопасно благодаря сквозному шифрованию данных и круглосуточным выплатам без задержек.
            </p>

            <h2 id="features" className="k8m2-heading-2">
              Преимущества La Casino: почему выбирают в ля казино онлайн играть
            </h2>
            <p className="k8m2-para">
              Качественный ля казино официальный портал регулярно проводит сетевые гонки и раздает еженедельный кэшбэк до 10%. Запуская La Casino играть на компьютере или планшете, вы получаете безупречную графику и плавный геймплей. Используйте рабочее La Casino зеркало или главный ля казино официальный сайт, чтобы сорвать долгожданный куш уже сегодня. Служба заботы о клиентах отвечает в онлайн-чате круглосуточно, помогая решить любые финансовые вопросы или активировать индивидуальные фриспины.
            </p>

            {/* Quick Transition Banner with Referral Link */}
            <div className="mt-6 p-4 sm:p-6 rounded-xl bg-gradient-to-r from-[#1c0f33] to-[#2a134a] border border-[#3b1c61] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex flex-col text-center sm:text-left">
                <span className="text-white font-bold text-base sm:text-lg">
                  Готовы начать игру в La Casino прямо сейчас?
                </span>
                <span className="text-[#c1b2d9] text-xs sm:text-sm">
                  Заберите бонус 225% + 1000 фриспинов на первые депозиты
                </span>
              </div>
              <a href={AFFILIATE_URL} className="k8m2-hero-cta text-xs sm:text-sm py-2 px-6 whitespace-nowrap">
                Играть онлайн
              </a>
            </div>
          </article>
        </section>
      </main>

      {/* Footer with Keyword Hashtag Navigation */}
      <footer className="mt-8 border-t border-[#1e1030] bg-[#0c0614] py-8 sm:py-12">
        <div className="k8m2-container flex flex-col gap-6 sm:gap-8">
          {/* Hashtag Cloud for On-Site SEO Navigation */}
          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#8a7a9e]">
              Быстрая навигация по ключевым разделам:
            </span>
            <div className="flex flex-wrap gap-2">
              <a href="#official" className="k8m2-hashtag-link">#la-casino</a>
              <a href="#mirror" className="k8m2-hashtag-link">#la-casino-zerkalo</a>
              <a href="#official" className="k8m2-hashtag-link">#la-casino-igrat</a>
              <a href="#registration" className="k8m2-hashtag-link">#la-casino-oficialny</a>
              <a href="#official" className="k8m2-hashtag-link">#la-casino-oficialnyj-sajt</a>
              <a href="#registration" className="k8m2-hashtag-link">#la-kazino</a>
              <a href="#official" className="k8m2-hashtag-link">#lya-kazino</a>
              <a href="#mirror" className="k8m2-hashtag-link">#lya-kazino-zerkalo</a>
              <a href="#mirror" className="k8m2-hashtag-link">#lya-kazino-zerkalo-rabochee</a>
              <a href="#official" className="k8m2-hashtag-link">#lya-kazino-igrat</a>
              <a href="#features" className="k8m2-hashtag-link">#lya-kazino-onlajn</a>
              <a href="#features" className="k8m2-hashtag-link">#lya-kazino-oficialnyj</a>
              <a href="#registration" className="k8m2-hashtag-link">#lya-kazino-oficialnyj-sajt</a>
            </div>
          </div>

          {/* Legal / Trust Info */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#1d102e] text-xs text-[#786b8c]">
            <div className="flex items-center gap-3">
              <span className="px-2 py-0.5 rounded bg-[#1a0e29] border border-[#30184a] text-white font-bold">
                18+
              </span>
              <span>Curaçao eGaming Licence No. 8048/JAZ • SSL 256-bit Encrypted</span>
            </div>
            <div>
              © 2026 La Casino / Ля Казино официальный сайт. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
