'use client';

import { useState } from 'react'
import Image from 'next/image'
import menuLogo from '../../components/icon/icons/menu.svg'
import MenuList from '../navbar/MenuList'

const Menu = () => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    return (
        <div className='flex justify-between items-end'>
        <div className="flex flex-row">
            <MenuList open={open}  handleClose={handleClose} />
        </div>
        <div className="flex flex-row items-center">
            <Image src={menuLogo} height={30} width={30} alt="Menu" onClick={handleOpen} className="cursor-pointer mx-2 lg:ml-2 " />
        </div>
        </div>
        
    )
}

export default Menu