import MongoIcon from "../assets/logos/databases/mongo.svg";
import MysqlIcon from "../assets/logos/databases/mysql.svg";
import PostgresIcon from "../assets/logos/databases/postgresql-logo.svg";

type Database = {
  id: string;
  name: string;
  icon: any;
};

export const databases: Array<Database> = [
  {
    id: "postgresql",
    name: "Postgresql",
    icon: PostgresIcon,
  },
  {
    id: "mysql",
    name: "MySQL",
    icon: MysqlIcon,
  },
  {
    id: "mongodb",
    name: "Mongo DB",
    icon: MongoIcon,
  },
] as const;
