import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/ee03ca1f-2d9f-4eb0-9274-ad2e90003e71/files/ac7e403e-26c8-4d50-993f-58ab08d87934.jpg";
const CRAFTS_IMG = "https://cdn.poehali.dev/projects/ee03ca1f-2d9f-4eb0-9274-ad2e90003e71/files/a19e3a70-74e3-4b6a-a5af-6ebcadf7ae74.jpg";
const PROCESS_IMG = "https://cdn.poehali.dev/projects/ee03ca1f-2d9f-4eb0-9274-ad2e90003e71/files/fe47d34a-154e-4f0a-b37e-ef96a08b56f0.jpg";

const navLinks = [
  { label: "О нас", href: "#about" },
  { label: "Каталог", href: "#catalog" },
  { label: "Галерея", href: "#gallery" },
  { label: "Процесс", href: "#process" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Доставка", href: "#delivery" },
  { label: "Контакты", href: "#contacts" },
];

// Реальные категории с maskaradboom.ru
const categories = [
  { icon: "👘", title: "Русские народные костюмы", desc: "Женские и мужские традиционные костюмы для взрослых — сарафаны, рубахи, поневы", sub: "Для взрослых" },
  { icon: "🧒", title: "Детские народные костюмы", desc: "Яркие и удобные костюмы для детей — для праздников, утренников, фотосессий", sub: "Для детей" },
  { icon: "👑", title: "Кокошники", desc: "Кокошник «Вера», «Снежная королева» и другие — ручная работа, богатый декор", sub: "Головные уборы" },
  { icon: "🌸", title: "Венки и венцы", desc: "Венок «Полевые цветы» и другие украшения для головы к народным костюмам", sub: "Украшения" },
  { icon: "🎭", title: "Тематические костюмы", desc: "Костюм «Снеговик», «Осень», «Чукотский» — для праздников и театральных постановок", sub: "Тематические" },
  { icon: "👔", title: "Косоворотки", desc: "Мужская косоворотка «Демьян» и другие — детские и взрослые размеры", sub: "Мужское" },
];

// Реальные товары из RSS-фида maskaradboom.ru
const products = [
  { title: "Русский народный костюм «Веринея»", category: "Детский", img: CRAFTS_IMG, price: "[цена на сайте]", badge: "Детский" },
  { title: "Кокошник «Вера» зелёный", category: "Головные уборы", img: HERO_IMG, price: "[цена на сайте]", badge: "Хит" },
  { title: "Кокошник «Снежная королева»", category: "Головные уборы", img: CRAFTS_IMG, price: "[цена на сайте]", badge: "Новинка" },
  { title: "Косоворотка «Демьян» детская", category: "Детский", img: PROCESS_IMG, price: "[цена на сайте]", badge: "Детский" },
  { title: "Костюм «Снеговик» детский", category: "Тематические", img: HERO_IMG, price: "[цена на сайте]", badge: "Праздничный" },
  { title: "Венок «Полевые цветы»", category: "Украшения", img: CRAFTS_IMG, price: "[цена на сайте]", badge: "Хит" },
  { title: "Костюм «Осень» взрослый", category: "Тематические", img: PROCESS_IMG, price: "[цена на сайте]", badge: "Взрослый" },
  { title: "Детский чукотский костюм", category: "Тематические", img: HERO_IMG, price: "[цена на сайте]", badge: "Детский" },
];

const processSteps = [
  { num: "I", title: "Выбор костюма", desc: "Выбираете модель из каталога или описываете пожелания — помогаем с выбором по телефону или в мессенджере" },
  { num: "II", title: "Замеры и заказ", desc: "Передаёте мерки, подтверждаете размер и цвет. Для детских костюмов достаточно роста и возраста" },
  { num: "III", title: "Пошив на фабрике", desc: "[Укажите сроки изготовления — например, от 3 до 14 рабочих дней]" },
  { num: "IV", title: "Доставка", desc: "Отправляем по всей России и СНГ. Самовывоз из [укажите город]" },
];

const reviews = [
  {
    name: "[Имя клиента]",
    city: "[Город]",
    text: "[Вставьте реальный отзыв с сайта maskaradboom.ru/reviews/]",
    stars: 5,
  },
  {
    name: "[Имя клиента]",
    city: "[Город]",
    text: "[Вставьте реальный отзыв с сайта maskaradboom.ru/reviews/]",
    stars: 5,
  },
  {
    name: "[Имя клиента]",
    city: "[Город]",
    text: "[Вставьте реальный отзыв с сайта maskaradboom.ru/reviews/]",
    stars: 5,
  },
];

const OrnamentDivider = () => (
  <div className="flex items-center gap-3 my-1">
    <div className="flex-1 h-px bg-folk-gold opacity-30" />
    <span className="text-folk-gold text-lg opacity-50">✦</span>
    <span className="text-folk-gold text-base opacity-70">❧</span>
    <span className="text-folk-gold text-lg opacity-50">✦</span>
    <div className="flex-1 h-px bg-folk-gold opacity-30" />
  </div>
);

const SectionTitle = ({ children, subtitle, light = false }: { children: React.ReactNode; subtitle?: string; light?: boolean }) => (
  <div className="text-center mb-12">
    <OrnamentDivider />
    <h2 className={`font-serif text-4xl md:text-5xl mt-4 mb-2 leading-tight ${light ? "text-folk-cream" : "text-folk-brown"}`}>{children}</h2>
    {subtitle && <p className={`font-sans text-base mt-2 ${light ? "text-folk-cream/60" : "text-muted-foreground"}`}>{subtitle}</p>}
    <OrnamentDivider />
  </div>
);

export default function Index() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", comment: "" });
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen folk-pattern-bg">

      {/* ── ШАПКА ── */}
      <header className="sticky top-0 z-50 bg-folk-brown shadow-xl">
        <div className="pattern-strip h-1" />
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <a href="#" className="flex items-center gap-3 flex-shrink-0">
            <span className="text-3xl">🌺</span>
            <div>
              <div className="font-serif text-folk-cream text-xl leading-none">MaskaradBoom</div>
              <div className="text-folk-gold text-[10px] font-sans tracking-[0.2em] uppercase opacity-70">Фабрика народных костюмов</div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-5">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href}
                className="text-folk-cream/80 font-sans text-sm hover:text-folk-gold transition-colors tracking-wide">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="tel:[УКАЖИТЕ ТЕЛЕФОН]"
              className="hidden md:flex items-center gap-2 text-folk-gold font-sans text-sm font-semibold hover:text-amber-300 transition-colors">
              <Icon name="Phone" size={15} />
              [Ваш телефон]
            </a>
            <a href="#consultation"
              className="hidden lg:inline-flex bg-folk-gold text-folk-dark font-sans text-sm font-bold px-5 py-2 hover:bg-amber-400 transition-colors">
              Заказать
            </a>
            <button className="lg:hidden text-folk-cream p-1" onClick={() => setMobileOpen(!mobileOpen)}>
              <Icon name={mobileOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden bg-folk-dark border-t border-folk-gold/20">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
                className="block px-6 py-3 text-folk-cream font-sans text-sm border-b border-folk-gold/10 hover:bg-folk-brown transition-colors">
                {l.label}
              </a>
            ))}
            <div className="px-4 py-3">
              <a href="#consultation" onClick={() => setMobileOpen(false)}
                className="block text-center bg-folk-gold text-folk-dark font-sans font-bold px-5 py-3">
                Записаться на консультацию
              </a>
            </div>
          </div>
        )}
        <div className="pattern-strip h-1" />
      </header>

      {/* ── ГЕРОЙ ── */}
      <section id="hero" className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Фабрика народных костюмов" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-folk-dark/92 via-folk-dark/65 to-folk-dark/10" />
        </div>

        <div className="absolute top-10 right-10 text-folk-gold opacity-10 text-[160px] font-serif leading-none select-none hidden xl:block">❧</div>

        <div className="relative max-w-7xl mx-auto px-4 py-24 w-full">
          <div className="max-w-xl">
            <p className="text-folk-gold font-sans text-xs tracking-[0.35em] uppercase mb-5 opacity-0 animate-fade-in delay-100" style={{ animationFillMode: "forwards" }}>
              ✦ Фабрика русских народных костюмов ✦
            </p>
            <h1 className="font-serif text-5xl md:text-[4.5rem] text-folk-cream leading-[1.05] mb-6 opacity-0 animate-fade-in-up delay-200" style={{ animationFillMode: "forwards" }}>
              MaskaradBoom<br />
              <span className="text-folk-gold italic text-4xl md:text-5xl">народные костюмы</span><br />
              <span className="text-3xl md:text-4xl">оптом и в розницу</span>
            </h1>
            <p className="font-sans text-folk-cream/75 text-lg leading-relaxed mb-8 opacity-0 animate-fade-in-up delay-300" style={{ animationFillMode: "forwards" }}>
              [Укажите ваш главный слоган или описание — например: «Более 500 моделей в каталоге. Пошив от 3 дней. Доставка по всей России.»]
            </p>
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up delay-400" style={{ animationFillMode: "forwards" }}>
              <a href="#catalog"
                className="inline-flex items-center justify-center gap-2 bg-folk-gold text-folk-dark font-sans font-bold px-8 py-4 text-base hover:bg-amber-400 transition-all hover:scale-105">
                <Icon name="ShoppingBag" size={18} />
                Смотреть каталог
              </a>
              <a href="#consultation"
                className="inline-flex items-center justify-center gap-2 border-2 border-folk-cream/50 text-folk-cream font-sans font-medium px-8 py-4 text-base hover:border-folk-gold hover:text-folk-gold transition-all">
                <Icon name="Phone" size={18} />
                Получить консультацию
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0 bg-folk-brown/90 backdrop-blur-sm border-t border-folk-gold/20">
          <div className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-3 gap-4 text-center">
            {[
              ["[N]+", "моделей в каталоге"],
              ["[N]+", "довольных клиентов"],
              ["[N]", "лет на рынке"],
            ].map(([num, label]) => (
              <div key={label}>
                <div className="font-serif text-2xl text-folk-gold">{num}</div>
                <div className="font-sans text-[10px] text-folk-cream/60 uppercase tracking-widest mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── О НАС ── */}
      <section id="about" className="py-24 bg-folk-cream">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-folk-gold font-sans text-xs tracking-[0.3em] uppercase mb-3">О фабрике</p>
              <h2 className="font-serif text-4xl md:text-5xl text-folk-brown leading-tight mb-5">
                [Заголовок раздела<br /><span className="italic">«О нас»]</span>
              </h2>
              <OrnamentDivider />
              <div className="space-y-4 font-sans text-muted-foreground leading-relaxed mt-5 text-sm">
                <p>[Вставьте текст со страницы maskaradboom.ru/about/ — описание фабрики, история, миссия]</p>
                <p>[Второй абзац о вас — что отличает вашу фабрику, какие материалы используете, для кого шьёте]</p>
                <p>[Третий абзац — ваши ценности или особенности производства]</p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  ["Собственное производство", "🏭"],
                  ["Все размеры в наличии", "📏"],
                  ["Оптовые заказы", "📦"],
                  ["Индивидуальный пошив", "✂️"],
                ].map(([t, i]) => (
                  <div key={t} className="flex items-center gap-3 border border-folk-gold/30 bg-background p-3">
                    <span className="text-xl">{i}</span>
                    <span className="font-sans text-folk-brown text-sm font-medium">{t}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-folk-gold/25" />
              <img src={CRAFTS_IMG} alt="О фабрике" className="relative w-full aspect-[4/3] object-cover shadow-2xl" />
              <div className="absolute -bottom-6 -right-6 bg-folk-red text-folk-cream p-6 shadow-xl">
                <div className="font-serif text-3xl text-folk-gold">[N]+</div>
                <div className="font-sans text-[10px] uppercase tracking-widest mt-1 opacity-70">лет работы</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── КАТАЛОГ ── */}
      <section id="catalog" className="py-24 bg-folk-brown">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle light subtitle="Все костюмы — собственное производство, натуральные материалы">
            Каталог костюмов
          </SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map((cat, i) => (
              <div key={i}
                className="bg-folk-dark/40 border border-folk-gold/20 p-7 hover:border-folk-gold/60 hover:bg-folk-dark/70 transition-all duration-300 group cursor-pointer">
                <div className="text-4xl mb-4">{cat.icon}</div>
                <div className="text-folk-gold/50 font-sans text-[10px] uppercase tracking-widest mb-1">{cat.sub}</div>
                <h3 className="font-serif text-xl text-folk-gold mb-3 group-hover:text-amber-300 transition-colors leading-tight">{cat.title}</h3>
                <p className="font-sans text-folk-cream/60 text-sm leading-relaxed">{cat.desc}</p>
                <div className="mt-5 flex items-center gap-2 text-folk-gold/40 group-hover:text-folk-gold transition-colors">
                  <span className="font-sans text-xs uppercase tracking-widest">Смотреть модели</span>
                  <Icon name="ArrowRight" size={13} />
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="https://maskaradboom.ru/shop/" target="_blank" rel="noopener"
              className="inline-flex items-center gap-2 border-2 border-folk-gold text-folk-gold font-sans font-semibold px-8 py-3 hover:bg-folk-gold hover:text-folk-dark transition-all duration-200">
              <Icon name="ExternalLink" size={16} />
              Весь каталог на сайте
            </a>
          </div>
        </div>
      </section>

      {/* ── ГАЛЕРЕЯ ── */}
      <section id="gallery" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle subtitle="Избранные модели из нашего ассортимента">
            Галерея готовых работ
          </SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {products.map((item, i) => (
              <div key={i}
                className="group relative overflow-hidden bg-card border border-folk-gold/20 hover:border-folk-gold/60 hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-square overflow-hidden">
                  <img src={item.img} alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-folk-dark/0 group-hover:bg-folk-dark/20 transition-colors" />
                  <div className="absolute top-3 left-3 bg-folk-red text-folk-cream text-[10px] font-sans px-2 py-1 uppercase tracking-wide">
                    {item.badge}
                  </div>
                </div>
                <div className="p-4 border-t border-folk-gold/20">
                  <h3 className="font-serif text-base text-folk-brown leading-tight mb-2">{item.title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-folk-red font-sans font-bold text-sm">{item.price}</span>
                    <a href="#consultation"
                      className="text-[10px] font-sans uppercase tracking-wide text-folk-gold hover:text-folk-red transition-colors">
                      Заказать
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ПРОЦЕСС ── */}
      <section id="process" className="py-24 bg-folk-cream">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle subtitle="Как проходит оформление заказа">
            Как заказать костюм
          </SectionTitle>
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div className="space-y-3">
              {processSteps.map((step, i) => (
                <div key={i}
                  className="flex gap-6 p-6 bg-background border border-folk-gold/20 hover:border-folk-gold/50 transition-all group">
                  <div className="font-serif text-3xl text-folk-gold/30 group-hover:text-folk-gold transition-colors leading-none mt-1 min-w-[2rem]">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-folk-brown mb-1">{step.title}</h3>
                    <p className="font-sans text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-folk-gold/25" />
              <img src={PROCESS_IMG} alt="Процесс пошива" className="relative w-full aspect-[4/3] object-cover shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ── ОТЗЫВЫ ── */}
      <section id="reviews" className="py-24 bg-folk-brown">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle light subtitle="Что говорят наши покупатели">
            Отзывы клиентов
          </SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="bg-folk-dark/40 border border-folk-gold/20 p-8 relative">
                <div className="absolute top-4 right-6 font-serif text-7xl text-folk-gold/10 leading-none select-none">"</div>
                <div className="flex mb-4">
                  {Array.from({ length: r.stars }).map((_, j) => (
                    <span key={j} className="text-folk-gold text-base">★</span>
                  ))}
                </div>
                <p className="font-sans text-folk-cream/60 leading-relaxed mb-6 text-sm italic">"{r.text}"</p>
                <div className="border-t border-folk-gold/20 pt-4">
                  <div className="font-serif text-folk-cream text-lg">{r.name}</div>
                  <div className="font-sans text-xs text-folk-cream/40 uppercase tracking-wide">{r.city}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="https://maskaradboom.ru/reviews/" target="_blank" rel="noopener"
              className="inline-flex items-center gap-2 border border-folk-gold/40 text-folk-gold/70 font-sans text-sm px-6 py-3 hover:border-folk-gold hover:text-folk-gold transition-colors">
              <Icon name="ExternalLink" size={15} />
              Все отзывы на сайте
            </a>
          </div>
        </div>
      </section>

      {/* ── ДОСТАВКА ── */}
      <section id="delivery" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle subtitle="Работаем с физическими лицами и оптовыми клиентами">
            Доставка и оплата
          </SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: "MapPin", title: "Самовывоз", desc: "[Укажите адрес производства/склада и режим работы]" },
              { icon: "Package", title: "По России", desc: "[Укажите службы доставки и сроки — например: СДЭК, Почта России, 3–10 дней]" },
              { icon: "Globe", title: "СНГ и экспорт", desc: "[Укажите, доставляете ли за рубеж и на каких условиях]" },
              { icon: "CreditCard", title: "Оплата", desc: "[Укажите способы оплаты — карта, перевод, наличные, счёт для юрлиц]" },
            ].map((item) => (
              <div key={item.title}
                className="border border-folk-gold/25 bg-folk-cream p-7 text-center hover:border-folk-gold/60 hover:shadow-md transition-all">
                <div className="w-12 h-12 bg-folk-red/10 border border-folk-red/20 flex items-center justify-center mx-auto mb-5">
                  <Icon name={item.icon} size={22} className="text-folk-red" />
                </div>
                <h3 className="font-serif text-xl text-folk-brown mb-3">{item.title}</h3>
                <p className="font-sans text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── КОНСУЛЬТАЦИЯ ── */}
      <section id="consultation" className="py-24 bg-folk-cream">
        <div className="max-w-3xl mx-auto px-4">
          <SectionTitle subtitle="Наш специалист свяжется с вами в течение рабочего дня">
            Бесплатная консультация
          </SectionTitle>

          {sent ? (
            <div className="text-center py-16 border-2 border-folk-gold/40 bg-background">
              <div className="text-5xl mb-4">🌺</div>
              <h3 className="font-serif text-3xl text-folk-brown mb-3">Заявка принята!</h3>
              <p className="font-sans text-muted-foreground text-sm">Наш специалист свяжется с вами в ближайшее время.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="bg-background border border-folk-gold/30 p-10 shadow-lg space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-sans text-xs text-folk-brown mb-2 uppercase tracking-widest">Ваше имя *</label>
                  <input type="text" required placeholder="Как вас зовут?"
                    value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border border-folk-gold/30 bg-folk-cream px-4 py-3 font-sans text-folk-dark text-sm focus:outline-none focus:border-folk-red transition-colors placeholder:text-muted-foreground/40" />
                </div>
                <div>
                  <label className="block font-sans text-xs text-folk-brown mb-2 uppercase tracking-widest">Телефон *</label>
                  <input type="tel" required placeholder="+7 (___) ___-__-__"
                    value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full border border-folk-gold/30 bg-folk-cream px-4 py-3 font-sans text-folk-dark text-sm focus:outline-none focus:border-folk-red transition-colors placeholder:text-muted-foreground/40" />
                </div>
              </div>
              <div>
                <label className="block font-sans text-xs text-folk-brown mb-2 uppercase tracking-widest">Ваш вопрос или пожелания</label>
                <textarea rows={4} placeholder="Какой костюм вас интересует? Для кого, в каком количестве?"
                  value={form.comment} onChange={(e) => setForm({ ...form, comment: e.target.value })}
                  className="w-full border border-folk-gold/30 bg-folk-cream px-4 py-3 font-sans text-folk-dark text-sm focus:outline-none focus:border-folk-red transition-colors resize-none placeholder:text-muted-foreground/40" />
              </div>
              <button type="submit"
                className="w-full bg-folk-red text-folk-cream font-sans font-bold py-4 text-base hover:bg-red-800 transition-colors flex items-center justify-center gap-2">
                <Icon name="Send" size={18} />
                Записаться на бесплатную консультацию
              </button>
              <p className="font-sans text-xs text-muted-foreground text-center">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          )}
        </div>
      </section>

      {/* ── КОНТАКТЫ ── */}
      <section id="contacts" className="py-24 bg-folk-brown">
        <div className="max-w-7xl mx-auto px-4">
          <SectionTitle light>Контакты</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { icon: "MapPin", title: "Адрес", lines: ["[Укажите город]", "[Улица, дом]", "[Режим работы]"] },
              { icon: "Phone", title: "Телефон", lines: ["[Ваш телефон]", "[Мессенджеры: WhatsApp, Telegram]"] },
              { icon: "Mail", title: "Почта и соцсети", lines: ["[Email]", "[ВКонтакте / Instagram]"] },
            ].map((c) => (
              <div key={c.title} className="flex flex-col items-center">
                <div className="w-14 h-14 bg-folk-gold/10 border border-folk-gold/30 flex items-center justify-center mb-5">
                  <Icon name={c.icon} size={24} className="text-folk-gold" />
                </div>
                <h3 className="font-serif text-2xl text-folk-cream mb-3">{c.title}</h3>
                {c.lines.map((l, i) => (
                  <p key={i} className="font-sans text-folk-cream/50 text-sm">{l}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ПОДВАЛ ── */}
      <footer className="bg-folk-dark border-t border-folk-gold/15">
        <div className="pattern-strip h-1" />
        <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🌺</span>
            <div>
              <div className="font-serif text-folk-cream text-base leading-none">MaskaradBoom</div>
              <div className="text-folk-gold text-[10px] font-sans tracking-widest uppercase opacity-50 mt-0.5">Фабрика русских народных костюмов</div>
            </div>
          </div>
          <nav className="flex flex-wrap gap-x-5 gap-y-1 justify-center">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href}
                className="font-sans text-folk-cream/40 text-xs hover:text-folk-gold transition-colors uppercase tracking-wide">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="font-sans text-folk-cream/25 text-xs">© 2024 MaskaradBoom</div>
        </div>
      </footer>

    </div>
  );
}