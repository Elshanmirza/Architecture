import MobileNavigation from './MobileNavigation'
import classes from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={classes.Navbar}>
            <MobileNavigation />
        </div>
    )
}

export default Navbar