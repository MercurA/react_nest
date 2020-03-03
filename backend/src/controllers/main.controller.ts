import {Get, Controller} from '@nestjs/common';
import { MainService } from 'src/services/main.service';
import IResponse from 'src/interfaces/IResponse';

@Controller('user')
export class MainController {
    constructor(public readonly mainService: MainService) {}

    @Get() 
    getUsers(): IResponse {
        return this.mainService.getUsers();
    }
}