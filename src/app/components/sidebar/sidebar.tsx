import React, { FunctionComponent } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ListIcon from '@mui/icons-material/List';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';// type Props = {
import '@fontsource/montserrat';


const Sidebar: FunctionComponent<Props> = ({ }) => (
    <div className="hidden lg:block pt-2 pl-5 absolute w-[2500px]">
        <ul className="font-montserrat text-2xl grid gap-y-5">
            <li>
                <AccessTimeIcon fontSize="large" sx={{ color: 'grey' }} />
                Популярное
            </li>
            <li>
                <LocalFireDepartmentIcon fontSize="large" sx={{ color: 'grey' }} />
                Свежее</li>
            <li>
                <LabelOutlinedIcon fontSize="large" sx={{ color: 'grey' }} />
                Моя лента</li>
            <li>
                <BookmarkBorderIcon fontSize="large" sx={{ color: 'grey' }} />
                Закладки</li>
            {/* <li>Вакансии</li> */}
            <li>
                <ListIcon fontSize="large" sx={{ color: 'grey' }} />
                Подписки</li>
        </ul>

    </div>
)

export default Sidebar