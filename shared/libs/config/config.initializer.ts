import { configService } from './config.service';

export function configInitializer(configService: configService) {
   return () => configService.get()
}