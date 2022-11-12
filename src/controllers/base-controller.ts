
import { Request, Response } from "express";

export abstract class BaseController {
  public abstract execute(
    request: Request,
    response: Response
  ): Promise<Response>;

  protected ok<T>(
    req: Request,
    res: Response,
    httpCode: number,
    dto?: T
  ): Response {
    if (dto) {
      res.type("application/json");
      return res.status(httpCode).json(dto);
    }
    return res.sendStatus(httpCode);
  }

  protected fail(
    req: Request,
    res: Response,
    httpCode: number,
    error: Error
  ): Response {
    console.log(error);
    return res.send("Error");
  }
}
