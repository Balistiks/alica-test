import {Body, Controller, Logger, Post} from "@nestjs/common";

@Controller()
export class AppController {
    @Post()
    async main(@Body() body: any) {
        const {version, session, request} = body;
        Logger.log(body)

        return {
            version,
            session,
            response: {
                text: 'Чатадемия - это клас! Это очень круто',
                end_session: false
            }
        }
    }
}
