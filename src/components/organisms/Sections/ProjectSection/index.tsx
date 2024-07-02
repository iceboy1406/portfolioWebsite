import projectSectionData from 'data/projectSectionData'
import Image from 'next/image'
import Link from 'next/link'

const ProjectSection = () => {
    return (
        <section className="py-16 flex flex-col gap-8" data-id="projects">
            <article className="w-full lg:w-6/12">
                <p className="text-base font-semibold text-badge mb-1">
                    {projectSectionData.label}
                </p>
                <h2 className="text-white font-bold text-4xl leading-[1.5]">
                    {projectSectionData.title}
                </h2>
            </article>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {projectSectionData.projects.map((project) => (
                    <div
                        key={project.name}
                        className="rounded-xl overflow-hidden bg-light"
                    >
                        <div className="relative aspect-video">
                            <Image
                                src={project.imagePreview.src}
                                alt={project.imagePreview.alt}
                                fill
                                className="object-cover"
                                loading="lazy"
                                unoptimized
                            />
                        </div>
                        <div className="flex flex-col gap-4 p-4">
                            <div className="flex items-center gap-2 justify-between">
                                <h3 className="text-white font-bold text-2xl leading-[1.5]">
                                    {project.name}
                                </h3>
                                <div className="flex items-center gap-2">
                                    {project.codeRepositoryUrl &&
                                        <Link
                                            href={project.codeRepositoryUrl}
                                            title="Source Code"
                                            target="_blank"
                                        >
                                            <div className="p-1 bg-light w-8 h-8 flex justify-center items-center rounded-md hover:brightness-90">
                                                <Image
                                                    src="/assets/images/source-code.svg"
                                                    alt="Source Code Icon"
                                                    width={20}
                                                    height={20}
                                                    unoptimized
                                                    loading='lazy'
                                                />
                                            </div>
                                        </Link>
                                    }
                                    <Link
                                        href={project.demoUrl}
                                        title="Go to Demo"
                                        target="_blank"
                                    >
                                        <div className="p-1 bg-light w-8 h-8 flex justify-center items-center rounded-md hover:brightness-90">
                                            <Image
                                                src="/assets/images/globe.svg"
                                                alt="Demo Icon"
                                                width={20}
                                                height={20}
                                                loading="lazy"
                                                unoptimized
                                            />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            <p className="text-muted text-base">
                                {project.description}
                            </p>
                            <div className="flex gap-2 items-center">
                                {project.techUsed.map((tech) => (
                                    <div
                                        className="relative w-6 h-6"
                                        key={tech.name}
                                        title={tech.name}
                                    >
                                        <Image
                                            src={tech.iconSrc}
                                            alt={tech.name}
                                            fill
                                            className="object-contain"
                                            loading="lazy"
                                            unoptimized
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ProjectSection
