interface NavigationItem {
    sectionTargetID: string
    label: string
}

const navigationItems: NavigationItem[] = [
    {
        sectionTargetID: 'skills',
        label: "Skills",
    },
    {
        sectionTargetID: 'projects',
        label: "Projects",
    },
    {
        sectionTargetID: 'experiences',
        label: "Experiences",
    },
]

export default navigationItems