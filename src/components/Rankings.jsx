const rankings = [
    { r: 1, name: "Ingrid Landvik", noc: "NOR", d: "Alpine Skiing", p: 1420 },
    { r: 2, name: "Marco Odermatt", noc: "SUI", d: "Alpine Skiing", p: 1385 },
    { r: 3, name: "Johannes Bø", noc: "NOR", d: "Biathlon", p: 1310 },
    { r: 4, name: "Yuzuru Aoki", noc: "JPN", d: "Figure Skating", p: 1268 },
    { r: 5, name: "Chloe Kim", noc: "USA", d: "Snowboard", p: 1224 },
    { r: 6, name: "Mikaela Shiffrin", noc: "USA", d: "Alpine Skiing", p: 1128 },
];

export default function Rankings() {
    return (
        <section className="bg-sky-50 px-6 py-20 md:px-12">
            <div className="mb-12 flex items-end justify-between border-b border-slate-900 pb-4">
                <h2 className="text-4xl font-bold uppercase">
                    Rankings
                </h2>

                <div className="flex items-center gap-2">
                    <div className="size-2 animate-pulse rounded-full bg-sky-500" />

                    <span className="font-mono text-[10px] uppercase tracking-widest">
                        Updated 2 min ago
                    </span>
                </div>
            </div>

            <table className="w-full text-left">
                <thead className="border-b border-slate-900">
                    <tr className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                        <th className="w-16 py-4 pr-4">Rank</th>
                        <th className="py-4 pr-4">Athlete</th>
                        <th className="py-4 pr-4">NOC</th>
                        <th className="py-4 pr-4">Discipline</th>
                        <th className="py-4 text-right">Points</th>
                    </tr>
                </thead>

                <tbody>
                    {rankings.map((a) => (
                        <tr
                            key={a.r}
                            className="group border-b border-slate-200 transition-colors hover:bg-white"
                        >
                            <td className="py-6 pr-4 text-2xl font-bold text-slate-400 group-hover:text-sky-500">
                                {String(a.r).padStart(2, "0")}
                            </td>

                            <td className="py-6 pr-4 text-lg font-bold">
                                {a.name}
                            </td>

                            <td className="py-6 pr-4 font-mono text-sm">
                                {a.noc}
                            </td>

                            <td className="py-6 pr-4 text-sm text-slate-600">
                                {a.d}
                            </td>

                            <td className="py-6 text-right text-xl font-bold">
                                {a.p.toLocaleString()}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}