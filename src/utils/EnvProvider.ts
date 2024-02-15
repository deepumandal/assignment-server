import dotenv from "dotenv";

dotenv.config();
interface EnvProviderI {
  PORT: string;
  CONNECTION_URL: string;
}

export const EnvProvider: EnvProviderI = {
  PORT: process.env.PORT as string,
  CONNECTION_URL: process.env.CONNECTION_URL as string,
};
