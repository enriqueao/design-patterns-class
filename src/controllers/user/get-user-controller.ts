import { Request, Response } from "express";
import { IUserUseCase } from "src/domain/user/get-user";
import { BaseController } from "../base-controller";

export class GetUserController extends BaseController {

    private readonly userUseCase: IUserUseCase;

    constructor(userUseCase: IUserUseCase) {
        super();
        this.userUseCase = userUseCase;
    }

    async execute(req: Request, res: Response): Promise<Response> {
        const userId = 1;
        try {
            const response = await this.userUseCase.getUser(userId);
            return this.ok(req, res, 200, response);
        } catch (error) {
            this.fail(req, res, 500);
        }
    }
}
