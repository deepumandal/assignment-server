import dotenv from "dotenv";

dotenv.config();
interface EnvProviderI {
  PORT: string;
  CONNECTION_URL: string;
  TOKEN_SECRET: string;
}

export const EnvProvider: EnvProviderI = {
  PORT: process.env.PORT as string,
  CONNECTION_URL: process.env.CONNECTION_URL as string,
  TOKEN_SECRET: process.env.TOKEN_SECRET as string,
};
