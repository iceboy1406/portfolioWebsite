import skillSectionData from 'data/skillSectionData'
import Image from 'next/image'
import React from 'react'

const SkillSection = () => {
    return (
        <section className="py-16 flex flex-col gap-8" data-id="skills">
            <article>
                <p className="text-base font-semibold text-badge mb-1">
                    {skillSectionData.label}
                </p>
                <h2 className="text-white font-bold text-4xl leading-[1.5]">
                    {skillSectionData.title}
                </h2>
            </article>

            <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
                {skillSectionData.skills.map((skill) => (
                    <div
                        key={skill.name}
                        className={
                            'w-full aspect-square flex flex-col justify-center items-center bg-light rounded-lg gap-3'
                        }
                    >
                        <div className="relative w-1/2 aspect-square">
                            {/* Its SVG file, so its doesn't needed optimization */}
                            <Image
                                src={skill.imageSrc}
                                alt={skill.name}
                                fill
                                unoptimized
                                loading="lazy"
                            />
                        </div>
                        <p className="text-base font-semibold text-muted">
                            {skill.name}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default SkillSection
