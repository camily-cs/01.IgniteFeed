import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';
import {PencilLine} from 'phosphor-react';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1603468620905-8de7d86b781e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=50"
            />
            
            <div className={styles.profile}>
                {/* utilizando o componente avatar e aplicando o dinamismo que foi inserido nele,
                ou seja, podemos alterar a foto de avatar mesmo que estejamos utilizando o mesmo componente */}     
                <Avatar hasBorder src="https://media.licdn.com/dms/image/C4D03AQG9lfYXel__vw/profile-displayphoto-shrink_800_800/0/1662042710813?e=1687392000&v=beta&t=JvaA-4gzmDJ6LWnHt3PsdtO0g2lxaJntgWgjZSPKZN4" />

                <strong>Camily Cruz</strong>
                <span>Web developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}