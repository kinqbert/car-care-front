import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { getAllTransactions } from "../../../api/transactions";
import { Transaction } from "../../../types/Transaction";
import { TransactionsItem } from "../../common/TransactionsItem";

export const TransactionsPageContent = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    getAllTransactions().then((response) => {
      setTransactions(response);
    });
  }, []);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.headerText}>Transactions</h1>
      </header>
      {transactions.length === 0 && (
        <p className={styles.noCarsMessage}>No sells - no money!</p>
      )}
      <ul className={styles.transactionsList}>
        {transactions.map((transaction) => (
          <TransactionsItem key={transaction._id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};
