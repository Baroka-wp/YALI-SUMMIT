import { HeroSection } from '../app/components/HeroSection';
import { Navbar } from '../app/components/Navbar'; // Assuming the Navbar is in the components folder
import LiveChat from '../app/components/LiveChat'; // Import the LiveChat component
import { Footer } from '../app/components/Footer'; // Import the Footer
import { ThematicCards } from '../app/components/ThematicCards'; // Import ThematicCards
import { BriefOverview } from '../app/components/BriefOverview'; // Import du composant BriefOverview
import { AboutEvent } from '../app/components/AboutEvent'; // Import du composant AboutEvent
import { ProgramPhare } from '../app/components/ProgramPhare';
import { SpecialActivitiesCarousel } from '../app/components/CardActivities';
import SpeakersList from '../app/components/SpeakerList'; // Assurez-vous d'importer le composant sans les accolades

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar /> {/* Add the Navbar here */}
      <HeroSection />
      <BriefOverview /> {/* Ajout de la section Bref Aperçu */}
      <AboutEvent /> {/* Ajout de la section À propos de l'événement */}
      <ThematicCards /> {/* Add the ThematicCards component here */}
      <ProgramPhare />
      <SpecialActivitiesCarousel />
      <SpeakersList /> {/* Ajout de la liste des intervenants */}
      <LiveChat /> {/* Add the LiveChat component here */}
      <Footer /> {/* Add the Footer here */}
    </main>
  );
}
