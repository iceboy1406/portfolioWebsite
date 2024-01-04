import experienceSectionData from 'data/experienceSectionData'
import Image from 'next/image'
import React from 'react'

const ExperienceSection = () => {
    return (
        <section className="py-16 flex flex-col gap-8" data-id="experiences">
            <div className="flex flex-col gap-4">
                <article className="w-full lg:w-6/12">
                    <h2 className="text-white font-bold text-4xl leading-[1.5]">
                        {experienceSectionData.educationPartTitle}
                    </h2>
                </article>
                <div className="flex flex-col gap-2">
                    {experienceSectionData.educations.map((education) => (
                        <div key={education.schoolName} className="flex gap-2">
                            <div className="flex flex-col gap-2 items-center">
                                <div className="bg-light rounded-full flex justify-center items-center w-8 h-8 flex-shrink-0">
                                    <Image
                                        src={'/assets/images/education.svg'}
                                        alt="Education icon"
                                        width={20}
                                        height={20}
                                        unoptimized
                                        loading='lazy'
                                    />
                                </div>
                                <div className="w-[2px] bg-borderLight h-full"></div>
                            </div>
                            <article className="flex flex-col gap-2 pb-4">
                                <h3 className="text-white font-bold text-xl leading-[1.5]">
                                    {education.schoolName}
                                </h3>
                                <p className="text-muted font-medium text-sm">
                                    {education.studyTime}
                                </p>
                                <p className="text-muted font-medium text-base">
                                    {education.major}
                                </p>
                            </article>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <article className="w-full lg:w-6/12">
                    <h2 className="text-white font-bold text-4xl leading-[1.5]">
                        {experienceSectionData.workingExperiencePartTitle}
                    </h2>
                </article>
                <div className="flex flex-col gap-2">
                    {experienceSectionData.workingExperience.map(
                        (workingExperience) => (
                            <div
                                key={workingExperience.companyName}
                                className="flex gap-2"
                            >
                                <div className="flex flex-col gap-2 items-center">
                                    <div className="bg-light rounded-full flex justify-center items-center w-8 h-8 flex-shrink-0">
                                        <Image
                                            src={'/assets/images/working.svg'}
                                            alt="Education icon"
                                            width={20}
                                            height={20}
                                            unoptimized
                                            loading='lazy'
                                        />
                                    </div>
                                    <div className="w-[2px] bg-borderLight h-full"></div>
                                </div>
                                <article className="flex flex-col gap-2 pb-4">
                                    <h3 className="text-white font-bold text-xl leading-[1.5]">
                                        {workingExperience.companyName}
                                    </h3>
                                    <p className="text-muted font-medium text-base">
                                        {workingExperience.position}
                                    </p>
                                    <p className="text-muted font-medium text-sm">
                                        {workingExperience.workTime}
                                    </p>
                                    <p className="text-muted font-medium text-base" dangerouslySetInnerHTML={{__html: workingExperience.description}} />
                                </article>
                            </div>
                        )
                    )}
                </div>
            </div>
        </section>
    )
}

export default ExperienceSection
