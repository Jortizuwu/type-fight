import { Injectable, Logger } from '@nestjs/common';
import { ILoggerServices } from 'src/common/domain/interface/logger/logger.interface';

@Injectable()
export class LoggerService extends Logger implements ILoggerServices {
  debug(context: string, message: string): void {
    if (process.env.NODE_ENV !== 'production') {
      super.debug(`[DEBUG] ${message}`, context);
    }
  }
  log(context: string, message: string): void {
    super.log(`[INFO] ${message}`, context);
  }
  error(context: string, message: string, trace?: string): void {
    super.error(`[ERROR] ${message}`, trace, context);
  }
  warn(context: string, message: string): void {
    super.warn(`[WARN] ${message}`, context);
  }
  verbose(context: string, message: string): void {
    if (process.env.NODE_ENV !== 'production') {
      super.verbose(`[VERBOSE] ${message}`, context);
    }
  }
}
