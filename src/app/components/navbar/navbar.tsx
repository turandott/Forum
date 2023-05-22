import React, { FunctionComponent } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
// type Props = {
//   post: string;
// }

const Navbar: FunctionComponent<Props> = ({ }) => (
    <div className="bg-blue h-20 w-full">
        <div className="mx-7 flex justify-between pt-6">
            <ul className="hidden md:flex md:gap-20 ">
                <li><MenuIcon fontSize="large" /></li>
                <li>logo</li>

            </ul>
            <ul className="hidden md:flex md:gap-x-20">
                <li>поиск</li>
                <li>создать</li>
            </ul>
            <ul className="flex gap-x-20 md:mr-10">
                <li className="md:hidden"><HomeOutlinedIcon fontSize="large"/></li>
                <li><ChatBubbleOutlineIcon fontSize="large" /></li>
                <li><NotificationsNoneIcon fontSize="large" /></li>
                <li>icon</li>
            </ul>
        </div>
    </div>
)

export default Navbar