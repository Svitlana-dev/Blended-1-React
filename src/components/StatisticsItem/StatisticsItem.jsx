import style from './StatisticsItem.module.css';

export default function StatisticsItem({ title, total, icon: Icon }) {
  return (
    <>
      <Icon />
      <span className={style.counter}>{total}</span>
      <p className={style.text}>{title}</p>
    </>
  );
}
