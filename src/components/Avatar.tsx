import { ImgHTMLAttributes} from "react"; /* importando a interface*/
import styles from "./Avatar.module.css"

/* utilizando extends para utilizar a interface "ImgHTMLAttributes" 
<> - */
interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    //tipagem de dados
    hasBorder?: boolean; /* ? - define que enviar o valor dessa propriedade é opcional */
}

/* ...props - passando todos atributos que contem na interface "ImgHTMLAttributes" em uma unica propriedade,
 para isso, utilizamos o spreadOperator (...) */
export function Avatar({hasBorder = true, ...props} : AvatarProps) {
   
    return(  
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
           {...props} /* inserindo ...props na tag img */
        />
    )
}