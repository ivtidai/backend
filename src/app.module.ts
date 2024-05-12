import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SharedOrmLibraryModule } from 'shared-orm-library';
@Module({
  imports: [SharedOrmLibraryModule.forRoot()],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
