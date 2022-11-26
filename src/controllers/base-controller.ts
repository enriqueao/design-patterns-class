import { Request, Response } from 'express';
export abstract class BaseController {
  public abstract execute(req: Request, res: Response): Promise<Response>;

  /**
   * name
   */
  public ok<T>(
    req: Request,
    res: Response,
    httpCode: number,
    dto?: T
  ): Response {
    if (dto) {
      return res.status(httpCode).json(dto);
    }

    return res.sendStatus(httpCode);
  }

  public fail(req: Request, res: Response, httpCode: number): Response {
    return res.status(httpCode).json({
      message: "ERROR",
      id: "customId",
    });
  }
}