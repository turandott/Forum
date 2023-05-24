'use client'

import React, { FunctionComponent } from 'react'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import PersonAddRoundedIcon from '@mui/icons-material/PersonAddRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import Post from '../components/post/post';
import ProfileCard from '../components/cards/profileCard';
import SubscribersCard from '../components/cards/subscribersCard';
import SubscriptionCard from '../components/cards/subscriptionCard';
// type Props = {
//   post: string;
// }

const ProfilePage: FunctionComponent<Props> = ({ }) => (
        <>
                <ProfileCard />
                <div className="w-full main md:w-[950px] relative self-center">

                    <div className="hidden lg:flex flex-col absolute right-0">
                        <SubscribersCard />
                        <SubscriptionCard />
                    </div>
                    <div className="absolute">
                       <Post/>
                       <Post/>
                       <Post/>
                    </div>
                </div>
        </>
)

export default ProfilePage