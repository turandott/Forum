import React, { FunctionComponent, useEffect } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Modal, TextField, Tooltip } from '@mui/material';
import ModalUp from '../modal/ModalUp';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../../store/store';
import { CustomButton } from '../buttons/buttons';
import { setUser, setIsAuthenticated } from '../../../../store/authSlice';
import Image from 'next/image'
import logo from '../../../../public/alphabet-f-icon.svg'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useRouter } from 'next/navigation';
// type Props = {
//   post: string;
// }

const Navbar: FunctionComponent<Props> = ({ }) => {
    const dispatch = useDispatch<AppDispatch>()
    const logged = useSelector(state => state.auth.isAuthenticated)
    function handleLogout() {
        console.log('logged out')
        dispatch(setUser(null))
        dispatch(setIsAuthenticated(false))
        const logged = false
        router.push('/')

    }
    const router = useRouter()
    return (
        <div className="bg-blue h-20 w-full">
            <div className="mx-7 flex justify-between pt-6">
                <ul className="hidden md:flex md:gap-10">
                    <li><MenuIcon fontSize="large" /></li>
                    <li>
                        <Image
                            src={logo}
                            width={40}
                            height={40}
                            alt="logo"
                        />
                    </li>

                </ul>
                <ul className="hidden md:flex md:gap-x-20 mt-[-10px]">
                    <li><TextField id="outlined-basic" label="Поиск" variant="outlined" className='bg-white rounded-md' /></li>
                    <li className="mt-[-20px]">
                        <CustomButton type='shadow' text='создать' />
                    </li>
                </ul>
                <ul className="flex gap-x-20 md:mr-10">
                    <li className="md:hidden"><HomeOutlinedIcon fontSize="large" /></li>
                    <Tooltip title="Сообщения">
                        <li><ChatBubbleOutlineIcon fontSize="large" /></li>
                    </Tooltip>
                    <Tooltip title="Уведомления">
                        <li><NotificationsNoneIcon fontSize="large" /></li>
                    </Tooltip>
                    <li>
                        {logged ?
                            <div className='flex mt-[-30px] gap-3'>
                                <div className='mt-[25px]'>
                                    <Link href="/profile">
                                        <AccountCircleIcon fontSize="large" />
                                    </Link>
                                </div>
                                <div onClick={handleLogout} >
                                    <CustomButton type='basic' text="выйти" />
                                </div>
                            </div>
                            :

                            <div className='flex mt-[-30px]'>
                                <Link href="/login">
                                <CustomButton type='basic' text="войти"/>
                                </Link>
                            </div>

                        }
                        {/* icon */}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
