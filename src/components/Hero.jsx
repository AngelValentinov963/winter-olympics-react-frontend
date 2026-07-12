export default function Hero() {
    return (
        <section className="relative h-[85vh] overflow-hidden bg-slate-900">
            <img
                src="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=1920&q=80"
                alt="Alpine peaks"
                className="absolute inset-0 h-full w-full object-cover opacity-60"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

            <div className="relative flex h-full flex-col justify-end px-6 pb-20 md:px-12">
                <h1 className="text-7xl md:text-9xl font-bold leading-none tracking-tight text-white">
                    COLD <br /> PRECISION
                </h1>

                <p className="mt-6 max-w-xl text-lg text-white/80">
                    Experience the pinnacle of winter sports. Real-time
                    tracking, immersive results, and athlete stories.
                </p>

                <div className="mt-8 inline-flex h-12 w-fit items-center border border-white/20 bg-white/10 px-6 backdrop-blur-sm">
                    <span className="text-xs font-bold uppercase tracking-widest text-white">
                        Next Event: Men's Downhill — 14:00 CET
                    </span>
                </div>
            </div>
        </section>
    );
}