import { CustomError } from "../error/CustomError";
import { Accounts } from "../types/types";
import { BaseDatabase } from "./BaseDatabase";

export class AccountDatabase extends BaseDatabase {
  public insertAccount = async (accounts: Accounts) => {
    try {
      await AccountDatabase.connection
        .insert({
          id: accounts.id,
          balance: accounts.balance,
      })
        .into("Accounts");
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  }
}
