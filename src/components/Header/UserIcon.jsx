import '@styles/UserIcon.css';
import userSvg from '@assets/svg/user.svg';

export default function UserIcon() {
    return (
        <div className="user-icon">
            <img src={userSvg} alt="User" />
        </div>
    );
}