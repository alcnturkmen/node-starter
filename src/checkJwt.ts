import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";

export const checkJwt = (req: Request, res: Response, next: NextFunction) => {
  const tokens = req.headers["authorization"]?.split(" ");
  let token = "";
  if(tokens != null && tokens.length > 1){
    token = tokens[1];
  }
  let jwtPayload;
  
  try {
    jwtPayload = <any>jwt.verify(token, process.env.SECRET_TOKEN);
    res.locals.jwtPayload = jwtPayload;
    var exp = jwtPayload.exp;
    var asd = (new Date().getTime() + 1) / 1000;
    if (exp < asd) {
      res.status(401).send({message:"The token has expired or is not valid!", code: 401});
      return;
    }
  } catch (error) {
    res.status(401).send({message:"The token has expired or is not valid!", code: 401});
    return;
  }
  next();
};