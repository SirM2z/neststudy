import { Module } from '@nestjs/common';
import { UsersModuleModule } from 'users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AuthModule, UsersModuleModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
