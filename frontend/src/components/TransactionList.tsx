import React, { ReactElement } from "react";
import Transaction from "./Transaction";
import styles from "../Main.module.css";

interface Props {
  transactionList: Transaction[];
  deleteTransaction: HandleDeleteTransaction;
}

export default function TransactionList({
  transactionList,
  deleteTransaction,
}: Props): ReactElement {
  return (
    <div className={styles.tableStyle}>
      <table>
        <thead>
          <tr>
            <th>Thời Gian</th>
            <th>Mục Đích</th>
            <th>Số Tiền</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {transactionList.map((transaction) => (
            <Transaction
              key={transaction.id}
              transaction={transaction}
              deleteTransaction={deleteTransaction}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
