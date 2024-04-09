import styles from './ArticleTitle.module.css';

export const ArticleTitle = ({ title }: { title: string }) => {
  return (
    <header>
      <h2 className={`text-white2 capitalize text-1 ${styles.articleTitle}`}>
        {title}
      </h2>
    </header>
  );
};
