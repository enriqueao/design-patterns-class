import { Request, Response } from "express";
import { IUserDomain } from "src/domain/interfaces";
import { User } from "src/domain/User";
import { BaseController } from "./base-controller";

export default class UserController extends BaseController {
  private userDomain: IUserDomain;

  constructor() {
    super();
    this.userDomain = new User();
  }

  async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    try {
      const now = await this.userDomain.getUser();
      return this.ok(request, response, 200, now);
    } catch (error) {
      console.log(error);
      return this.ok(request, response, 500);
    }
  }
}