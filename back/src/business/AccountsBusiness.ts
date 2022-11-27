import { AccountDatabase } from "../data/AccountDatabase";
import { CustomError } from "../error/CustomError";
import { IdGenerator } from "../services/idGenerator";
import { Accounts, AccountsDTO } from "../types/types";

const idGenerator = new IdGenerator;

export class AccountBusiness {
    public createAccount = async (newAccount: AccountsDTO) => {
        try {
            const { balance, statement } = newAccount;

            if (!balance) {
                throw new CustomError(400, 'Balance not found.');
            }

            
           const id: string = idGenerator.generatorId();

            const account: Accounts = {
                id,
                balance,
                statement  
            };

            const accountDatabase = new AccountDatabase();
            await accountDatabase.insertAccount(account);
           
            return id;
        } catch (error: any) {
            throw new CustomError(400, error.message);
        }
    }
}
