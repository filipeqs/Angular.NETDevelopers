import { PaymentType } from './PaymentType';

export class Transaction {
  userTransactionId: number;
  emailId: string;
  amount: number;
  transactionDateTime: Date;
  paymentTypeId: PaymentType;
  status: boolean;

  constructor(
    userTransactionId: number,
    emailId: string,
    amount: number,
    transactionDateTime: Date,
    paymentTypeId: PaymentType,
    status: boolean
  ) {
    this.userTransactionId = userTransactionId;
    this.emailId = emailId;
    this.amount = amount;
    this.transactionDateTime = transactionDateTime;
    this.paymentTypeId = paymentTypeId;
    this.status = status;
  }
}
