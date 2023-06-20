import styles from "./Comment.module.css";
import { Trash } from "phosphor-react";
import { ThumbsUp } from "phosphor-react";
import { Avatar } from "./Avatar";
import { useState } from "react";

//tipagem de dados
interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void /* tipando como uma função " () => "/ função sem retorno " void " */
}

export function Comment({ content, onDeleteComment } : CommentProps) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment(){
        console.log("deletar")
        onDeleteComment(content);
    }

    function handleLikeComment(){
        setLikeCount(likeCount + 1);
    }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} 
            src="https://media.licdn.com/dms/image/C4D03AQG9lfYXel__vw/profile-displayphoto-shrink_800_800/0/1662042710813?e=1687392000&v=beta&t=JvaA-4gzmDJ6LWnHt3PsdtO0g2lxaJntgWgjZSPKZN4"
            alt="img"
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Camily Cruz</strong>
                            <time dateTime='2023-04-16 12:58:00' title='16 de abril ás 12:58'>Cerca de 1h atrás</time>    
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={20} />
                        </button>
                    </header>
                    
                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}