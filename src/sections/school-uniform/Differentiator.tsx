"use client";

import { motion } from "motion/react";
import { Reveal } from "@/components/primitives/Reveal";
import { DrawnPath } from "@/components/primitives/DrawnPath";

function SvgEntitySchema() {
  const W = 720;
  const H = 520;

  type Field = {
    name: string;
    type: string;
    key?: "pk" | "fk";
  };

  const tables: {
    id: string;
    title: string;
    count: string;
    x: number;
    y: number;
    w: number;
    accent: string;
    fields: Field[];
  }[] = [
    {
      id: "parents",
      title: "parents",
      count: "1 : many",
      x: 0,
      y: 80,
      w: 218,
      accent: "#3F4AAF",
      fields: [
        { name: "id", type: "uuid", key: "pk" },
        { name: "email", type: "text" },
        { name: "phone", type: "text" },
        { name: "created_at", type: "ts" },
      ],
    },
    {
      id: "childs",
      title: "childs",
      count: "pivot",
      x: 251,
      y: 32,
      w: 218,
      accent: "#10132C",
      fields: [
        { name: "id", type: "uuid", key: "pk" },
        { name: "parent_id", type: "parents", key: "fk" },
        { name: "school_id", type: "schools", key: "fk" },
        { name: "grade", type: "int" },
        { name: "sibling_of", type: "childs", key: "fk" },
        { name: "sic", type: "text" },
      ],
    },
    {
      id: "schools",
      title: "schools",
      count: "1 : many",
      x: 502,
      y: 108,
      w: 218,
      accent: "#3F4AAF",
      fields: [
        { name: "id", type: "uuid", key: "pk" },
        { name: "name", type: "text" },
        { name: "sic_codes", type: "text[]" },
        { name: "region", type: "text" },
      ],
    },
  ];

  const headerH = 44;
  const rowH = 30;

  const tableH = (t: (typeof tables)[number]) => headerH + rowH * t.fields.length + 14;

  const fieldY = (t: (typeof tables)[number], i: number) =>
    t.y + headerH + 14 + i * rowH + rowH / 2;

  const parents = tables[0];
  const childs = tables[1];
  const schools = tables[2];

  // join endpoints
  const parentsIdY = fieldY(parents, 0);
  const parentsIdX = parents.x + parents.w;

  const schoolsIdY = fieldY(schools, 0);
  const schoolsIdX = schools.x;

  const childsParentY = fieldY(childs, 1);
  const childsSchoolY = fieldY(childs, 2);
  const childsLeftX = childs.x;
  const childsRightX = childs.x + childs.w;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="w-full h-auto"
      role="img"
      aria-label="parents, childs, schools – relational schema"
    >
      <defs>
        <marker id="arrowBlue" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#3F4AAF" />
        </marker>
      </defs>

      {/* Tables */}
      {tables.map((t, ti) => {
        const h = tableH(t);
        return (
          <motion.g
            key={t.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 + ti * 0.08 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            {/* card */}
            <rect
              x={t.x}
              y={t.y}
              width={t.w}
              height={h}
              rx={3}
              fill="#ffffff"
              stroke="rgba(16,19,44,0.12)"
              strokeWidth={1}
            />
            {/* accent strip top */}
            <rect x={t.x} y={t.y} width={t.w} height={4} rx={2} fill={t.accent} />

            {/* Header row */}
            <text
              x={t.x + 18}
              y={t.y + 27}
              fill="#10132C"
              fontFamily="JetBrains Mono"
              fontSize="13"
              fontWeight="700"
              letterSpacing="0.5"
            >
              {t.title}
            </text>
            <text
              x={t.x + t.w - 18}
              y={t.y + 27}
              fill="rgba(16,19,44,0.45)"
              fontFamily="JetBrains Mono"
              fontSize="10"
              letterSpacing="1.5"
              textAnchor="end"
            >
              {t.count.toUpperCase()}
            </text>

            {/* header separator */}
            <line
              x1={t.x}
              x2={t.x + t.w}
              y1={t.y + headerH}
              y2={t.y + headerH}
              stroke="rgba(16,19,44,0.08)"
              strokeWidth={1}
            />

            {/* Field rows */}
            {t.fields.map((f, i) => {
              const y = t.y + headerH + i * rowH;
              return (
                <g key={f.name}>
                  {/* row hover tint */}
                  {i % 2 === 1 && (
                    <rect x={t.x + 1} y={y + 1} width={t.w - 2} height={rowH - 1} fill="rgba(63,74,175,0.025)" />
                  )}
                  {/* key icon */}
                  {f.key === "pk" && (
                    <g transform={`translate(${t.x + 14}, ${y + rowH / 2 - 6})`}>
                      <rect x={0} y={0} width={16} height={12} rx={2} fill="#FF5A31" opacity={0.9} />
                      <text x={8} y={9} fontSize="8" fontFamily="JetBrains Mono" fontWeight="700" fill="#fff" textAnchor="middle" letterSpacing="0.5">PK</text>
                    </g>
                  )}
                  {f.key === "fk" && (
                    <g transform={`translate(${t.x + 14}, ${y + rowH / 2 - 6})`}>
                      <rect x={0} y={0} width={16} height={12} rx={2} fill="#3F4AAF" opacity={0.92} />
                      <text x={8} y={9} fontSize="8" fontFamily="JetBrains Mono" fontWeight="700" fill="#fff" textAnchor="middle" letterSpacing="0.5">FK</text>
                    </g>
                  )}
                  {!f.key && (
                    <circle cx={t.x + 22} cy={y + rowH / 2} r={2} fill="rgba(16,19,44,0.25)" />
                  )}

                  {/* field name */}
                  <text
                    x={t.x + 40}
                    y={y + rowH / 2 + 4}
                    fill="#10132C"
                    fontFamily="JetBrains Mono"
                    fontSize="12"
                  >
                    {f.name}
                  </text>
                  {/* type */}
                  <text
                    x={t.x + t.w - 16}
                    y={y + rowH / 2 + 4}
                    fill={f.key === "fk" ? "#3F4AAF" : "rgba(16,19,44,0.45)"}
                    fontFamily="JetBrains Mono"
                    fontSize="11"
                    textAnchor="end"
                  >
                    {f.type}
                  </text>

                  {/* row divider */}
                  <line
                    x1={t.x + 12}
                    x2={t.x + t.w - 12}
                    y1={y + rowH}
                    y2={y + rowH}
                    stroke="rgba(16,19,44,0.05)"
                    strokeWidth={1}
                  />
                </g>
              );
            })}
          </motion.g>
        );
      })}

      {/* FK connectors – parents.id → childs.parent_id (left-hand curve) */}
      <DrawnPath
        d={`M ${parentsIdX} ${parentsIdY} C ${parentsIdX + 30} ${parentsIdY}, ${childsLeftX - 30} ${childsParentY}, ${childsLeftX} ${childsParentY}`}
        stroke="#3F4AAF"
        strokeWidth={1.3}
        strokeDasharray="4 5"
        strokeOpacity={0.85}
        duration={0.9}
        delay={0.8}
      />
      {/* arrow head */}
      <motion.path
        d={`M ${childsLeftX - 6} ${childsParentY - 4} L ${childsLeftX} ${childsParentY} L ${childsLeftX - 6} ${childsParentY + 4}`}
        fill="none"
        stroke="#3F4AAF"
        strokeWidth={1.3}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.3 }}
        viewport={{ once: true, amount: 0.3 }}
      />
      {/* relationship label */}
      <motion.g
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.7, duration: 0.3 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <rect
          x={(parentsIdX + childsLeftX) / 2 - 22}
          y={(parentsIdY + childsParentY) / 2 - 10}
          width={44}
          height={18}
          rx={2}
          fill="#ffffff"
          stroke="rgba(63,74,175,0.25)"
          strokeWidth={1}
        />
        <text
          x={(parentsIdX + childsLeftX) / 2}
          y={(parentsIdY + childsParentY) / 2 + 3}
          fill="#3F4AAF"
          fontFamily="JetBrains Mono"
          fontSize="10"
          fontWeight="700"
          textAnchor="middle"
          letterSpacing="0.5"
        >
          1 : N
        </text>
      </motion.g>

      {/* FK connectors – schools.id → childs.school_id (right-hand curve) */}
      <DrawnPath
        d={`M ${schoolsIdX} ${schoolsIdY} C ${schoolsIdX - 30} ${schoolsIdY}, ${childsRightX + 30} ${childsSchoolY}, ${childsRightX} ${childsSchoolY}`}
        stroke="#3F4AAF"
        strokeWidth={1.3}
        strokeDasharray="4 5"
        strokeOpacity={0.85}
        duration={0.9}
        delay={1.0}
      />
      <motion.path
        d={`M ${childsRightX + 6} ${childsSchoolY - 4} L ${childsRightX} ${childsSchoolY} L ${childsRightX + 6} ${childsSchoolY + 4}`}
        fill="none"
        stroke="#3F4AAF"
        strokeWidth={1.3}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.3 }}
        viewport={{ once: true, amount: 0.3 }}
      />
      <motion.g
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.9, duration: 0.3 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <rect
          x={(schoolsIdX + childsRightX) / 2 - 22}
          y={(schoolsIdY + childsSchoolY) / 2 - 10}
          width={44}
          height={18}
          rx={2}
          fill="#ffffff"
          stroke="rgba(63,74,175,0.25)"
          strokeWidth={1}
        />
        <text
          x={(schoolsIdX + childsRightX) / 2}
          y={(schoolsIdY + childsSchoolY) / 2 + 3}
          fill="#3F4AAF"
          fontFamily="JetBrains Mono"
          fontSize="10"
          fontWeight="700"
          textAnchor="middle"
          letterSpacing="0.5"
        >
          1 : N
        </text>
      </motion.g>

      {/* self-ref sibling_of loop on childs – small arc on the right of childs */}
      <DrawnPath
        d={`M ${childsRightX} ${fieldY(childs, 4)} C ${childsRightX + 28} ${fieldY(childs, 4)}, ${childsRightX + 28} ${fieldY(childs, 0)}, ${childsRightX} ${fieldY(childs, 0)}`}
        stroke="rgba(63,74,175,0.5)"
        strokeWidth={1}
        strokeDasharray="3 5"
        duration={0.8}
        delay={1.4}
      />
      <motion.text
        x={childsRightX + 32}
        y={(fieldY(childs, 4) + fieldY(childs, 0)) / 2 + 3}
        fill="rgba(63,74,175,0.55)"
        fontFamily="JetBrains Mono"
        fontSize="9"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 2.0, duration: 0.3 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        self
      </motion.text>
    </svg>
  );
}


export function Differentiator() {
  const decisions = [
    {
      n: "1",
      title: "Multi-child account",
      body:
        "One parent manages many childs across many schools. Each child has their own grade, school, and personalisation. The child switcher drives cart, catalog, and context.",
    },
    {
      n: "2",
      title: "School-gated catalog",
      body:
        "Products scoped to schools, campuses, and grades. Parents only see what the selected child is authorised for. Guests see limited views with prices hidden.",
    },
    {
      n: "3",
      title: "Operational integration layer",
      body:
        "Real-time bidirectional sync with the ERP. Fallback cron jobs, retry logic, and audit logs built in from day one.",
    },
  ];

  return (
    <section
      id="differentiator"
      className="relative bg-lp-bright py-28 md:py-36 overflow-hidden text-[var(--sw-black)]"
    >
      {/* hairline opener */}
      <div className="absolute top-0 inset-x-0 h-px bg-[var(--sw-black)]/10" />

      <div className="wrap relative">
        <Reveal>
          <h2 className="font-head text-[var(--sw-black)] text-[34px] md:text-[48px] lg:text-[60px] leading-[1.04] max-w-[24ch]">
            The{" "}
            <span className="text-[var(--sw-blue)]">parent, child, and school</span>{" "}
            are three separate entities. So is the architecture
          </h2>
          <p className="mt-6 text-[15px] md:text-[17px] text-[var(--sw-black)]/70 leading-relaxed max-w-[62ch]">
            Every feature in this stack flows from one modeling decision. Treat
            the parent, each child, and each school as distinct, linked
            entities. Generic platforms get this wrong. It is what makes every
            downstream feature work.
          </p>
        </Reveal>

        <div className="mt-14 md:mt-20 grid lg:grid-cols-[0.95fr_1.2fr] gap-10 lg:gap-16 items-stretch">
          {/* Left – bullet list, tightened */}
          <div className="flex flex-col">
            {decisions.map((d, i) => (
              <Reveal key={d.n} delay={i * 0.1}>
                <div className="relative flex gap-5 md:gap-6 py-6 md:py-7 border-b border-[var(--sw-black)]/10 last:border-0">
                  <div
                    className="shrink-0 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white font-head font-semibold text-[13px] text-[var(--sw-blue)]"
                    style={{ border: "1.5px solid rgba(63,74,175,0.4)" }}
                  >
                    {d.n}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h3 className="font-head text-[var(--sw-black)] text-[20px] md:text-[22px] leading-snug">
                        {d.title}
                      </h3>
                      <span className="label-code px-2 py-0.5 rounded-[2px] border border-[var(--sw-blue)]/25 text-[var(--sw-blue)]/80">
                        {["parents", "products", "adapters"][i]}
                      </span>
                    </div>
                    <p className="text-[14px] md:text-[15px] text-[var(--sw-black)]/70 leading-relaxed max-w-[54ch]">
                      {d.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Right – diagram in clean framed card, fills column height */}
          <Reveal delay={0.15}>
            <div
              className="relative rounded-[6px] h-full flex flex-col overflow-hidden"
              style={{
                background:
                  "linear-gradient(180deg, rgba(63,74,175,0.05) 0%, rgba(63,74,175,0.01) 100%)",
                border: "1px solid rgba(63,74,175,0.14)",
              }}
            >
              {/* Diagram – vertically centered in available space */}
              <div className="flex-1 flex items-center justify-center px-5 md:px-7 py-10 md:py-14">
                <SvgEntitySchema />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
