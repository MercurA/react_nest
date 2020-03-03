import { Injectable } from '@nestjs/common';
import IUser from 'src/interfaces/IUser';
import IResponse from 'src/interfaces/IResponse';

@Injectable()
export class MainService {
    public template = "<h1>TEST</h1>";
    
    public getMain(): string {
        return this.template;
    }

    public getUsers(): IResponse {
        const user: IUser[] = [{
            name: 'John',
            age: 12,
            location: 'NY'
        }];

        return {
            success: true,
            data: user
        };
    }
}