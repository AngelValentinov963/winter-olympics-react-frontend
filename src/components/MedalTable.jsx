const medals = [
    { r: 1, c: "Norway", n: "NOR", g: 14, s: 8, b: 6 },
    { r: 2, c: "Germany", n: "GER", g: 12, s: 10, b: 5 },
    { r: 3, c: "United States", n: "USA", g: 10, s: 12, b: 9 },
    { r: 4, c: "Austria", n: "AUT", g: 9, s: 5, b: 10 },
    { r: 5, c: "Canada", n: "CAN", g: 8, s: 4, b: 11 },
    { r: 6, c: "Japan", n: "JPN", g: 5, s: 4, b: 6 },
];

export default function MedalTable() {
    return (
        <section className="px-6 py-20 md:px-12">
            <div className="mb-12 border-b border-slate-900 pb-4">
                <h2 className="text-4xl font-bold uppercase">
                    Medal Table
                </h2>
            </div>

            <table className="w-full text-left">
                <thead className="border-b border-slate-900">
                    <tr className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                        <th className="w-16 py-4 pr-4">#</th>
                        <th className="py-4 pr-4">Nation</th>
                        <th className="py-4 pr-4 text-right">Gold</th>
                        <th className="py-4 pr-4 text-right">Silver</th>
                        <th className="py-4 pr-4 text-right">Bronze</th>
                        <th className="py-4 text-right">Total</th>
                    </tr>
                </thead>

                <tbody>
                    {medals.map((m) => (
                        <tr
                            key={m.r}
                            className="group border-b border-slate-200 transition-colors hover:bg-sky-50"
                        >
                            <td className="py-6 pr-4 text-2xl font-bold text-slate-400 group-hover:text-sky-500">
                                {String(m.r).padStart(2, "0")}
                            </td>

                            <td className="py-6 pr-4">
                                <div className="text-lg font-bold uppercase">
                                    {m.c}
                                </div>

                                <div className="font-mono text-xs text-slate-400">
                                    {m.n}
                                </div>
                            </td>

                            <td className="py-6 pr-4 text-right font-mono font-bold text-amber-500">
                                {m.g}
                            </td>

                            <td className="py-6 pr-4 text-right font-mono font-bold text-slate-500">
                                {m.s}
                            </td>

                            <td className="py-6 pr-4 text-right font-mono font-bold text-orange-700">
                                {m.b}
                            </td>

                            <td className="py-6 text-right text-xl font-bold">
                                {m.g + m.s + m.b}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}