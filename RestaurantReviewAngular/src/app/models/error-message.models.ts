import { HttpStatusCode } from "@angular/common/http";

export interface ErrorMessage {
    statusCode: number;
    status: HttpStatusCode;
    message: string;
}
