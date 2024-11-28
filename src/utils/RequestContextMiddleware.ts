import { Injectable, NestMiddleware } from '@nestjs/common';
import { AsyncLocalStorage } from 'async_hooks';

@Injectable()
export class RequestContextMiddleware implements NestMiddleware {
  private static storage = new AsyncLocalStorage<Map<string, any>>();

  static get() {
    return this.storage.getStore();
  }

  use(req: any, res: any, next: () => void) {
    const store = new Map<string, any>();
    const token = req.headers['authorization']?.replace('Bearer ', '');

    store.set('bearerToken', token);
    RequestContextMiddleware.storage.run(store, () => {
      next();
    });
  }
}
