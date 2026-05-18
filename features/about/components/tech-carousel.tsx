"use client";

import { useRef, useEffect, useState } from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNestjs,
  SiPostgresql,
  SiNodedotjs,
  SiPrisma,
  SiGit,
  SiGithub,
  SiPnpm,
} from "react-icons/si";
import { FaTools } from "react-icons/fa";

interface Technology {
  name: string;
  icon: React.ReactNode;
  color: string;
}

const technologies = {
  frontend: [
    { name: "HTML", icon: <SiHtml5 className="w-8 h-8" />, color: "#E34C26" },
    { name: "CSS", icon: <SiCss3 className="w-8 h-8" />, color: "#563D7C" },
    { name: "JavaScript", icon: <SiJavascript className="w-8 h-8" />, color: "#F7DF1E" },
    { name: "TypeScript", icon: <SiTypescript className="w-8 h-8" />, color: "#3178C6" },
    { name: "React", icon: <SiReact className="w-8 h-8" />, color: "#61DAFB" },
    { name: "Next.js", icon: <SiNextdotjs className="w-8 h-8" />, color: "#000000" },
    { name: "Tailwind", icon: <SiTailwindcss className="w-8 h-8" />, color: "#06B6D4" },
    { name: "shadcn", icon: <SiReact className="w-8 h-8" />, color: "#000000" },
    { name: "v0", icon: <SiReact className="w-8 h-8" />, color: "#000000" },
  ],
  backend: [
    { name: "Node.js", icon: <SiNodedotjs className="w-8 h-8" />, color: "#339933" },
    { name: "Nest.js", icon: <SiNestjs className="w-8 h-8" />, color: "#E0234E" },
    { name: "PostgreSQL", icon: <SiPostgresql className="w-8 h-8" />, color: "#336791" },
    { name: "Prisma", icon: <SiPrisma className="w-8 h-8" />, color: "#2D3748" },
  ],
  tools: [
    { name: "Git", icon: <SiGit className="w-8 h-8" />, color: "#F1502F" },
    { name: "GitHub", icon: <SiGithub className="w-8 h-8" />, color: "#181717" },
    { name: "Antigravity", icon: <FaTools className="w-8 h-8" />, color: "#FF6B6B" },
    { name: "pnpm", icon: <SiPnpm className="w-8 h-8" />, color: "#F69220" },
  ],
};

interface TechCarouselProps {
  title: string;
  techs: Technology[];
}

function TechCarousel({ title, techs }: TechCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const container = scrollContainerRef.current;
    container?.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);

    return () => {
      container?.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg md:text-xl font-semibold text-foreground">{title}</h3>
      <div className="relative group">
        {/* Carousel Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {techs.map((tech, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex flex-col items-center gap-2 p-4 rounded-xl bg-secondary border border-border hover:border-accent transition-all duration-200 hover:shadow-md hover:scale-105 min-w-fit"
            >
              <div
                className="w-12 h-12 flex items-center justify-center"
                style={{ color: tech.color }}
              >
                {tech.icon}
              </div>
              <span className="text-xs md:text-sm font-medium text-foreground text-center whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </div>
  );
}

interface TechnologiesSectionProps {
  data?: typeof technologies;
}

export function TechnologiesSection({
  data = technologies,
}: TechnologiesSectionProps) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Technologies & Tools
        </h2>
        <div className="w-10 h-1 bg-accent rounded-full mb-8" />
      </div>

      <div className="space-y-6">
        <TechCarousel
          title="Frontend"
          techs={data.frontend as Technology[]}
        />
        <TechCarousel
          title="Backend"
          techs={data.backend as Technology[]}
        />
        <TechCarousel
          title="Tools & Others"
          techs={data.tools as Technology[]}
        />
      </div>
    </div>
  );
}
