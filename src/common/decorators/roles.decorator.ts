import { ReflectMetadata } from '@nestjs/common';

export const Roles = (...roles: string[]) => {
  console.log(roles);
  return ReflectMetadata('roles', roles);
};
