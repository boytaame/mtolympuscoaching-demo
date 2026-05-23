import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Quote, Mail, Zap, TrendingUp, Share2 } from 'lucide-react';

function Header() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['testimonials', 'about', 'hero'];
      
      // If we're at the very top, hero is active
      if (window.scrollY < 100) {
        setActiveSection('hero');
        return;
      }
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Active when the section crosses a bit below the fixed header
          if (rect.top <= 150) { 
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLinkClasses = (section: string) => {
    const isActive = activeSection === section;
    return `font-label-bold text-label-bold pb-1 transition-colors duration-200 border-b-2 ${
      isActive
        ? 'text-primary border-primary'
        : 'text-on-surface-variant border-transparent hover:text-primary'
    }`;
  };

  return (
    <header className="fixed top-0 w-full z-50 flex justify-between items-center px-4 md:px-margin-desktop py-4 bg-background border-b border-outline-variant">
      <img
        alt="LBA/OP Fitness Logo"
        className="h-12 w-auto object-contain"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6qj_a4M3TMi_Hc0LFKJSWfBSB9neFrUAjKjZMRLbBfneo_533s9b7ML87txEspnWKqFHhuFeF4vPn9M-lub0S59hbs48dRvFNbN9uuLCP5YP6UtqgMX9ZaYadTwYo-KKAj2ixfl4PPPB2wt2th6RUm3_YLsbeFWphN0Zs4PYfEKHqXPvl7PdFyw1y0nhn8vHqqx8ACusKK0PMwvbYz5LiBK6goqp723S2f9FLZGbLsOtlhVWjLGtDzeXm1PEgAgNg_VbMdNsCCCU"
      />
      <nav className="hidden md:flex gap-8">
        <a href="#hero" className={getLinkClasses("hero")}>
          HOME
        </a>
        <a href="#about" className={getLinkClasses("about")}>
          ABOUT
        </a>
        <a href="#testimonials" className={getLinkClasses("testimonials")}>
          TESTIMONIALS
        </a>
      </nav>
      <a href="#cta" className="bg-primary text-on-primary font-label-bold text-label-bold px-6 py-2 active:scale-95 transition-transform inline-block">
        JOIN NOW
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 md:px-margin-desktop text-center py-12">
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
        <img
          alt="Atmospheric training environment"
          className="w-full h-full object-cover grayscale contrast-125"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDd5n4Sm0zP-Nn9RrlFnYPh_2XDiXgmAh4Aq__iwPlZVS-gkbxAIIY2fBnxg7JB-1LEx-5b9PnMZwvkQXz1LRQmhcgj2fW0svbKcDOxrk5BI06WVdQpu7_D-aMBtBqbBLuiuD0fmhlsbakB4xcW20WQFtNYImIfrpcflfs_Vyv_u1L9puvRcla7hcL6djamMP6qgZxM9MVLdcQzJNr5OAXp--ZGppiAi-dPLcsDAQjUa9HrTneyx50B_IHHBwwB45LhW9e2fvamvBU"
        />
      </div>
      <div className="relative z-10 max-w-[1000px] w-full">
        <div className="flex flex-col items-center gap-12 w-full">
          <div className="w-full flex flex-col items-center @container">
            <div className="w-full flex flex-col font-headline-xl uppercase italic transform -skew-x-6 px-4">
              <div className="text-[min(11vw,106px)] leading-[0.9] tracking-normal text-center w-full">
                SIMPLIFYING FITNESS
              </div>
              <div className="text-[min(3.8vw,36px)] leading-none tracking-widest text-center w-full mt-2">
                TO HELP GUYS LIKE YOU FINALLY GET LEAN
              </div>
            </div>
          </div>
          <div className="relative aspect-video w-full bg-black border border-outline-variant hard-shadow pointer-events-auto">
             <iframe
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
                frameBorder="0"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video player"
             ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

function Coach() {
  return (
    <section id="about" className="py-section-gap px-4 md:px-margin-desktop bg-background border-t border-outline-variant">
      <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative overflow-hidden hard-shadow group">
          <img
            alt="Coach at PNBA Muscle Classic"
            className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida/ADBb0uhZr4q5O53DUgrKtMI8lmZ3dFv9iHhUJcLpizzxNZZEBsUVEbgjgdOt0nZVqv000E88AstNtgdz2YYVT9-MAG1HRW_0PZKzPAE8ZC4LzN7c4EUvptfShsxBXragf2HsrpKf7Aa59-TPVooTP-hkgXU5O1h0rXIg7ZOgzfmzNmTaVb2qwlZLX2s3Oc1JtkKgr28kTULovikM5e152I1qvJBLVU53gYnkgc3xUflOZH2P0D8FAoR8gpThEFA"
          />
        </div>
        <div className="flex flex-col gap-8">
          <div className="space-y-4">
            <p className="font-label-bold text-label-bold text-primary tracking-widest uppercase">
              THE ARCHITECT
            </p>
            <h2 className="font-headline-lg text-headline-lg uppercase">
              MEET THE COACH
            </h2>
          </div>
          <div className="space-y-6 font-body-lg text-body-lg text-on-surface-variant">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4 border-t border-outline-variant">
              <div>
                <p className="font-headline-md text-headline-md text-primary">100%</p>
                <p className="font-label-sm text-label-sm uppercase">
                  Natural Protocols
                </p>
              </div>
              <div>
                <p className="font-headline-md text-headline-md text-primary">PNBA</p>
                <p className="font-label-sm text-label-sm uppercase">
                  Certified Expertise
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    quote: "Completely rebuilt my physical foundation. The protocols are ruthless but the results speak for themselves.",
    stat: "DOWN 20LBS",
    substat: "IN 12 WEEKS"
  },
  {
    quote: "Found my focus. The mental clarity I gained from the discipline is worth more than the muscle mass.",
    stat: "+15LBS LEAN",
    substat: "6 MONTH PROTOCOL"
  },
  {
    quote: "Zero BS approach. If you put in the work exactly as prescribed, you become a machine.",
    stat: "PR SHATTERED",
    substat: "ELITE PERFORMANCE"
  }
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="py-section-gap px-4 md:px-margin-desktop bg-surface-container-lowest border-t border-outline-variant">
      <div className="max-w-container-max mx-auto">
        <div className="mb-12 text-center">
          <p className="font-label-bold text-label-bold text-primary tracking-widest uppercase mb-4">
            THE PROOF
          </p>
          <h2 className="font-headline-lg text-headline-lg uppercase">
            FIELD REPORTS
          </h2>
        </div>
        <div className="relative max-w-4xl mx-auto overflow-hidden px-12 group">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((t, idx) => (
              <div key={idx} className="w-full flex-shrink-0 px-4">
                <div className="p-12 border border-outline-variant flex flex-col gap-8 bg-background hard-shadow min-h-[300px]">
                  <Quote className="text-primary w-12 h-12 stroke-[1.5]" />
                  <p className="font-body-lg text-body-lg text-on-surface-variant italic text-center">
                    "{t.quote}"
                  </p>
                  <div className="mt-auto border-t border-outline-variant pt-6 text-center">
                    <p className="font-headline-md text-headline-md text-primary">
                      {t.stat}
                    </p>
                    <p className="font-label-sm text-label-sm uppercase">
                      {t.substat}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-background p-3 text-primary border border-outline-variant hover:bg-surface-container-high transition-colors z-10"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-background p-3 text-primary border border-outline-variant hover:bg-surface-container-high transition-colors z-10"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="cta" className="py-section-gap px-4 md:px-margin-desktop bg-background border-t border-outline-variant">
      <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-3 gap-gutter">
        {/* Community Card */}
        <div className="group relative p-8 border-2 border-blue-600 hover:border-blue-400 bg-blue-900/10 transition-all flex flex-col justify-between items-start gap-8 hover:-translate-y-2 duration-300 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#ffffff_10px,#ffffff_12px)]"></div>
          <div className="relative z-10">
            <h2 className="font-headline-md text-headline-md uppercase mb-4 text-primary">
              SKOOL COMMUNITY
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-[400px]">
              The SIMPLE 4-day plan to get you lean (no matter your starting point or age)
            </p>
          </div>
          <a
            href="#"
            className="relative z-10 w-full lg:w-auto bg-primary text-on-primary font-label-bold text-label-bold px-10 py-4 flex items-center justify-center gap-2 hover:bg-on-surface-variant transition-colors active:scale-95"
          >
            JOIN OUR SKOOL COMMUNITY <ArrowRight className="w-5 h-5" />
          </a>
        </div>
        {/* Newsletter Card */}
        <div className="group relative p-8 border-2 border-white/80 hover:border-white bg-white/5 transition-all flex flex-col justify-between items-start gap-8 hover:-translate-y-2 duration-300 overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#2563eb_10px,#2563eb_12px)]"></div>
          <div className="relative z-10">
            <h2 className="font-headline-md text-headline-md uppercase mb-4 text-primary">
              NEWSLETTER
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-[400px]">
              Want 30 days of FREE meal plans, workouts, and strategies sent to you, check out my newsletter👇
            </p>
          </div>
          <a
            href="#"
            className="relative z-10 w-full lg:w-auto border border-primary text-primary font-label-bold text-label-bold px-10 py-4 flex items-center justify-center gap-2 hover:bg-primary hover:text-on-primary transition-all active:scale-95"
          >
            SUBSCRIBE TO NEWSLETTER <Mail className="w-5 h-5" />
          </a>
        </div>
        {/* 1-on-1 Coaching Card */}
        <div className="group relative p-8 border-2 border-blue-600 hover:border-blue-400 bg-blue-900/10 transition-all flex flex-col justify-between items-start gap-8 hover:-translate-y-2 duration-300 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#ffffff_10px,#ffffff_12px)]"></div>
          <div className="relative z-10">
            <h2 className="font-headline-md text-headline-md uppercase mb-4 text-primary">
              1-ON-1 COACHING
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-[400px]">
              Want to work with me 1 on 1 to build a personalized plan (book your call)
            </p>
          </div>
          <a
            href="#"
            className="relative z-10 w-full lg:w-auto border border-primary text-primary font-label-bold text-label-bold px-10 py-4 flex items-center justify-center gap-2 hover:bg-primary hover:text-on-primary transition-all active:scale-95"
          >
            APPLY FOR COACHING <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="w-full py-section-gap px-4 md:px-margin-desktop flex flex-col md:flex-row justify-between items-center gap-gutter bg-surface-container-lowest border-t border-outline-variant">
      <div className="flex flex-col items-center md:items-start gap-4">
        <img
          alt="LBA/OP Fitness Logo"
          className="h-12 w-auto object-contain grayscale opacity-80"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6qj_a4M3TMi_Hc0LFKJSWfBSB9neFrUAjKjZMRLbBfneo_533s9b7ML87txEspnWKqFHhuFeF4vPn9M-lub0S59hbs48dRvFNbN9uuLCP5YP6UtqgMX9ZaYadTwYo-KKAj2ixfl4PPPB2wt2th6RUm3_YLsbeFWphN0Zs4PYfEKHqXPvl7PdFyw1y0nhn8vHqqx8ACusKK0PMwvbYz5LiBK6goqp723S2f9FLZGbLsOtlhVWjLGtDzeXm1PEgAgNg_VbMdNsCCCU"
        />
        <p className="font-body-md text-body-md text-on-surface-variant max-w-xs text-center md:text-left">
          Lean Body Accelerator.<br />
          MT. OLYMPUS COACHING
        </p>
      </div>
      <div className="flex flex-col items-center md:items-end gap-6">
        <div className="flex gap-8">
          <a
            href="#"
            className="font-body-md text-body-md text-on-surface-variant hover:text-primary underline transition-colors"
          >
            PRIVACY POLICY
          </a>
          <a
            href="#"
            className="font-body-md text-body-md text-on-surface-variant hover:text-primary underline transition-colors"
          >
            TERMS OF SERVICE
          </a>
          <a
            href="#"
            className="font-body-md text-body-md text-on-surface-variant hover:text-primary underline transition-colors"
          >
            CONTACT
          </a>
        </div>
        <div className="flex gap-6">
          <a
            href="#"
            className="text-on-surface-variant hover:text-primary transition-colors"
          >
            <Zap className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="text-on-surface-variant hover:text-primary transition-colors"
          >
            <TrendingUp className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="text-on-surface-variant hover:text-primary transition-colors"
          >
            <Share2 className="w-5 h-5" />
          </a>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant opacity-50">
          © 2024 LEAN BODY ACCELERATOR. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const currentPosition = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        setScrollProgress((currentPosition / scrollHeight) * 100);
      } else {
        setScrollProgress(0);
      }
    };
    window.addEventListener('scroll', updateProgress);
    updateProgress();
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <div 
        className="fixed top-0 left-0 bg-white z-[60] h-1 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
      <Header />
      <main className="flex-1 pt-24 overflow-x-hidden">
        <Hero />
        <Coach />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
