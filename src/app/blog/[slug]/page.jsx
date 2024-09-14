import React from 'react'
import Styles from './viewPost.module.css'
import Image from 'next/image'

export default function ViewPost({ params }) {
    const post = params.slug
    return (
        <div className={`wrapper ${Styles.viewPost}`}>
            <div className={Styles.imgContainer}>
                <Image
                    src="https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                    fill
                />
            </div>
            <div className={Styles.textContainer}>
                <h1 className={Styles.title}>Title of the Post {post}</h1>
                <div className={Styles.userInfo}>
                  <div className={Styles.userPhoto}>
                  <Image
                    src="https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                    fill
                />
                  </div>
                  <div className={Styles.userName}>
                  <p>Author</p>
                  <h4>Randy Riley</h4>
                  </div>
                  <div className={Styles.date}>
                    <p>Date Posted</p>
                    <h4>9/13/2024</h4>
                  </div>
                </div>
                <p className={Styles.text}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Possimus placeat numquam amet? Explicabo possimus, numquam
                    maiores quo itaque veritatis omnis doloribus, id rem
                    distinctio magnam quas velit, molestiae sed natus.
                    Aspernatur, amet perspiciatis provident error magni nostrum
                    laborum quos placeat ad reiciendis incidunt quae quam a
                    dolores voluptatibus harum? Alias molestiae maxime ex, eum,
                    repellendus autem saepe obcaecati non quisquam fugiat quod
                    facilis qui exercitationem nam assumenda expedita esse id.
                </p>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis illo expedita corporis mollitia ducimus cumque
                    fugiat quis, hic, dolorem quidem earum nisi excepturi
                    similique explicabo labore voluptatibus. Dolores, deserunt
                    iusto! Perferendis illo expedita corporis mollitia ducimus
                    cumque fugiat quis, hic, dolorem quidem earum nisi excepturi
                    similique explicabo labore voluptatibus. Dolores, deserunt
                    iusto!
                </p>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis illo expedita corporis mollitia ducimus cumque
                    fugiat quis, hic, dolorem quidem earum nisi excepturi
                    similique explicabo labore voluptatibus. Dolores, deserunt
                    iusto! Perferendis illo expedita corporis mollitia ducimus
                    cumque fugiat quis, hic, dolorem quidem earum nisi excepturi
                    similique explicabo labore voluptatibus. Dolores, deserunt
                    iusto!
                </p>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis illo expedita corporis mollitia ducimus cumque
                    fugiat quis, hic, dolorem quidem earum nisi excepturi
                    similique explicabo labore voluptatibus. Dolores, deserunt
                    iusto! Perferendis illo expedita corporis mollitia ducimus
                    cumque fugiat quis, hic, dolorem quidem earum nisi excepturi
                    similique explicabo labore voluptatibus. Dolores, deserunt
                    iusto!
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt natus amet ipsa porro minus dolor, deserunt
                    commodi, sint culpa omnis obcaecati, tempora rerum iure.
                    Optio neque est culpa. Culpa, quis reiciendis. Tenetur
                    doloremque nam molestiae nobis rem vitae modi odit
                    aspernatur quisquam voluptas at eligendi quia, ipsa adipisci
                    nulla deserunt odio ullam voluptatibus. Perferendis quidem
                    cupiditate animi neque sit quod voluptatum nisi, tenetur
                    maxime fugit facilis harum at corrupti dicta ab dolorem
                    commodi velit natus id eius nemo nobis.
                </p>
            </div>
        </div>
    )
}
