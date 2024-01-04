import Footer from 'components/organisms/Footer'
import Header from 'components/organisms/Header'
import BannerSection from 'components/organisms/Sections/BannerSection'
import ContactSection from 'components/organisms/Sections/ContactSection'
import ExperienceSection from 'components/organisms/Sections/ExperienceSection'
import ProjectSection from 'components/organisms/Sections/ProjectSection'
import SkillSection from 'components/organisms/Sections/SkillSection'

export default function Home() {
    return (
        <>
            <Header />
            <main
                className="w-full min-h-screen bg-[url('/assets/images/page-background.svg')] bg-cover bg-dark"
                style={{ backgroundPositionX: 'center' }}
            >
                <div className="flex justify-center w-full min-h-screen bg-dark/[.80] backdrop-blur-[175px] px-7">
                    <div className="w-full sm:max-w-lg lg:max-w-5xl">
                        <div className="h-[125px] md:h-[150px] lg:h-[225px]"></div>
                        <BannerSection />
                        <div className="w-full h-[1px] bg-borderLight mt-[125px] lg:mt-[200px]"></div>
                        <SkillSection />
                        <div className="w-full h-[1px] bg-borderLight"></div>
                        <ProjectSection />
                        <div className="w-full h-[1px] bg-borderLight"></div>
                        <ExperienceSection />
                        <div className="w-full h-[1px] bg-borderLight"></div>
                        <ContactSection />
                        <Footer />
                    </div>
                </div>
            </main>
        </>
    )
}
