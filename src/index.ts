import express from 'express';
import { GetUserController } from './controllers/user/get-user-controller';
import { UserRepository } from './data-access/user-repository';
import { UserRepositoryMongo } from './data-access/user-repository-mongo';
import { User } from './domain/user/get-user';

const app = express();
const port = process.env.PORT;


//const userRepository = new UserRepository();

const userRepositoryMongo = new UserRepositoryMongo();
const userUseCase = new User(userRepositoryMongo);
const getUserController = new GetUserController(userUseCase);

app.get("/", getUserController.execute.bind(getUserController));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
