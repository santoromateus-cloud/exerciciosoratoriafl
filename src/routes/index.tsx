import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Mic, CheckCircle2, XCircle, Star, Clock, Download, Play,
  ShieldCheck, Sparkles, ChevronDown, Quote, ArrowRight, Zap,
} from "lucide-react";
import productMockup from "@/assets/product-mockup.png";
import flaviaPhoto from "@/assets/flavia-lucas.png";

export const Route = createFileRoute("/")({
  component: SalesPage,
});

const testimonials = [
  { quote: "Caramba, eu sempre travava. Fiz os primeiros exercícios e apresentei o relatório sem gaguejar. Voz firme, olhar no olho. Saí da reunião orgulhoso de mim.", name: "Lucas", role: "Analista de TI" },
  { quote: "Eu salvo mil dicas, mas na hora H eu travava. Esses 30 exercícios me deram um começo pronto. Abri a fala em 20 segundos e prendi a sala.", name: "Bruna", role: "Estagiária de Marketing" },
  { quote: "Sério, eu falava igual metralhadora. Treinei respiração e pausas do arquivo. Cronometrei: cai de 180 para 135 palavras por minuto. Ficou claro, sem parecer robô.", name: "Daniela", role: "Belo Horizonte" },
  { quote: "Achei que era mais um PDF qualquer, confesso. Me surpreendi. Treinei respostas rápidas e finalmente encarei perguntas chatas sem branco. Até brinquei com uma, a sala riu.", name: "Renato", role: "Engenheiro Civil" },
  { quote: "Mano, usei antes da entrevista e foi tiro certo. Estruturei pitch de 60 segundos, mantive contato visual e mãos calmas. Saí com convite pra segunda etapa.", name: "Diego", role: "Estudante de Administração" },
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
  "Você tenta decorar palavra por palavra. Sua memória de trabalho sobrecarrega e dá branco.",
  "Você pratica só na cabeça. Seu corpo não aprende ritmo, respiração e pausas.",
  "Você não tem aberturas e fechamentos prontos. Sem ponto de partida, o cérebro entra em alerta.",
  "Você chega com cafeína alta e postura fechada. Seu corpo lê perigo e corta o ar.",
  "Você acumula dicas sem sequência de treino. Não é sua culpa; sem ordem, o cérebro não cria hábito.",
];

const steps = [
  { icon: Download, title: "Baixe e abra o arquivo", desc: "No seu celular ou computador. Você encontra os 30 exercícios listados, com instruções claras para cada um." },
  { icon: Clock, title: "Treine 20 a 30 minutos", desc: "Escolha um bloco e cronometre. Treine respiração, postura, abertura e pausas. Use o cronômetro do celular." },
  { icon: Mic, title: "Repita e finalize com mini-teste", desc: "Em 60 a 90 minutos: grave 60 segundos, ouça, ajuste pausas e tom. Você fala sem travar, com voz firme." },
];

const forYou = [
  "Você que trava na apresentação do trabalho ou na reunião da empresa.",
  "Você que vai apresentar TCC, seminário ou projeto e não sabe começar.",
  "Você que salvou mil dicas e, na hora H, acelera ou falha.",
  "Você que precisa responder perguntas sem tremer e treinar hoje.",
  "Você que está começando a carreira e quer uma saída simples.",
];

const notForYou = [
  "Se você espera milagre sem esforço ou sem praticar os exercícios.",
  "Se você não topa separar 1 a 2 horas para treinar.",
  "Se você quer um curso longo, cheio de teoria e módulos.",
  "Se você busca alguém guiando ao vivo ou fazendo por você.",
];

const faqs = [
  { q: "Como vou receber e acessar?", a: "Na hora. Você recebe o link de download no e-mail e na tela. É um Produto Instantâneo. Arquivo digital. Baixe e use hoje." },
  { q: "Funciona pro meu caso ou nicho?", a: "Sim. Serve para estudante e início de carreira. Apresentações, reuniões, entrevistas, online ou presencial. Os exercícios cobrem início, meio, fim e perguntas." },
  { q: "E se eu não gostar?", a: "Sim. Você tem 7 dias para pedir reembolso total. Sem enrolação. Não aprovou, pede e pronto." },
  { q: "Preciso de alguma ferramenta ou conhecimento prévio?", a: "Não. Você não precisa de experiência, curso ou equipamento. Só seguir os passos. Ler, falar, gravar e repetir. Serve no celular ou no computador." },
  { q: "Em quanto tempo vejo resultado?", a: "Rápido. Em 1-2 horas você destrava, organiza sua fala e ganha firmeza. Faça hoje e use na próxima apresentação, reunião ou entrevista." },
  { q: "É teoria ou prática?", a: "Prática. Você recebe 30 exercícios curtos e diretos. Treinos de voz, ritmo, pausas, começo e fechamento. Nada teórico. É fazer e notar a evolução." },
  { q: "Posso usar sempre que precisar?", a: "Sim. Uso ilimitado. Baixe e repita quando quiser. Antes de cada fala, refaça os exercícios-chave. Você cria um ritual rápido e confiável." },
];

function CTAButton({ label = "QUERO AGORA", className = "" }: { label?: string; className?: string }) {
  return (
    <a
      href="#oferta"
      className={`group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-cta px-8 py-5 text-center text-base font-bold uppercase tracking-wide text-navy shadow-gold transition-transform hover:scale-[1.02] active:scale-[0.99] sm:text-lg ${className}`}
      style={{ minHeight: 56 }}
    >
      {label}
      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

function Divider() {
  return (
    <div className="mx-auto my-2 flex items-center justify-center gap-2 opacity-60">
      <span className="h-px w-10 bg-gold" />
      <span className="h-1.5 w-1.5 rounded-full bg-gold" />
      <span className="h-px w-10 bg-gold" />
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
        style={{ minHeight: 64 }}
      >
        <span className="font-semibold text-foreground">{q}</span>
        <ChevronDown className={`h-5 w-5 shrink-0 text-gold transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="px-5 pb-5 text-base leading-relaxed text-muted-foreground">{a}</div>}
    </div>
  );
}

function SalesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero pb-12 pt-10 sm:pt-16">
        <div className="absolute inset-0 -z-10 opacity-40" style={{
          backgroundImage: "radial-gradient(circle at 20% 10%, oklch(0.78 0.13 75 / 0.18), transparent 50%), radial-gradient(circle at 80% 80%, oklch(0.24 0.06 265 / 0.08), transparent 50%)",
        }} />
        <div className="mx-auto max-w-3xl px-5">
          <div className="mb-5 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold-deep">
              <Sparkles className="h-3.5 w-3.5" /> Produto Instantâneo
            </span>
          </div>
          <h1 className="text-balance text-center font-display text-4xl font-bold leading-[1.05] text-navy sm:text-5xl md:text-6xl">
            Fale em público sem travar em <em className="not-italic text-gold-deep">2 horas</em> — sem decorar roteiro
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-balance text-center text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Voz firme na próxima apresentação, reunião da empresa ou entrevista, com <strong className="text-foreground">30 exercícios práticos</strong>.
          </p>

          <div className="relative mx-auto mt-10 flex max-w-sm justify-center">
            <div className="absolute inset-x-0 bottom-0 mx-auto h-10 w-3/4 rounded-full bg-navy/30 blur-3xl" />
            <img
              src={productMockup}
              alt="Mockup do ebook 30 Exercícios de Confiança para Falar em Público"
              className="relative w-full max-w-[360px] drop-shadow-2xl animate-float"
              width={512}
              height={512}
            />
          </div>

          <div className="mx-auto mt-10 max-w-sm">
            <CTAButton label="QUERO MINHA VOZ FIRME" />
            <p className="mt-3 text-center text-sm text-muted-foreground">
              <ShieldCheck className="mr-1 inline h-4 w-4 text-success" />
              7 dias de garantia • Acesso imediato
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-secondary/40 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5">
          <div className="mb-10 text-center">
            <div className="mb-3 flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-gold text-gold" />
              ))}
            </div>
            <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">Quem treinou, destravou</h2>
          </div>
          <div className="space-y-5">
            {testimonials.map((t, i) => (
              <figure key={i} className="relative rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
                <Quote className="absolute -top-3 left-6 h-8 w-8 rounded-full bg-gold p-1.5 text-navy" />
                <blockquote className="text-base leading-relaxed text-foreground sm:text-lg">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-4 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-navy font-display text-base font-bold text-cream">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{t.name}</div>
                    <div className="text-sm text-muted-foreground">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* PAIN */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="text-balance text-center font-display text-3xl font-bold leading-tight text-navy sm:text-4xl">
            Na hora de falar, sua mente corre e sua voz some.
          </h2>
          <Divider />
          <div className="mt-8 space-y-3">
            {painThoughts.map((p, i) => (
              <div key={i} className="rounded-2xl border-l-4 border-gold/70 bg-card px-5 py-4 italic text-muted-foreground shadow-sm">
                "{p}"
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY IT HAPPENS */}
      <section className="bg-gradient-navy py-16 text-cream sm:py-20">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="text-balance text-center font-display text-3xl font-bold sm:text-4xl">
            Isso acontece porque…
          </h2>
          <ol className="mt-10 space-y-5">
            {reasons.map((r, i) => (
              <li key={i} className="flex gap-4 rounded-2xl bg-white/5 p-5 backdrop-blur">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold font-display text-lg font-bold text-navy">
                  {i + 1}
                </span>
                <p className="text-base leading-relaxed text-cream/90 sm:text-lg">{r}</p>
              </li>
            ))}
          </ol>
          <p className="mt-10 text-balance text-center font-display text-2xl italic text-gold sm:text-3xl">
            E existe uma forma simples de resolver isso.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="text-balance text-center font-display text-3xl font-bold text-navy sm:text-4xl">
            Funciona em 3 passos simples
          </h2>
          <Divider />
          <div className="mt-10 space-y-5">
            {steps.map((s, i) => (
              <div key={i} className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-cta text-navy">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-gold-deep">Passo {i + 1}</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-navy">{s.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="bg-secondary/40 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="text-center font-display text-3xl font-bold text-navy sm:text-4xl">
            Veja o que você recebe
          </h2>
          <Divider />
          <div className="mt-8 rounded-3xl border-2 border-gold/40 bg-card p-6 shadow-gold sm:p-10">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-cta text-navy">
                <Zap className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-navy sm:text-2xl">
                  Os 30 melhores Exercícios de Confiança para Falar em Público
                </h3>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                  Você treina 2 horas e fala sem travar na próxima apresentação.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOR YOU / NOT FOR YOU */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl space-y-6 px-5">
          <div className="rounded-3xl border border-success/30 bg-success/5 p-6 sm:p-8">
            <h3 className="mb-5 flex items-center gap-2 font-display text-2xl font-bold text-navy">
              <CheckCircle2 className="h-6 w-6 text-success" /> É pra você
            </h3>
            <ul className="space-y-3">
              {forYou.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-base leading-relaxed">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-success" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-destructive/20 bg-destructive/5 p-6 sm:p-8">
            <h3 className="mb-5 flex items-center gap-2 font-display text-2xl font-bold text-navy">
              <XCircle className="h-6 w-6 text-destructive" /> NÃO é pra você
            </h3>
            <ul className="space-y-3">
              {notForYou.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-base leading-relaxed text-muted-foreground">
                  <XCircle className="mt-1 h-5 w-5 shrink-0 text-destructive/70" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* OFFER */}
      <section id="oferta" className="bg-gradient-navy py-16 text-cream sm:py-24">
        <div className="mx-auto max-w-2xl px-5">
          <div className="mb-8 text-center">
            <span className="inline-block rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold">
              Oferta especial
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">
              Recapitulando o que você vai receber
            </h2>
          </div>

          <div className="rounded-3xl bg-cream p-6 text-foreground shadow-2xl sm:p-10">
            <div className="space-y-4 border-b border-border pb-6">
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-base font-medium sm:text-lg">30 Exercícios de Confiança para Falar em Público</span>
                <span className="shrink-0 font-display text-lg font-bold text-navy">R$ 197</span>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between text-lg font-semibold">
              <span>TOTAL</span>
              <span className="font-display text-xl text-navy">R$ 197</span>
            </div>

            <p className="mt-6 text-center text-sm text-muted-foreground">
              Por tudo isso, você poderia esperar pagar bem mais.
            </p>

            <div className="mt-6 text-center">
              <div className="text-base text-muted-foreground">
                De <span className="line-through">R$ 197</span>
              </div>
              <div className="mt-2 text-sm font-semibold uppercase tracking-wider text-gold-deep">
                Por apenas
              </div>
              <div className="mt-1 font-display text-6xl font-bold leading-none text-navy sm:text-7xl">
                R$ 47
              </div>
              <div className="mt-2 text-sm text-muted-foreground">à vista</div>
            </div>

            <div className="mt-8">
              <CTAButton label="QUERO AGORA" />
            </div>

            <div className="mt-6 flex items-start gap-3 rounded-2xl bg-success/10 p-4 text-sm">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-success" />
              <p className="text-foreground">
                <strong>Garantia de 7 dias.</strong> Não gostou? Seu dinheiro volta. Sem perguntas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PERSONAL LETTER */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5">
          <div className="grid gap-8 sm:grid-cols-[1fr_auto] sm:items-start">
            <div className="space-y-4 text-base leading-relaxed text-foreground sm:text-lg">
              <p>Eu sei como é encarar uma sala e sentir o corpo travar.</p>
              <p>A boca seca, a mente branca, e você pensa: <em>salvei mil dicas</em>. Na hora H, nada sai.</p>
              <p>Eu já tremi a voz diante de dez pessoas. Também falei rápido só para acabar logo.</p>
              <p>Por isso criei <strong>30 Exercícios de Confiança para Falar em Público</strong>. São treinos curtos para voz, ritmo, começo e respostas.</p>
              <p>Você pratica por uma ou duas horas e ganha firmeza na próxima fala. E funciona porque põe seu corpo para agir, não só lembrar teoria.</p>
              <p>Quando o corpo repete, a ansiedade cede. Você entra na sala com voz estável e presença tranquila.</p>
              <p className="font-display text-xl italic text-gold-deep">Eu vi isso em mim e em muita gente. Você também consegue.</p>
            </div>
            <div className="mx-auto sm:sticky sm:top-6">
              <div className="relative">
                <div className="absolute -inset-2 rounded-full bg-gradient-cta opacity-30 blur-xl" />
                <img
                  src={flaviaPhoto}
                  alt="Flávia Lucas"
                  className="relative h-40 w-40 rounded-full border-4 border-cream object-cover shadow-soft sm:h-48 sm:w-48"
                  loading="lazy"
                />
              </div>
              <p className="mt-3 text-center font-display text-lg font-semibold text-navy">Flávia Lucas</p>
            </div>
          </div>
        </div>
      </section>

      {/* AUTHORITY */}
      <section className="bg-secondary/40 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5">
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
            <div className="aspect-[16/9] w-full overflow-hidden bg-muted sm:aspect-[21/9]">
              <img
                src={flaviaPhoto}
                alt="Flávia Lucas, mentora de oratória"
                className="h-full w-full object-cover object-top"
                loading="lazy"
              />
            </div>
            <div className="p-6 sm:p-10">
              <h2 className="font-display text-2xl font-bold text-navy sm:text-3xl">
                Flávia Lucas
              </h2>
              <p className="mt-2 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Maior mentora de oratória e comunicação do Brasil, especialista em comunicação estratégica e posicionamento digital.
              </p>

              <ul className="mt-6 space-y-4">
                {[
                  "+1,6 milhão de seguidores construídos sobre uma única promessa: ensinar a falar de um jeito que ninguém esquece",
                  "+8.000 alunos formados em programas que moldaram vozes, presenças e trajetórias",
                  "Mais de duas décadas de domínio sobre a língua, a palavra e a arte de comunicar",
                  "Uma das maiores audiências do Brasil em comunicação e oratória, com presença consolidada em Instagram, TikTok e YouTube",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-gold" />
                    <span className="text-base leading-relaxed text-foreground">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-8 rounded-2xl bg-secondary/60 p-5 text-base leading-relaxed text-foreground">
                Com essa bagagem, você usa os <strong>30 Exercícios de Confiança para Falar em Público</strong>. Produto Instantâneo. Baixe, treine por 1-2 horas e fale sem travar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-5">
          <h2 className="text-center font-display text-3xl font-bold text-navy sm:text-4xl">
            Perguntas frequentes
          </h2>
          <Divider />
          <div className="mt-8 space-y-3">
            {faqs.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-gradient-navy py-16 text-cream sm:py-24">
        <div className="mx-auto max-w-xl px-5 text-center">
          <Play className="mx-auto h-12 w-12 rounded-full bg-gradient-cta p-3 text-navy animate-pulse-gold" />
          <h2 className="mt-6 text-balance font-display text-3xl font-bold sm:text-4xl">
            Sua próxima fala pode ser a virada.
          </h2>
          <div className="mt-6 font-display text-6xl font-bold text-gold sm:text-7xl">R$ 47</div>
          <p className="mt-2 text-cream/70">à vista, com 7 dias de garantia</p>
          <div className="mx-auto mt-8 max-w-sm">
            <CTAButton label="Quero os 30 Exercícios agora" />
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-background py-8">
        <div className="mx-auto max-w-3xl px-5 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Flávia Lucas — Todos os direitos reservados.
        </div>
      </footer>
    </main>
  );
}
