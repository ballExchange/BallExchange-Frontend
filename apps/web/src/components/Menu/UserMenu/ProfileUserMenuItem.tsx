
import {  Skeleton, UserMenuItem } from '@pancakeswap/uikit'

interface ProfileUserMenuItemProps {
  isLoading: boolean
  hasProfile: boolean
  disabled: boolean
}



const ProfileUserMenuItem: React.FC<React.PropsWithChildren<ProfileUserMenuItemProps>> = ({
  isLoading,
// eslint-disable-next-line consistent-return
}) => {

  if (isLoading) {
    return (
      <UserMenuItem>
        <Skeleton height="24px" width="35%" />
      </UserMenuItem>
    )
  }

}

export default ProfileUserMenuItem
