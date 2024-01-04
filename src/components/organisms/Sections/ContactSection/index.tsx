import contactSectionData from 'data/contactSectionData'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ContactSection = () => {
    return (
        <section className="py-16" data-id="contacts">
            <div className="w-full lg:w-6/12 flex flex-col gap-8">
                <article>
                    <p className="text-base font-semibold text-badge mb-1">
                        {contactSectionData.label}
                    </p>
                    <h2 className="text-white font-bold text-4xl leading-[1.5]">
                        {contactSectionData.title}
                    </h2>
                </article>
                <div className="flex flex-col gap-4">
                    {contactSectionData.contacts.map((contact) => (
                        <div
                            key={contact.name}
                            className="flex items-center gap-4"
                        >
                            <Link
                                href={contact.link}
                                target="_blank"
                                className="w-16 h-16 bg-light rounded-md flex justify-center items-center hover:brightness-90"
                            >
                                <Image
                                    src={contact.iconSrc}
                                    alt={`${contact.name} Icon`}
                                    width={32}
                                    height={32}
                                    unoptimized
                                    loading="lazy"
                                />
                            </Link>
                            <div className="flex flex-col gap-1">
                                <p className="text-base text-muted">
                                    {contact.name}
                                </p>
                                <Link
                                    href={contact.link}
                                    target="_blank"
                                    className="text-xl text-white"
                                >
                                    {contact.value}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ContactSection
