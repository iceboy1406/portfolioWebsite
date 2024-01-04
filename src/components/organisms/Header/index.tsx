'use client'
import Button from 'components/atoms/Button'
import NavLink from 'components/atoms/NavLink'
import navigationItems from 'data/navigationItems'
import { DM_Sans } from 'next/font/google'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const dmSans = DM_Sans({ subsets: ['latin'] })

const Header = () => {
    // Show up the header as fixed position when scroll more than 120px
    const [isScrolled, setIsScrolled] = useState(false)
    useEffect(() => {
        if (window.scrollY > 120) {
            setIsScrolled(true)
        }

        window.addEventListener('scroll', () => {
            setIsScrolled(window.scrollY > 120)
        })
    }, [])

    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 1024) {
                setIsOpen(false)
            }
        })
    }, [])

    function toggleNavbar() {
        setIsOpen(!isOpen)
    }

    function scrollToTop() {
        window.scrollTo(0, 0)
    }

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

    useEffect(() => {
        if (location.hash) {
            scrollToTargetSection(location.hash.replace('#', ''))
        }
    }, [])

    return (
        <header
            className={`flex justify-center absolute z-30 left-0 top-0 pt-8 px-7 w-full ${
                isScrolled ? 'is-scrolled' : ''
            }`}
        >
            <nav
                className={`w-full sm:max-w-lg lg:max-w-5xl px-6 py-4 bg-light backdrop-blur-3xl rounded-md ${
                    isScrolled
                        ? 'bg-light lg:px-6'
                        : 'lg:bg-transparent lg:backdrop-blur-none lg:px-0'
                }`}
            >
                <div className={`flex flex-col`}>
                    <div className="flex items-center justify-between gap-2">
                        <button
                            className="flex items-center gap-2"
                            onClick={() => {
                                scrollToTop()
                                history.replaceState(
                                    null,
                                    '',
                                    location.href.split('#')[0]
                                )
                            }}
                        >
                            <Image
                                src="/assets/images/code.png"
                                alt="code"
                                width={28}
                                height={28}
                                loading="lazy"
                            />
                            <span
                                className={`text-2xl text-white font-bold ${dmSans.className}`}
                            >
                                Eko Susilo.
                            </span>
                        </button>
                        <div className="hidden items-center gap-16 lg:flex">
                            {navigationItems.map((navigationItem) => (
                                <NavLink
                                    key={navigationItem.sectionTargetID}
                                    label={navigationItem.label}
                                    onClick={() => {
                                        location.hash =
                                            navigationItem.sectionTargetID
                                        scrollToTargetSection(
                                            navigationItem.sectionTargetID
                                        )
                                    }}
                                />
                            ))}
                        </div>
                        <div className="hidden lg:block">
                            <Button
                                value="Contact"
                                size="small"
                                style="light"
                                color="white"
                                onClick={() => {
                                    location.hash = 'contacts'
                                    scrollToTargetSection('contacts')
                                }}
                            />
                        </div>
                        <div className="lg:hidden">
                            <button
                                className={`hamburger hamburger--collapse h-[21px] ${
                                    isOpen ? 'is-active' : ''
                                }`}
                                type="button"
                                onClick={() => toggleNavbar()}
                            >
                                <span className="hamburger-box">
                                    <span className="hamburger-inner"></span>
                                </span>
                            </button>
                        </div>
                    </div>

                    <div
                        className={`flex flex-col justify-end gap-4 transition-all duration-300 overflow-hidden ${
                            isOpen ? 'h-[184px]' : 'h-0'
                        }`}
                    >
                        {navigationItems.map((navigationItem) => (
                            <NavLink
                                key={navigationItem.sectionTargetID}
                                label={navigationItem.label}
                                onClick={() => {
                                    location.hash =
                                        navigationItem.sectionTargetID
                                    scrollToTargetSection(
                                        navigationItem.sectionTargetID
                                    )
                                }}
                            />
                        ))}
                        <Button
                            value="Contact"
                            size="small"
                            style="light"
                            color="white"
                            onClick={() => {
                                location.hash = 'contacts'
                                scrollToTargetSection('contacts')
                            }}
                        />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
