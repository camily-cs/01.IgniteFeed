import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';
import { FormEvent, ChangeEvent, useState, InvalidEvent } from 'react';


//tipagem de dados
interface Author {
    name: string;
    role: string
    avatarUrl: string;
}

interface Content {
    type: string;
    content: string;
}

interface PostProps {
    author: Author;
    publishedAt: Date;
    content: Content[]; /* interface Content */
}


export function Post({ author, publishedAt, content } : PostProps) {

    /* listando comentarios */
    const [comments, setComments] = useState([ 
        'Post muito bacana!'
    ])

    /* local para armazenar valor digitado na textarea */
    const [newCommentText, setNewCommentText] = useState('');
    
    console.log(newCommentText);

    /* data de publicacao */
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    })

    /* a quanto tempo foi publicado em relacao ao dia e hora atual*/
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    const isNewCommentEmpty = newCommentText.length == 0;


    function handleCreateNewComment(event: FormEvent){ /* definindo tipo de evento que disparará a função */
        event.preventDefault();  /* evitando compotamento padrao de redirecionar o usuario para outra pag ao enviar form */
       
        /* exibindo novo comentario  */
        setComments([...comments, newCommentText]);
        /* console.log(comments); */

        //limpando textarea - utilizando programação declarartiva
        setNewCommentText("");

        //limpando textarea - utilizando programação imperativa
        /* event.target.comment.value = " "; */     
    }
  
    /* armazenando valor da textarea */
    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity("")
        //salvando o valor da textarea no estado criado acima "NewCommentText"
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity("Por favor, escreva um comentário!")
    }


    function deleteComment(commentToDelete: string){
        const commentsWhithoutDeletedOne = comments.filter(
            comment => {
                return comment !== commentToDelete;
            }
        )

        setComments(commentsWhithoutDeletedOne);
    }


    return(
        <div>
            <article className={styles.post}>
                <header>
                    <div className={styles.author}>                       
                        {/* pegando img do avatar do array de posts */}
                        <Avatar src={author.avatarUrl} alt=''/> 

                        <div className={styles.authorInfo}>
                            <strong>{author.name}</strong>
                            <span>{author.role}</span>
                        </div>
                    </div>

                    <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                        {publishedDateRelativeToNow}    
                    </time>    
                </header>

                <div className={styles.content}>
                    {content.map(line => {
                        if(line.type == 'paragraph') {
                            return <p key={line.content}>{line.content}</p>;
                        } else if(line.type == 'link') {
                            return <p key={line.content}><a href="#">{line.content}</a></p>
                        }
                    })}
                </div>


                <form onSubmit={handleCreateNewComment}  className={styles.commentForm}>
                    <strong>Deixe seu feedback</strong>

                    <textarea
                        name='comment' 
                        placeholder='Deixe um comentário'
                        value={newCommentText}/* Toda vez que o valor do estado mudar, a textarea tbm mudará */
                        onChange={handleNewCommentChange}
                        onInvalid={handleNewCommentInvalid}
                        required
                    />      

                    <footer className='commentForm'>
                        <button type='submit' disabled={isNewCommentEmpty}>
                            Publicar
                        </button>
                    </footer>          
                </form>

                <div className={styles.commentList}>
                    {comments.map(comment => {
                        return (
                            <Comment 
                                key={comment} 
                                content={comment} 
                                onDeleteComment={deleteComment}
                            />
                        )
                    })
                    }
                </div>
            </article>
        </div>
    )
}