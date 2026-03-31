import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-6">
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center gap-8 text-center"
      >
        {/* Terminal-style label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 font-[family-name:var(--font-mono)] text-xs tracking-wider text-muted-foreground"
        >
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-primary" />
          currently building
        </motion.div>

        {/* Name */}
        <h1 className="font-[family-name:var(--font-mono)] text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
          minwoolee
          <span className="text-primary">.dev</span>
        </h1>

        {/* Tagline */}
        <p className="max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
          Portfolio & personal site — something great is on the way.
        </p>

        {/* Cursor blink */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="font-[family-name:var(--font-mono)] text-sm text-muted-foreground"
        >
          <span className="text-primary">$</span> coming_soon
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
            className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-primary"
          />
        </motion.div>
      </motion.div>

      {/* Footer */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 font-[family-name:var(--font-mono)] text-xs text-muted-foreground"
      >
        © {new Date().getFullYear()} Minwoo Lee
      </motion.p>
    </div>
  );
};

export default Index;
