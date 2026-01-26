'use client';

import { motion, useScroll, useSpring, useTransform, Variants } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

export default function VarkoPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth scroll progress for parallax elements
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const headerY = useTransform(smoothProgress, [0, 0.2], [0, -50]);
  const headerOpacity = useTransform(smoothProgress, [0, 0.15], [1, 0]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <div className="relative min-h-screen selection:bg-emerald-500 selection:text-black">
      {/* Architectural Background Layers */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-black">
        {/* Minimal Grid */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        />

        {/* Subtle Grain Overlay */}
        <div
          className="absolute inset-0 opacity-[0.04] mix-blend-plus-lighter pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Gentle Ambient Glows */}
        <div className="absolute top-[-5%] left-[-5%] w-[30%] h-[30%] bg-emerald-500/5 blur-[100px] rounded-full" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[40%] h-[40%] bg-zinc-500/[0.02] blur-[100px] rounded-full" />
      </div>

      <motion.div
        ref={containerRef}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col justify-center max-w-5xl mx-auto px-6 space-y-40 py-32 md:py-48"
      >
        {/* Background Cursor Effect */}
        <CursorEffect />

        {/* Hero Section */}
        <motion.div
          style={{ y: headerY, opacity: headerOpacity }}
          variants={itemVariants}
          className="space-y-12"
        >
          <div className="space-y-4">
            <motion.span
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-emerald-500/80 font-mono"
            >
              Systemic Efficiency / 2026
            </motion.span>
            <motion.h1
              whileHover={{ scale: 1.01, transition: { duration: 0.4 } }}
              className="text-[14vw] md:text-[10rem] font-bold tracking-tighter leading-[0.85] text-white cursor-default"
            >
              VARKO
            </motion.h1>
          </div>

          <motion.p
            className="text-xl md:text-3xl text-zinc-200 max-w-3xl leading-snug font-light italic"
          >
            VARKO corrige lo que hoy le hace <span className="text-white font-normal underline decoration-emerald-500/30 underline-offset-8">perder clientes</span> a tu empresa.
          </motion.p>
        </motion.div>

        {/* Core Value Prop */}
        <motion.div variants={itemVariants} className="space-y-24">
          <div className="grid md:grid-cols-[1fr,1.5fr] gap-12 md:gap-24 items-start">
            <div className="space-y-4">
              <div className="w-12 h-[1px] bg-emerald-500/50" />
              <h2 className="text-xs uppercase tracking-widest text-zinc-500 font-mono">Execution Model</h2>
            </div>
            <div className="space-y-20 text-zinc-100 text-lg md:text-2xl font-light leading-relaxed">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2 }}
              >
                Arreglamos fallos reales en páginas web, redes sociales, WhatsApp y sistemas de respuesta automática que están frenando ventas, generando fricción o dando una imagen poco profesional.
                <br /><br />
                <span className="text-zinc-400 text-base md:text-lg">
                  No entregamos reportes, no hacemos auditorías, no hablamos de “posibles mejoras”.
                </span>
              </motion.p>

              <motion.div
                whileHover={{ scale: 1.01 }}
                className="relative group p-10 md:p-16 border border-zinc-900 bg-white/[0.01] transition-all duration-700 hover:border-emerald-500/30"
              >
                <p className="relative z-10 text-3xl md:text-5xl text-white font-medium leading-tight">
                  Detectamos el error <br />
                  <span className="text-emerald-500">&</span> lo solucionamos.
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, delay: 0.2 }}
              >
                Optimizamos flujos de contacto, automatizamos respuestas, corregimos estructuras web, ajustamos embudos y ordenamos la comunicación digital para que tu negocio funcione como debe: <span className="text-white font-medium border-b border-emerald-500 pb-1">claro, rápido y confiable.</span>
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          variants={itemVariants}
          className="py-12 border-y border-white/5 space-y-12"
        >
          <div className="max-w-3xl">
            <motion.p className="text-4xl md:text-7xl font-bold text-white tracking-tight leading-[0.9]">
              VARKO existe para una sola cosa:
              <br />
              <span className="text-zinc-500 block mt-4">hacer que tu sistema digital empiece a convertir.</span>
            </motion.p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:items-center text-zinc-400 text-sm tracking-widest uppercase font-mono">
            <p>Desde el primer clic</p>
            <div className="hidden md:block w-8 h-[1px] bg-zinc-800" />
            <p>Hasta la última respuesta</p>
          </div>
        </motion.div>

        {/* Footer Section */}
        <motion.div
          variants={itemVariants}
          className="pt-24 pb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-12"
        >
          <div className="space-y-6">
            <TypewriterText text="VARKO: Si no vende, no está terminado." />
            <div className="flex gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-1.5 h-1.5 bg-emerald-500/20" />
              ))}
            </div>
          </div>
          <div className="text-right space-y-1">
            <span className="text-[10px] text-zinc-700 tracking-[0.4em] uppercase font-mono block">V3.5 Internal Build</span>
            <span className="text-[10px] text-zinc-800 tracking-[0.2em] uppercase font-mono">Secure Connection / Protocol Active</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

function TypewriterText({ text }: { text: string }) {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const handleTyping = () => {
      if (!isDeleting) {
        if (displayedText.length < text.length) {
          setDisplayedText(text.substring(0, displayedText.length + 1));
          setSpeed(80); // Typing speed
        } else {
          timer = setTimeout(() => setIsDeleting(true), 4000);
          return;
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(text.substring(0, displayedText.length - 1));
          setSpeed(40); // Deleting speed
        } else {
          setIsDeleting(false);
          setSpeed(500); // Wait before restarting
        }
      }
    };

    timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, text, speed]);

  return (
    <span className="text-xs md:text-sm font-mono text-emerald-500 tracking-[0.2em] uppercase flex items-center gap-2 min-h-[1.5em] font-medium">
      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
      {displayedText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 1 }}
        className="inline-block w-4 h-[1px] bg-emerald-500 translate-y-[-2px]"
      />
    </span>
  );
}

function CursorEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('.group') || target.classList.contains('cursor-pointer')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 rounded-full border border-emerald-500/20 pointer-events-none z-[999] hidden md:block"
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? "rgba(16, 185, 129, 0.05)" : "rgba(16, 185, 129, 0)",
          borderColor: isHovering ? "rgba(16, 185, 129, 0.4)" : "rgba(16, 185, 129, 0.2)"
        }}
        transition={{
          type: "spring",
          damping: 35,
          stiffness: 300,
          mass: 0.5
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-emerald-500 rounded-full pointer-events-none z-[1000] hidden md:block"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 600,
          mass: 0.1
        }}
      />
      {/* Ambient Background Glow Effect */}
      <div
        className="fixed inset-0 pointer-events-none z-[-1] opacity-40 mix-blend-plus-lighter"
        style={{
          background: `radial-gradient(1200px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(16, 185, 129, 0.08), transparent 80%)`
        }}
      />
    </>
  );
}
