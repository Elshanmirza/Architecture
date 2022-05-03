import NavLink from "./NavLink"
import classes from "./Navbar.module.css"
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai"
import { useState } from "react";

const MobileNavigation = () => {

    const [open, setOpen] = useState(false)

    const hamburgerIcon = <AiOutlineMenu className={classes.hamburger}
        size='30px' color="white"
        onClick={() => setOpen(!open)} />

    const closeIcon = <AiOutlineClose className={classes.closeMenu}
        size='30px' color="black"
        onClick={() => setOpen(!open)} />


    const
        closeMobileMenu = () => setOpen(false)

    return (
        <nav className={classes.MobileNavigation}>
            {open ? closeIcon : hamburgerIcon}
            {open && <NavLink />}
        </nav>
    )
}

export default MobileNavigation