'use client'
import Button from 'components/atoms/Button'
import ButtonLink from 'components/atoms/Button/ButtonLink'
import bannerSectionData from 'data/bannerSectionData'
import Image from 'next/image'

const BannerSection = () => {
    function scrollToTargetSection(id: string) {
        const targetSection = document.querySelector<HTMLElement>(
            `section[data-id=${id}]`
        )
        if (targetSection) {
            window.scrollTo({
                behavior: 'smooth',
                top: targetSection.offsetTop - (window.innerWidth >= 1024 ? 104 : 96),
            })
        }
    }

    return (
        <section className="flex flex-col-reverse gap-8 justify-between items-center lg:flex-row ">
            <aside className="lg:basis-6/12">
                <p className="text-lg font-semibold text-badge mb-1">
                    {bannerSectionData.label}
                </p>
                <h1 className="text-white font-bold text-5xl leading-[1.5]">{bannerSectionData.title}</h1>
                <p className="text-muted text-base mt-4">
                    {bannerSectionData.description}
                </p>
                <div className="flex flex-col items-center gap-2 mt-8 md:flex-row w-full">
                    <ButtonLink
                        href={bannerSectionData.downloadCVButton.href}
                        openInNewPage
                        value={bannerSectionData.downloadCVButton.value}
                        className='w-full md:w-fit'
                        linkClassName='w-full md:w-fit'
                    />
                    <Button
                        value={bannerSectionData.exploreMoreButton.value}
                        style="light"
                        color="white"
                        className='w-full md:w-fit'
                        onClick={() => scrollToTargetSection("skills")}
                    />
                </div>
            </aside>
            <aside
                className="w-full lg:w-[400px] aspect-square relative"
            >
                <Image
                    src={bannerSectionData.photo.src}
                    alt={bannerSectionData.photo.alt}
                    fill
                    className="rounded-[32px] md:rounded-[50px] object-contain"
                    sizes="(max-width: 1024px) 100%, 400px"
                    loading='lazy'
                    unoptimized
                />
            </aside>
        </section>
    )
}

export default BannerSection
