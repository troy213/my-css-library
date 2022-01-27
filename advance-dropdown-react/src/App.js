import React, { useState } from 'react'
import { ReactComponent as ArrowIcon } from './icons/arrow.svg'
import { ReactComponent as BellIcon } from './icons/bell.svg'
import { ReactComponent as BoltIcon } from './icons/bolt.svg'
import { ReactComponent as CaretIcon } from './icons/caret.svg'
import { ReactComponent as ChevronIcon } from './icons/chevron.svg'
import { ReactComponent as CogIcon } from './icons/cog.svg'
import { ReactComponent as MessengerIcon } from './icons/messenger.svg'
import { ReactComponent as PlusIcon } from './icons/plus.svg'
import { CSSTransition } from 'react-transition-group'

const App = () => {
  return (
    <Navbar>
      <NavItem icon={<PlusIcon />} />
      <NavItem icon={<BellIcon />} />
      <NavItem icon={<MessengerIcon />} />
      <NavItem icon={<CaretIcon />}>
        <DropdownMenu />
      </NavItem>
    </Navbar>
  )
}

const Navbar = (props) => {
  return (
    <nav className='navbar'>
      <ul className='navbar-nav'>{props.children}</ul>
    </nav>
  )
}

const NavItem = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <li className='nav-item'>
      <a href='#!' className='icon-button' onClick={() => setIsOpen(!isOpen)}>
        {props.icon}
      </a>
      {isOpen && props.children}
    </li>
  )
}

const DropdownMenu = () => {
  const [activeMenu, setActiveMenu] = useState('main')
  const [menuHeight, setMenuHeight] = useState(null)

  const calcHeight = (el) => {
    const height = el.offsetHeight
    setMenuHeight(height + 32)
  }

  const DropdownItem = (props) => {
    return (
      <a
        href='#!'
        className='menu-item'
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span className='icon-button'>{props.leftIcon}</span>
        {props.children}
        <span className='icon-right'>{props.rightIcon}</span>
      </a>
    )
  }

  return (
    <div className='dropdown' style={{ height: menuHeight }}>
      <CSSTransition
        in={activeMenu === 'main'}
        unmountOnExit
        timeout={500}
        classNames='menu-primary'
        onEnter={calcHeight}
      >
        <div className='menu'>
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu='settings'
          >
            Settings
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'settings'}
        unmountOnExit
        timeout={500}
        classNames='menu-secondary'
        onEnter={calcHeight}
      >
        <div className='menu'>
          <DropdownItem leftIcon={<ArrowIcon />} goToMenu='main'>
            Back
          </DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Privacy</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Notifications</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Account</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Security</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>About</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  )
}

export default App
