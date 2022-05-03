import { motion } from 'framer-motion'
import classes from "./Navbar.module.css"
import { FaFacebookF } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import {Link} from 'react-scroll'

const NavLink = (props) => {
    const animateFrom = { opacity: 0, x: 100 }
    const animateTo = { opacity: 1, x: 0 }

    return (
        <div className='NavLink'>
            <ul>
                <motion.li
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{ delay: 0.01 }}
                    onClick={() => props.isMobile && props.closeMobileMenu()}>
                    <Link activeClass="active" to="home" spy={true} smooth={true}><a href='/'>Home</a></Link>
                </motion.li>
                <motion.li
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{ delay: 0.01 }}
                    onClick={() => props.isMobile && props.closeMobileMenu()}>
                    <Link  to="about" spy={true} smooth={true}><a href='/'>About Us</a></Link>
                </motion.li>
                <motion.li
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{ delay: 0.01 }}
                    onClick={() => props.isMobile && props.closeMobileMenu()}>
                    <Link  to="team" spy={true} smooth={true}><a href='/'>Team</a></Link>
                </motion.li>
                <motion.li
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{ delay: 0.01 }}
                    onClick={() => props.isMobile && props.closeMobileMenu()}>
                    <Link  to="contact" spy={true} smooth={true}><a href='/'>Contact</a></Link>
                </motion.li>

                <motion.li
                    initial={animateFrom}
                    animate={animateTo}
                    transition={{ delay: 0.01 }}
                    onClick={() => props.isMobile && props.closeMobileMenu()}>
                    <div className={classes.iconDiv}>
                        <FaFacebookF className={classes.faIcon} size='40px' color="white" />
                        <FaInstagram className={classes.faIcon} size='40px' color="white" />
                        <FaTwitter className={classes.faIcon} size='40px' color="white" />
                    </div>

                </motion.li>

            </ul>
        </div>
    )
}

export default NavLink