import { Request, Response } from 'express';
import { BaseController } from "./base-controller";
import { User } from "src/domain/user/user";

export class UserController extends BaseController {
  private userDomain: User;

  constructor() {
    super();
    this.userDomain = new User();
  }

  async execute(req: Request, res: Response): Promise<Response> {
    try {
      const response = await this.userDomain.getUser(1);
      return this.ok(req, res, 200, response);
    } catch (error) {
      this.fail(req, res, 500);
    }
  }
}