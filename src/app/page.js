import HeroSection from '@/components/HeroSection';
import ProgramsSection from '@/components/ProgramsSection';
import NewsEventsSection from '@/components/NewsEventsSection';
import StatsSection from '@/components/StatsSection';
import AlumniPage from '@/components/AlumniPage';
import FacultyPage from '@/components/FacultyPage';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProgramsSection />
      <NewsEventsSection />
      <StatsSection />
      <AlumniPage />
      <FacultyPage />
    </>
  );
}