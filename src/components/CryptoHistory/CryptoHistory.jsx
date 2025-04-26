import style from './CryptoHistory.module.css';
import FormatDateToNow from '../../Helpers/FormatDate';

export default function CryptoHistory({ items }) {
  return (
    <table className={style.table}>
      <thead className={style.thead}>
        <tr>
          <th className={style.th}>№</th>
          <th className={style.th}>PRICE</th>
          <th className={style.th}>AMOUNT</th>
          <th className={style.th}>DATE</th>
        </tr>
      </thead>

      <tbody>
        {items.map(transaction => {
          return (
            <tr className={style.tr} key={transaction.id}>
              <td className={style.td}>{transaction.id}</td>
              <td className={style.td}>{transaction.price}</td>
              <td className={style.td}>{transaction.amount}</td>
              <td className={style.td}>{FormatDateToNow(transaction.date)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
