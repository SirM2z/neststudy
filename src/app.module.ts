import { Module } from '@nestjs/common';
import { UsersModuleModule } from 'users/users.module';

@Module({
  imports: [UsersModuleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
