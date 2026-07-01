"use client"; // Mark this component as a Client Component

import React, { useState, useEffect } from "react";
import { Badge } from "../../components/ui/badge";
import {
  Card,
  CardTitle,
  CardDescription,
} from "../../components/ui/card";
import { Section } from "../../components/ui/section";
import { RESUME_DATA } from "../../data/resume-data";

type ProjectTags = readonly string[];

interface ProjectLinkProps {
  title: string;
  link?: string;
}

/**
 * Renders project title with optional link and status indicator
 */
function ProjectLink({ title, link }: ProjectLinkProps) {
  if (!link) {
    return <span>{title}</span>;
  }

  return (
    <>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 hover:underline"
        aria-label={`${title} project (opens in new tab)`}
      >
        {title}
        <span
          className="size-1 rounded-full bg-green-500"
          aria-label="Active project indicator"
        />
      </a>
      <div
        className="hidden font-mono text-xs underline print:visible"
        aria-hidden="true"
      >
        {link.replace("https://", "").replace("www.", "").replace("/", "")}
      </div>
    </>
  );
}

interface ProjectTagsProps {
  tags: ProjectTags;
}

/**
 * Renders a list of technology tags used in the project
 */
function ProjectTags({ tags }: ProjectTagsProps) {
  if (tags.length === 0) return null;

  return (
    <ul
      className="flex list-none flex-wrap gap-1.5 p-0"
      aria-label="Technologies used"
    >
      {tags.map((tag) => (
        <li key={tag}>
          <Badge
            variant="outline"
            className="rounded-md border-border bg-secondary/40 px-2 py-0.5 text-[13px] font-medium text-foreground/70 print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
          >
            {tag}
          </Badge>
        </li>
      ))}
    </ul>
  );
}

interface ProjectCardProps {
  title: string;
  description: string;
  tags: ProjectTags;
  link?: string;
  category?: string;
}

/**
 * Card component displaying project information.
 * A left accent bar, category eyebrow, and title-derived monogram give each
 * card a distinct visual anchor instead of a flat block of text.
 */
function ProjectCard({ title, description, tags, link, category }: ProjectCardProps) {
  const words = title
    .replace(/[^A-Za-z0-9 ]/g, " ")
    .split(" ")
    .filter(Boolean);
  const monogram = (
    words.length >= 2
      ? words.slice(0, 2).map((word) => word[0]).join("")
      : (words[0]?.match(/[A-Z0-9]/g)?.slice(0, 2).join("") ??
          words[0]?.slice(0, 2) ??
          "")
  ).toUpperCase();

  return (
    <Card
      className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-xl print:shadow-none print:hover:translate-y-0"
      role="article"
    >
      {/* Left accent bar — fills in on hover */}
      <span
        className="absolute inset-y-0 left-0 w-[3px] bg-foreground/10 transition-colors duration-300 group-hover:bg-foreground"
        aria-hidden="true"
      />

      <div className="flex h-full flex-col gap-3 p-5 sm:p-6 print:gap-1 print:p-3">
        {/* Category eyebrow + monogram tile */}
        <div className="flex items-start justify-between gap-3">
          <span className="mt-1 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground print:text-[8px]">
            {category ?? ""}
          </span>
          <span
            className="flex size-9 flex-shrink-0 items-center justify-center rounded-lg bg-foreground/[0.04] font-mono text-xs font-bold text-foreground/60 ring-1 ring-inset ring-border transition-colors duration-300 group-hover:bg-foreground group-hover:text-background print:hidden"
            aria-hidden="true"
          >
            {monogram}
          </span>
        </div>

        {/* Title */}
        <CardTitle className="text-xl font-semibold leading-snug tracking-tight sm:text-[1.6rem] print:text-sm">
          <ProjectLink title={title} link={link} />
        </CardTitle>

        {/* Description */}
        <CardDescription
          className="text-pretty font-mono text-[15px] leading-relaxed text-foreground/70 print:text-[10px]"
          aria-label="Project description"
        >
          {description}
        </CardDescription>

        {/* Tech tags pinned to the bottom, above a hairline rule */}
        <div className="mt-auto pt-4 print:pt-1">
          <div className="mb-3 h-px w-full bg-border print:mb-1" aria-hidden="true" />
          <ProjectTags tags={tags} />
        </div>
      </div>
    </Card>
  );
}

interface ProjectsProps {
  projects: (typeof RESUME_DATA)["projects"];
}


export function Projects({ projects }: ProjectsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  
  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const projectsPerView = isMobile ? 1 : 2;
  const maxIndex = Math.max(0, projects.length - projectsPerView);
  const autoSlideInterval = 5000; // 5 seconds - comfortable reading time

  const handleTransition = (newIndex: number, direction: 'left' | 'right') => {
    setSlideDirection(direction);
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 150);
    }, 350);
  };

  const nextProject = () => {
    const newIndex = currentIndex >= maxIndex ? 0 : currentIndex + projectsPerView;
    handleTransition(newIndex, 'right');
  };

  const prevProject = () => {
    const newIndex = currentIndex <= 0 ? maxIndex : currentIndex - projectsPerView;
    handleTransition(newIndex, 'left');
  };

  // Handle touch events for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextProject();
    }
    if (isRightSwipe) {
      prevProject();
    }
    
    setTouchStart(0);
    setTouchEnd(0);
  };

  // Auto-slide functionality
  useEffect(() => {
    if (!isPaused && projects.length > projectsPerView) {
      const interval = setInterval(() => {
        nextProject();
      }, autoSlideInterval);

      return () => clearInterval(interval);
    }
  }, [currentIndex, isPaused, projects.length, projectsPerView]);

  // Pause on hover
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  const visibleProjects = projects.slice(currentIndex, currentIndex + projectsPerView);

  // If we're at the end and don't have enough projects, fill from the beginning
  if (visibleProjects.length < projectsPerView && projects.length >= projectsPerView) {
    const remainingSlots = projectsPerView - visibleProjects.length;
    const fromStart = projects.slice(0, remainingSlots);
    visibleProjects.push(...fromStart);
  }

  return (
    <Section className="scroll-mb-16 print:space-y-4 mb-16">
      <h2 className="text-4xl font-bold mb-8" id="side-projects">
        Projects
      </h2>

      {/* Simple Projects Container (screen only — carousel) */}
      <div
        className="relative print:hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Floating Navigation Buttons - Hidden on Mobile */}
        <button
          onClick={prevProject}
          disabled={isTransitioning}
          className="absolute left-2 sm:left-4 top-1/2 z-20 hidden sm:flex h-10 w-10 sm:h-12 sm:w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-700 shadow-xl hover:shadow-2xl hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed border border-gray-200"
          aria-label="Previous projects"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextProject}
          disabled={isTransitioning}
          className="absolute right-2 sm:right-4 top-1/2 z-20 hidden sm:flex h-10 w-10 sm:h-12 sm:w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-gray-700 shadow-xl hover:shadow-2xl hover:bg-blue-50 hover:text-blue-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed border border-gray-200"
          aria-label="Next projects"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Projects Showcase Grid */}
        <div className="mx-4 sm:mx-12 md:mx-24 overflow-visible">
          <div
            className={`grid grid-cols-1 gap-4 sm:gap-8 print:grid-cols-3 print:gap-4 md:grid-cols-2 lg:grid-cols-2 transition-opacity duration-700 ease-out ${
              isTransitioning ? 'opacity-0' : 'opacity-100'
            }`}
            role="feed"
            aria-labelledby="side-projects"
          >
            {visibleProjects.map((project, index) => (
              <article
                key={`${project.title}-${currentIndex}-${index}`}
                className="h-full overflow-visible animate-card-in print:animate-none"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  tags={project.techStack}
                  link={"link" in project ? project.link.href : undefined}
                  category={"category" in project ? project.category : undefined}
                />
              </article>
            ))}
          </div>
        </div>

        {/* Slider Dots Navigation */}
        <div className="flex justify-center mt-8">
          <div className="flex items-center space-x-3">
            {Array.from({ length: Math.ceil(projects.length / projectsPerView) }).map((_, slideIndex) => (
              <button
                key={slideIndex}
                onClick={() => {
                  const newIndex = slideIndex * projectsPerView;
                  if (newIndex !== currentIndex && newIndex <= maxIndex) {
                    const direction = newIndex > currentIndex ? 'right' : 'left';
                    handleTransition(newIndex, direction);
                  }
                }}
                disabled={isTransitioning}
                className={`transition-all duration-300 ease-in-out hover:scale-110 ${
                  Math.floor(currentIndex / projectsPerView) === slideIndex
                    ? 'w-8 h-3 bg-black rounded-full shadow-md'
                    : 'w-3 h-3 bg-gray-300 hover:bg-gray-400 rounded-full'
                } disabled:opacity-50 disabled:cursor-not-allowed`}
                aria-label={`Go to slide ${slideIndex + 1}`}
              >
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Print view: render ALL projects as a static grid. The on-screen
          carousel only mounts two cards at a time, which would otherwise
          drop projects from a printed PDF. */}
      <div className="hidden print:grid print:grid-cols-2 print:gap-3 items-start">
        {projects.map((project, index) => (
          <article
            key={`print-${project.title}-${index}`}
            className="break-inside-avoid"
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              tags={project.techStack}
              link={"link" in project ? project.link.href : undefined}
              category={"category" in project ? project.category : undefined}
            />
          </article>
        ))}
      </div>
    </Section>
  );
}
