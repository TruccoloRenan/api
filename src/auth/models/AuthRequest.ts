import { Request } from "@nestjs/common";
import { User } from "src/user/user.entity";

export interface AuthRequest extends Request {
    user: User;
}