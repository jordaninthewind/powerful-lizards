import { AboutArtistContent } from '../../components/AboutArtistContent';
import { SiteNav } from '../../components/SiteNav';
import '../../App.css';
import '../Home/HomePage.css';
import './AboutPage.css';

export default function AboutPage() {
  return (
    <>
      <SiteNav />
      <main className="about-page" aria-label="About the artist">
      <div className="about-page-bg">
        <div className="hp-bg-fx hp-bg-fx--stars" />
      </div>

      <div className="about-page-inner">
        <div className="hp-about-layout about-page-layout">
          <AboutArtistContent />
        </div>
      </div>
      </main>
    </>
  );
}
