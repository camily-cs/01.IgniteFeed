import styles from "./Avatar.module.css"

//tipagem de dados
interface AvatarProps {
    hasBorder?: boolean; /* ? - define que enviar o valor dessa propriedade é opcional */
    src: string;
    alt?: string;
}

export function Avatar({hasBorder = true, src, alt} : AvatarProps) {
   
    return(  
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
            src={src} 
            alt={alt}
        />
    )
}