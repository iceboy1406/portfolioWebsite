import { FC } from 'react'
import TNavLinkProps from './type'

const NavLink: FC<TNavLinkProps> = ({ label, onClick }) => {
    return (
        <p
            className={`text-base text-white select-none hover:text-white text-opacity-80 cursor-pointer`}
            onClick={onClick}
        >
            {label}
        </p>
    )
}

export default NavLink
