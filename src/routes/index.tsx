import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import productMockup from "@/assets/product-mockup.png";
import flaviaPhoto from "@/assets/flavia-lucas.png";
import { useReveal } from "@/hooks/use-reveal";
import {
  Waveform,
  Asterisk,
  HandUnderline,
  OrnamentRule,
  SectionMark,
  StampSeal,
} from "@/components/decorative";
import { StickyCTA } from "@/components/sticky-cta";

export const Route = createFileRoute("/")({
  component: SalesPage,
});

const testimonials = [
  { quote: "Caramba, eu sempre travava. Fiz os primeiros exercícios e apresentei o relatório sem gaguejar. Voz firme, olhar no olho. Saí da reunião orgulhoso de mim.", name: "Lucas", role: "Analista de TI", city: "São Paulo" },
  { quote: "Eu salvo mil dicas, mas na hora H eu travava. Esses 30 exercícios me deram um começo pronto. Abri a fala em 20 segundos e prendi a sala.", name: "Bruna", role: "Estagiária de Marketing", city: "Curitiba" },
  { quote: "Sério, eu falava igual metralhadora. Treinei respiração e pausas do arquivo. Cronometrei: cai de 180 para 135 palavras por minuto. Ficou claro, sem parecer robô.", name: "Daniela", role: "Consultora", city: "Belo Horizonte" },
  { quote: "Achei que era mais um PDF qualquer, confesso. Me surpreendi. Treinei respostas rápidas e finalmente encarei perguntas chatas sem branco. Até brinquei com uma, a sala riu.", name: "Renato", role: "Engenheiro Civil", city: "Recife" },
  { quote: "Mano, usei antes da entrevista e foi tiro certo. Estruturei pitch de 60 segundos, mantive contato visual e mãos calmas. Saí com convite pra segunda etapa.", name: "Diego", role: "Estudante de Administração", city: "Porto Alegre" },
];

const painThoughts = [
  "Eu salvo mil dicas e, na hora H, eu travo.",
  "Eu não sei por onde começar.",
  "Será que eu tô falando rápido demais e ninguém entende?",
  "E se perguntarem algo simples e eu apagar tudo da cabeça?",
  "Todo mundo parece seguro e articulado, menos eu.",
  "Será que minha voz vai tremer na hora da apresentação?",
  "Eu ensaio horas e esqueço tudo na hora de falar.",
];

const reasons = [
  { title: "Você decora palavra por palavra", body: "Sua memória de trabalho sobrecarrega e dá branco." },
  { title: "Você pratica só na cabeça", body: "Seu corpo não aprende ritmo, respiração e pausas." },
  { title: "Você não tem aberturas prontas", body: "Sem ponto de partida, o cérebro entra em alerta." },
  { title: "Você chega com cafeína alta e postura fechada", body: "Seu corpo lê perigo e corta o ar." },
  { title: "Você acumula dicas sem sequência de treino", body: "Sem ordem, o cérebro não cria hábito. Não é culpa sua." },
];

const steps = [
  { num: "01", title: "Baixe e abra o arquivo", desc: "No celular ou computador. Os 30 exercícios listados, com instrução clara em cada um." },
  { num: "02", title: "Cronometre 20 a 30 minutos", desc: "Escolha um bloco. Treine respiração, postura, abertura e pausas. Cronômetro do celular." },
  { num: "03", title: "Repita e finalize com mini teste", desc: "Em 60 a 90 minutos: grave 60 segundos, ouça, ajuste pausas e tom. Voz firme na próxima fala." },
];

const forYou = [
  "Você que trava na apresentação do trabalho ou na reunião da empresa.",
  "Você que vai apresentar TCC, seminário ou projeto e não sabe começar.",
  "Você que salvou mil dicas e, na hora H, acelera ou falha.",
  "Você que precisa responder perguntas sem tremer e treinar hoje.",
  "Você que está começando a carreira e quer uma saída simples.",
];

const notForYou = [
  "Se você espera milagre sem esforço.",
  "Se você não topa separar 1 a 2 horas para treinar.",
  "Se você quer um curso longo, cheio de teoria e módulos.",
  "Se você busca alguém guiando ao vivo ou fazendo por você.",
];

const faqs = [
  { q: "Como vou receber e acessar?", a: "Na hora. Você recebe o link de download no e-mail e na tela. É um Produto Instantâneo. Arquivo digital. Baixe e use hoje." },
  { q: "Funciona pro meu caso ou nicho?", a: "Sim. Serve para estudante e início de carreira. Apresentações, reuniões, entrevistas, online ou presencial. Os exercícios cobrem início, meio, fim e perguntas." },
  { q: "E se eu não gostar?", a: "Você tem 7 dias para pedir reembolso total. Sem enrolação. Não aprovou, pede e pronto." },
  { q: "Preciso de alguma ferramenta ou conhecimento prévio?", a: "Não. Você não precisa de experiência, curso ou equipamento. Só seguir os passos. Ler, falar, gravar e repetir. Serve no celular ou no computador." },
  { q: "Em quanto tempo vejo resultado?", a: "Rápido. Em 1 a 2 horas você destrava, organiza sua fala e ganha firmeza. Faça hoje e use na próxima apresentação, reunião ou entrevista." },
  { q: "É teoria ou prática?", a: "Prática. 30 exercícios curtos e diretos. Treinos de voz, ritmo, pausas, começo e fechamento. Nada teórico. É fazer e notar a evolução." },
  { q: "Posso usar sempre que precisar?", a: "Sim. Uso ilimitado. Baixe e repita quando quiser. Antes de cada fala, refaça os exercícios chave. Você cria um ritual rápido e confiável." },
];

/* ===== Reusable bits ===== */

function CTAButton({ label = "QUERO AGORA", className = "" }: { label?: string; className?: string }) {
  return (
    <a
      href="#oferta"
      className={`group relative inline-flex w-full items-center justify-center overflow-hidden rounded-full bg-gradient-cta px-8 py-5 text-center text-base font-bold uppercase tracking-[0.18em] text-navy shadow-gold transition-transform hover:scale-[1.02] active:scale-[0.99] sm:text-lg ${className}`}
      style={{ minHeight: 56 }}
    >
      <span className="relative z-10 flex items-center gap-3">
        <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-navy" />
        {label}
      </span>
      <span className="pointer-events-none absolute inset-y-0 -left-full w-1/3 rotate-12 bg-white/40 blur-md transition-transform duration-700 group-hover:translate-x-[400%]" />
    </a>
  );
}

function Marquee({ items }: { items: string[] }) {
  const repeated = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-cream/15 bg-navy-deep py-4 text-cream">
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
        {repeated.map((t, i) => (
          <span key={i} className="flex items-center gap-6 text-sm uppercase tracking-[0.3em]">
            <Asterisk className="h-3.5 w-3.5 text-gold" />
            <span className="text-cream/85">{t}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function FaqItem({ q, a, idx }: { q: string; a: string; idx: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="group relative border-b border-foreground/15">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-start justify-between gap-6 py-6 text-left"
        style={{ minHeight: 64 }}
      >
        <div className="flex items-start gap-5">
          <span className="numeral-display text-sm tabular-nums text-gold-deep">
            {String(idx + 1).padStart(2, "0")}
          </span>
          <span className="font-display text-lg font-semibold text-foreground sm:text-xl">{q}</span>
        </div>
        <span
          className={`relative mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-foreground/30 transition-transform ${
            open ? "rotate-45 bg-navy text-cream" : "text-foreground"
          }`}
        >
          <span className="absolute h-3 w-px bg-current" />
          <span className="absolute h-px w-3 bg-current" />
        </span>
      </button>
      <div
        className="grid overflow-hidden transition-[grid-template-rows] duration-500 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="min-h-0">
          <p className="pb-6 pl-10 pr-2 text-base leading-relaxed text-muted-foreground">{a}</p>
        </div>
      </div>
    </div>
  );
}

/* ===== Page ===== */

function SalesPage() {
  useReveal();

  const [now, setNow] = useState("");
  useEffect(() => {
    const t = () => setNow(new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }));
    t();
    const id = setInterval(t, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground antialiased">
      {/* ============== TOP BAR ============== */}
      <div className="border-b border-foreground/10 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 text-[11px] uppercase tracking-[0.25em] text-foreground/70">
          <div className="flex items-center gap-3">
            <Asterisk className="h-3 w-3 text-gold-deep" />
            <span className="font-display italic lowercase tracking-normal text-foreground">flávia lucas</span>
          </div>
          <div className="hidden items-center gap-6 sm:flex">
            <span>edição instantânea</span>
            <span className="numeral-display tabular-nums">{now}</span>
          </div>
          <a href="#oferta" className="rounded-full border border-foreground/30 px-3 py-1 text-foreground/80 transition hover:border-gold hover:text-gold-deep">
            R$ 47
          </a>
        </div>
      </div>

      {/* ============== HERO ============== */}
      <section id="dobra-hero" className="relative overflow-hidden bg-gradient-navy pb-24 pt-12 text-cream">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 50% 65%, oklch(0.78 0.13 75 / 0.30), transparent 55%), radial-gradient(circle at 12% 18%, oklch(0.78 0.13 75 / 0.18), transparent 45%), radial-gradient(circle at 88% 80%, oklch(0.65 0.14 70 / 0.20), transparent 50%)",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-overlay"
          style={{
            backgroundImage: "radial-gradient(oklch(1 0 0 / 0.4) 1px, transparent 1px)",
            backgroundSize: "3px 3px",
          }}
        />

        <div className="relative mx-auto max-w-5xl px-5">
          <div className="reveal flex items-center justify-between text-[10px] uppercase tracking-[0.4em] text-cream/60">
            <span>Volume 01</span>
            <span>Edição prática</span>
            <span>Brasil</span>
          </div>

          <div className="mt-10 grid items-center gap-10 sm:gap-12 md:grid-cols-[1.1fr_1fr]">
            <div>
              <h1 className="reveal font-display text-[clamp(2.5rem,9vw,5.5rem)] font-bold leading-[0.92] tracking-tight">
                Fale em público
                <br />
                <span className="relative inline-block italic text-gold">
                  sem travar
                  <HandUnderline className="text-gold/80" />
                </span>
                <br />
                <span className="text-cream/85">em duas horas.</span>
              </h1>

              <p className="reveal reveal-delay-1 mt-8 max-w-md text-lg leading-relaxed text-cream/75">
                Voz firme na próxima apresentação, reunião ou entrevista,
                com 30 exercícios práticos. Sem decorar roteiro.
                <span className="audio-caret" />
              </p>

              <div className="reveal reveal-delay-2 mt-8 flex items-center gap-4">
                <Waveform className="h-10 w-40 text-gold" bars={26} />
              </div>

              <div className="reveal reveal-delay-3 mt-10 max-w-sm">
                <CTAButton label="começar o treino" />
                <div className="mt-4 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-cream/60">
                  <span className="inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
                  acesso imediato
                  <span className="text-cream/30">/</span>
                  garantia de 7 dias
                </div>
              </div>
            </div>

            <div className="reveal reveal-delay-2 relative mx-auto flex max-w-sm justify-center">
              <div className="absolute inset-0 m-auto h-72 w-72 rounded-full bg-gold/30 blur-3xl" />
              <div className="absolute inset-x-0 bottom-2 mx-auto h-10 w-3/4 rounded-full bg-black/55 blur-3xl" />
              <img
                src={productMockup}
                alt="Mockup do ebook 30 Exercícios de Confiança para Falar em Público"
                className="relative w-full max-w-[380px] drop-shadow-2xl animate-float"
                width={512}
                height={512}
              />
              <span className="absolute -right-2 top-6 rotate-12 rounded-full border border-gold/60 bg-navy/80 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-gold">
                arquivo digital
              </span>
              <span className="absolute -left-1 bottom-10 -rotate-6 rounded-full border border-cream/30 bg-navy/70 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-cream/80">
                30 exercícios
              </span>
            </div>
          </div>

          <div className="reveal reveal-delay-4 mt-14 grid grid-cols-3 divide-x divide-cream/15 border-y border-cream/15 py-4 text-center text-cream/80">
            {[
              { k: "1.6M", v: "seguidores" },
              { k: "8k+", v: "alunos formados" },
              { k: "20+", v: "anos de palco" },
            ].map((s) => (
              <div key={s.v}>
                <div className="numeral-display text-2xl font-bold text-gold sm:text-3xl">{s.k}</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-cream/55">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== MARQUEE ============== */}
      <Marquee
        items={[
          "voz firme",
          "abertura em 20 segundos",
          "pausa que prende a sala",
          "respiração que devolve o ar",
          "fim memorável",
          "respostas sem branco",
        ]}
      />

      {/* ============== TESTIMONIALS ============== */}
      <section id="dobra-depoimentos" className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-5">
          <div className="reveal mb-10 flex flex-wrap items-end justify-between gap-6">
            <SectionMark number="01" label="Quem treinou destravou" className="text-foreground/70" />
            <h2 className="font-display text-3xl font-bold leading-[0.95] tracking-tight text-foreground sm:text-5xl">
              <span className="block italic text-gold-deep">Cinco vozes</span>
              que pararam de travar.
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {testimonials.map((t, i) => (
              <figure
                key={i}
                className={`reveal reveal-delay-${(i % 4) + 1} group relative overflow-hidden rounded-3xl border border-foreground/10 bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-soft sm:p-8 ${
                  i === 4 ? "sm:col-span-2" : ""
                }`}
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="numeral-display text-3xl font-bold text-gold-deep">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Waveform className="h-6 w-20 text-gold-deep/50" bars={14} />
                </div>
                <blockquote className="font-display text-lg leading-snug text-foreground sm:text-xl">
                  <span className="mr-1 align-top text-3xl leading-none text-gold-deep">“</span>
                  {t.quote}
                  <span className="ml-1 align-baseline text-3xl leading-none text-gold-deep">”</span>
                </blockquote>
                <figcaption className="mt-6 flex items-center justify-between border-t border-foreground/10 pt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  <span className="font-semibold text-foreground">{t.name}</span>
                  <span>{t.role}</span>
                  <span className="hidden sm:inline">{t.city}</span>
                </figcaption>
                <span className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/0 transition-all duration-500 group-hover:bg-gold/15" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ============== PAIN ============== */}
      <section id="dobra-dor" className="relative overflow-hidden bg-secondary/50 py-20 sm:py-28">
        <div aria-hidden className="absolute inset-0 noise opacity-50" />
        <div className="relative mx-auto max-w-3xl px-5">
          <SectionMark number="02" label="Os pensamentos que te param" className="reveal text-foreground/70" />
          <h2 className="reveal mt-6 font-display text-3xl font-bold leading-[1] tracking-tight text-foreground sm:text-5xl">
            Na hora de falar,
            <span className="block italic text-gold-deep">sua mente corre</span>
            e sua voz some.
          </h2>

          <div className="mt-12 space-y-3">
            {painThoughts.map((p, i) => (
              <div
                key={i}
                className={`reveal reveal-delay-${(i % 4) + 1} group flex items-start gap-5 border-l-2 border-gold/40 bg-card/80 px-5 py-4 transition-all hover:border-gold hover:bg-card`}
              >
                <span className="numeral-display mt-1 text-xs tabular-nums text-foreground/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-display text-lg italic leading-relaxed text-foreground/85 sm:text-xl">
                  “{p}”
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== WHY ============== */}
      <section className="relative overflow-hidden bg-gradient-navy py-20 text-cream sm:py-28">
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, oklch(0.78 0.13 75 / 0.12), transparent 45%), radial-gradient(circle at 80% 70%, oklch(0.65 0.14 70 / 0.10), transparent 45%)",
        }} />
        <div className="relative mx-auto max-w-4xl px-5">
          <SectionMark number="03" label="Por que isso acontece" className="reveal text-cream/70" />

          <h2 className="reveal mt-6 font-display text-3xl font-bold leading-[0.95] tracking-tight sm:text-5xl">
            Cinco curtos
            <span className="block italic text-gold">circuitos quebrados</span>
            no seu treino.
          </h2>

          <ol className="mt-14 space-y-2">
            {reasons.map((r, i) => (
              <li
                key={i}
                className={`reveal reveal-delay-${(i % 4) + 1} group grid grid-cols-[auto_1fr] items-start gap-6 border-t border-cream/15 py-7 transition-colors hover:bg-white/[0.03] sm:grid-cols-[120px_1fr_auto] sm:gap-10`}
              >
                <span className="numeral-display text-5xl font-bold leading-none text-gold sm:text-6xl">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-cream sm:text-2xl">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-cream/70">{r.body}</p>
                </div>
                <span className="hidden self-center text-xs uppercase tracking-[0.3em] text-cream/40 sm:block">
                  causa
                </span>
              </li>
            ))}
            <li className="reveal border-t border-cream/15 pt-7">
              <p className="font-display text-2xl italic leading-snug text-gold sm:text-3xl">
                E existe uma forma simples de resolver isso.
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* ============== HOW IT WORKS ============== */}
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-5">
          <div className="reveal flex flex-wrap items-end justify-between gap-6">
            <SectionMark number="04" label="O método em três passos" className="text-foreground/70" />
            <h2 className="font-display text-3xl font-bold leading-[0.95] tracking-tight sm:text-5xl">
              Treine,
              <span className="italic text-gold-deep"> grave, </span>
              ajuste.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {steps.map((s, i) => (
              <article
                key={i}
                className={`reveal reveal-delay-${i + 1} group relative flex h-full flex-col overflow-hidden rounded-3xl border border-foreground/15 bg-card p-7 transition-all hover:-translate-y-1 hover:border-gold/60 hover:shadow-soft`}
              >
                <div className="flex items-baseline justify-between">
                  <span className="numeral-display text-6xl font-bold leading-none text-gold-deep sm:text-7xl">
                    {s.num}
                  </span>
                  <Asterisk className="h-4 w-4 text-foreground/40 transition-colors group-hover:text-gold-deep" />
                </div>
                <h3 className="mt-8 font-display text-2xl font-semibold leading-tight text-foreground">
                  {s.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{s.desc}</p>
                <span className="mt-6 inline-flex w-fit items-center gap-2 border-t border-foreground/10 pt-4 text-[10px] uppercase tracking-[0.3em] text-foreground/55">
                  passo {s.num}
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============== WHAT YOU GET ============== */}
      <section className="relative overflow-hidden bg-secondary/40 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-5">
          <SectionMark number="05" label="O que você recebe" className="reveal text-foreground/70" />
          <div className="reveal mt-10 grid items-center gap-10 rounded-[2rem] border border-foreground/10 bg-card p-8 sm:grid-cols-[auto_1fr] sm:p-12 shadow-soft">
            <div className="relative flex h-40 w-40 shrink-0 items-center justify-center self-center sm:h-48 sm:w-48">
              <div className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-gold/50" />
              <span className="numeral-display text-7xl font-bold text-gold-deep sm:text-8xl">30</span>
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-[0.3em] text-gold-deep">Item único</span>
              <h3 className="mt-2 font-display text-2xl font-bold leading-tight sm:text-3xl">
                Os 30 exercícios de confiança para falar em público.
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Treina por uma ou duas horas e fala sem travar na próxima apresentação, reunião ou entrevista. Treinos curtos para voz, ritmo, abertura, pausas e respostas.
              </p>
              <Waveform className="mt-6 h-8 w-full text-gold-deep/60" bars={48} />
            </div>
          </div>
        </div>
      </section>

      {/* ============== FOR YOU / NOT FOR YOU ============== */}
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-5">
          <SectionMark number="06" label="Confere se serve pra você" className="reveal text-foreground/70" />
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <div className="reveal rounded-3xl border border-foreground/10 bg-card p-8">
              <h3 className="flex items-center gap-3 font-display text-2xl font-bold text-foreground">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gold/20 text-gold-deep">
                  <svg viewBox="0 0 24 24" className="h-4 w-4"><path d="M5 12l5 5L20 7" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                É pra você
              </h3>
              <ul className="mt-6 space-y-4">
                {forYou.map((item, i) => (
                  <li key={i} className="grid grid-cols-[auto_1fr] gap-4 border-t border-foreground/10 pt-4 first:border-0 first:pt-0">
                    <span className="numeral-display text-sm tabular-nums text-gold-deep">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-base leading-relaxed text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="reveal reveal-delay-1 rounded-3xl border border-foreground/10 bg-navy p-8 text-cream">
              <h3 className="flex items-center gap-3 font-display text-2xl font-bold">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-cream/10 text-cream">
                  <svg viewBox="0 0 24 24" className="h-4 w-4"><path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/></svg>
                </span>
                Não é pra você
              </h3>
              <ul className="mt-6 space-y-4">
                {notForYou.map((item, i) => (
                  <li key={i} className="grid grid-cols-[auto_1fr] gap-4 border-t border-cream/15 pt-4 first:border-0 first:pt-0">
                    <span className="numeral-display text-sm tabular-nums text-gold">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-base leading-relaxed text-cream/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============== OFFER ============== */}
      <section id="oferta" className="relative overflow-hidden bg-gradient-navy py-24 text-cream sm:py-32">
        <div aria-hidden className="pointer-events-none absolute inset-0" style={{
          backgroundImage:
            "radial-gradient(circle at 50% 30%, oklch(0.78 0.13 75 / 0.18), transparent 50%)",
        }} />

        <div className="relative mx-auto max-w-3xl px-5">
          <SectionMark number="07" label="A oferta" className="reveal text-cream/70" />

          <h2 className="reveal mt-6 font-display text-4xl font-bold leading-[0.92] tracking-tight sm:text-6xl">
            Por trinta exercícios,
            <span className="block italic text-gold">um preço justo.</span>
          </h2>

          <div className="reveal reveal-delay-1 mt-12 overflow-hidden rounded-[2rem] bg-cream text-foreground shadow-2xl">
            {/* Receipt header */}
            <div className="flex items-center justify-between border-b border-dashed border-foreground/30 px-7 py-5 text-[11px] uppercase tracking-[0.3em] text-foreground/60">
              <span>recibo</span>
              <span className="numeral-display tabular-nums">No 0030</span>
              <span>flávia lucas</span>
            </div>

            <div className="px-7 py-8 sm:px-10">
              <div className="flex items-baseline justify-between gap-4 border-b border-dashed border-foreground/20 pb-5">
                <div>
                  <div className="text-xs uppercase tracking-[0.25em] text-foreground/55">Item 01</div>
                  <div className="mt-1 font-display text-lg font-semibold sm:text-xl">
                    30 Exercícios de Confiança para Falar em Público
                  </div>
                </div>
                <div className="numeral-display text-lg font-bold tabular-nums text-foreground/55 line-through sm:text-xl">
                  R$ 197
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between text-sm uppercase tracking-[0.25em] text-foreground/60">
                <span>total à vista</span>
                <span className="numeral-display tabular-nums">hoje</span>
              </div>

              <div className="mt-2 flex items-baseline justify-between gap-4">
                <span className="font-display text-base font-semibold">você paga</span>
                <span className="numeral-display text-7xl font-bold leading-none text-navy sm:text-8xl">
                  <span className="text-3xl align-top text-gold-deep">R$</span>47
                </span>
              </div>

              <div className="mt-3 text-right text-xs uppercase tracking-[0.3em] text-gold-deep">
                economia de R$ 150
              </div>

              <div className="mt-8">
                <CTAButton label="quero agora" />
              </div>

              <div className="mt-7 flex items-start gap-5 border-t border-dashed border-foreground/20 pt-6">
                <div className="h-20 w-20 shrink-0 text-navy">
                  <StampSeal text="garantia 7 dias incondicional" />
                </div>
                <div className="text-sm leading-relaxed text-foreground/80">
                  Você tem sete dias para testar. Não gostou, pede reembolso e o dinheiro volta. Sem perguntas, sem enrolação.
                </div>
              </div>
            </div>

            {/* receipt notch */}
            <div
              aria-hidden
              className="h-4 w-full"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 8px 0, transparent 8px, oklch(0.985 0.012 75) 8px)",
                backgroundSize: "16px 16px",
              }}
            />
          </div>
        </div>
      </section>

      {/* ============== PERSONAL LETTER ============== */}
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto grid max-w-5xl gap-12 px-5 md:grid-cols-[1fr_auto]">
          <div className="reveal">
            <SectionMark number="08" label="Carta da autora" className="text-foreground/70" />
            <h2 className="mt-6 font-display text-3xl font-bold leading-[1] sm:text-5xl">
              Eu já tremi a voz
              <span className="block italic text-gold-deep">diante de dez pessoas.</span>
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-foreground/85 sm:text-lg">
              <p>Eu sei como é encarar uma sala e sentir o corpo travar. A boca seca, a mente branca, e você pensa: salvei mil dicas. Na hora H, nada sai.</p>
              <p>Também falei rápido só pra acabar logo. Por isso criei os <strong className="text-foreground">30 Exercícios de Confiança para Falar em Público</strong>. São treinos curtos para voz, ritmo, começo e respostas.</p>
              <p>Você pratica por uma ou duas horas e ganha firmeza na próxima fala. Funciona porque põe o corpo para agir, não só lembrar teoria.</p>
              <p className="font-display text-xl italic leading-snug text-foreground sm:text-2xl">Quando o corpo repete, a ansiedade cede. Você entra na sala com voz estável e presença tranquila. Eu vi em mim e em muita gente. Você também consegue.</p>
              <p className="font-display italic text-foreground/70">Flávia Lucas</p>
            </div>
          </div>

          <div className="reveal reveal-delay-2 mx-auto md:sticky md:top-10 md:self-start">
            <div className="relative">
              <div className="absolute -inset-3 rounded-full bg-gradient-cta opacity-40 blur-2xl" />
              <img
                src={flaviaPhoto}
                alt="Flávia Lucas"
                className="relative h-44 w-44 rounded-full border-4 border-cream object-cover shadow-soft sm:h-56 sm:w-56"
                loading="lazy"
              />
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-gold/60 bg-cream px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-gold-deep">
                desde 2003
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ============== AUTHORITY ============== */}
      <section className="relative overflow-hidden bg-secondary/40 py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-5">
          <SectionMark number="09" label="Sobre Flávia Lucas" className="reveal text-foreground/70" />

          <div className="reveal mt-10 grid gap-8 md:grid-cols-[1.2fr_1fr]">
            <div className="overflow-hidden rounded-3xl">
              <img
                src={flaviaPhoto}
                alt="Flávia Lucas, mentora de oratória"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>

            <div className="flex flex-col justify-center">
              <h2 className="font-display text-3xl font-bold leading-[0.95] sm:text-4xl">
                A maior mentora de oratória
                <span className="italic text-gold-deep"> do Brasil.</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Especialista em comunicação estratégica e posicionamento digital.
              </p>

              <ul className="mt-8 space-y-5">
                {[
                  { num: "1.6M", body: "seguidores construídos sobre uma única promessa: ensinar a falar de um jeito que ninguém esquece." },
                  { num: "8k+", body: "alunos formados em programas que moldaram vozes, presenças e trajetórias." },
                  { num: "20+", body: "anos de domínio sobre a língua, a palavra e a arte de comunicar." },
                  { num: "TOP", body: "uma das maiores audiências do Brasil em comunicação e oratória." },
                ].map((item, i) => (
                  <li key={i} className="grid grid-cols-[80px_1fr] items-baseline gap-5 border-t border-foreground/10 pt-5 first:border-0 first:pt-0">
                    <span className="numeral-display text-2xl font-bold text-gold-deep">{item.num}</span>
                    <span className="text-base leading-relaxed text-foreground/85">{item.body}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============== FAQ ============== */}
      <section className="bg-background py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-5">
          <SectionMark number="10" label="Perguntas mais frequentes" className="reveal text-foreground/70" />
          <h2 className="reveal mt-6 font-display text-3xl font-bold leading-[1] sm:text-5xl">
            Toque pra abrir
            <span className="italic text-gold-deep">.</span>
          </h2>
          <div className="reveal reveal-delay-1 mt-10 border-t border-foreground/15">
            {faqs.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} idx={i} />)}
          </div>
        </div>
      </section>

      {/* ============== FINAL CTA ============== */}
      <section className="relative overflow-hidden bg-gradient-navy py-24 text-cream sm:py-32">
        <div aria-hidden className="absolute inset-0 pointer-events-none" style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, oklch(0.78 0.13 75 / 0.22), transparent 55%)",
        }} />
        <div className="relative mx-auto max-w-2xl px-5 text-center">
          <OrnamentRule className="reveal text-gold/70" />
          <h2 className="reveal mt-8 font-display text-4xl font-bold leading-[0.95] tracking-tight sm:text-6xl">
            Sua próxima fala
            <span className="block">pode ser</span>
            <span className="italic text-shine">a virada.</span>
          </h2>
          <Waveform className="reveal reveal-delay-1 mx-auto mt-10 h-12 w-64 text-gold" bars={32} />
          <div className="reveal reveal-delay-2 mt-10 numeral-display text-7xl font-bold leading-none text-gold sm:text-8xl">
            R$ 47
          </div>
          <p className="reveal reveal-delay-2 mt-2 text-xs uppercase tracking-[0.3em] text-cream/60">
            à vista, com 7 dias de garantia
          </p>
          <div className="reveal reveal-delay-3 mx-auto mt-10 max-w-sm">
            <CTAButton label="quero os 30 exercícios" />
          </div>
        </div>
      </section>

      {/* ============== FOOTER ============== */}
      <footer className="border-t border-foreground/10 bg-background py-10">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-5 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
          <div className="flex items-center gap-3">
            <Asterisk className="h-3 w-3 text-gold-deep" />
            <span className="font-display italic lowercase tracking-normal text-foreground">flávia lucas</span>
          </div>
          <span>volume 01 · edição prática</span>
          <span>© {new Date().getFullYear()} todos os direitos reservados</span>
        </div>
      </footer>
    </main>
  );
}
