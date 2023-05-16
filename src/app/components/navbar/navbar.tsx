import React, { FunctionComponent } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
// type Props = {
//   post: string;
// }

const Navbar: FunctionComponent<Props> = ({ }) => (
    <div className="bg-blue h-20 w-full">
        <div className="mx-28 flex justify-between pt-6">
            <ul className="flex gap-20 ">
                <li><MenuIcon /></li>
                <li>Icon</li>

            </ul>
            <ul className="flex gap-x-20">
            <li>поиск</li>
            <li>создать</li>
        </ul>
            <ul className="flex gap-x-20">
                <li><ChatBubbleOutlineIcon /></li>
                <li><NotificationsNoneIcon /></li>
                <li>icon</li>
                <li>войти</li>
            </ul>
        </div>
    </div>
)

export default Navbar