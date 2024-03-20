import style from './Loading.module.scss';

export default function Loading({ message = 'Loading...' }) {
  return (
    <div className={style.container}>
      <div className={style.spinner}></div>
      <p className={style.loadingMessage}>{message}</p>
    </div>
  );
}
