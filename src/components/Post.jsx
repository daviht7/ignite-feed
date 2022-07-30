import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src={"http://github.com/daviht7.png"}
          />
          <div className={styles.authorInfo}>
            <strong>Davi Holada</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">
          Publicado há 1 hora
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galera acabei de subir mais um projeto no meu portfolio.</p>
        <p>
          {"  "}
          <a href="">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="">#novoprojeto</a>
          {"  "}
          <a href="">#nlw</a>
          {"  "}
          <a href="">#rocketeseat</a>
        </p>
      </div>
    </article>
  );
}
