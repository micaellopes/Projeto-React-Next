import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile(){
    const {level} = useContext(ChallengesContext);

    return(
        <div className={styles.profileContainer}>
            <img src="https://instagram.fjpa14-1.fna.fbcdn.net/v/t51.2885-19/s150x150/136428056_549361282687122_5565148054864428451_n.jpg?tp=1&_nc_ht=instagram.fjpa14-1.fna.fbcdn.net&_nc_ohc=IGY11M-OuK8AX-A7hQc&edm=AP_V10EAAAAA&ccb=7-4&oh=91dddfe7acdb8e95f89e6178f07116ef&oe=609D4995&_nc_sid=4f375e" alt="Micae Lopes"/>
            <div>
                <strong>Micael Lopes</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level {level}
                </p>
            </div>
        </div>
    );
}