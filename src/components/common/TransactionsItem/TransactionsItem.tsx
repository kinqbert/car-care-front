import { Transaction } from "../../../types/Transaction";

import styles from "./styles.module.scss";

interface Props {
  transaction: Transaction;
}

export const TransactionsItem = ({ transaction }: Props) => {
  const { _id, seller, buyer, car, date } = transaction;

  return (
    <div className={styles.transactionItem}>
      <div className={styles.transactionHeader}>
        <div className={styles.userInfoContainer}>
          <img className={styles.userAvatar} src={seller.avatarUrl} />
          <div className={styles.userTextInfoWrapper}>
            <span className={styles.transactionInfoItemTitle}>Seller</span>
            <span>{seller.name + " " + seller.surname}</span>
          </div>
        </div>

        <div
          className={styles.userInfoContainer}
          style={{ flexDirection: "row-reverse" }}
        >
          <img className={styles.userAvatar} src={buyer.avatarUrl} />
          <div
            className={styles.userTextInfoWrapper}
            style={{ textAlign: "end" }}
          >
            <span className={styles.transactionInfoItemTitle}>Buyer</span>
            <span>{buyer.name + " " + buyer.surname}</span>
          </div>
        </div>
      </div>
      <p className={styles.transactionInfoItems}>
        <div className={styles.transactionInfoItem}>
          <span className={styles.transactionInfoItemTitle}>
            Transaction ID
          </span>
          <div className={styles.transactionInfoItemLine}></div>
          <span className={styles.transactionInfoItemValue}>{_id}</span>
        </div>
        <div className={styles.transactionInfoItem}>
          <span className={styles.transactionInfoItemTitle}>Date</span>
          <div className={styles.transactionInfoItemLine}></div>
          <span className={styles.transactionInfoItemValue}>
            {new Date(date).toLocaleString()}
          </span>
        </div>
        <div className={styles.transactionInfoItem}>
          <span className={styles.transactionInfoItemTitle}>Car</span>
          <div className={styles.transactionInfoItemLine}></div>
          <span className={styles.transactionInfoItemValue}>
            {car.make + " " + car.model}
          </span>
        </div>
        <div className={styles.transactionInfoItem}>
          <span className={styles.transactionInfoItemTitle}>Value</span>
          <div className={styles.transactionInfoItemLine}></div>
          <span className={styles.transactionInfoItemValue}>
            ${car.price.toLocaleString()}
          </span>
        </div>
      </p>
    </div>
  );
};
