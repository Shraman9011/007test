import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication } from '@nestjs/common';

let app: INestApplication | null = null;

async function bootstrap() {
  if (!app) {
    app = await NestFactory.create(AppModule);
    await app.init();
  }
  return app;
}

export async function GET(request: Request) {
  const nestApp = await bootstrap();
  const handler = nestApp.getHttpAdapter().getInstance();
  return new Promise((resolve, reject) => {
    handler(request, {
      send: (body: any) => resolve(new Response(JSON.stringify(body), { status: 200, headers: { 'Content-Type': 'application/json' } })),
      status: (statusCode: number) => {
        this.statusCode = statusCode;
        return this;
      },
      json: (body: any) => resolve(new Response(JSON.stringify(body), { status: this.statusCode || 200, headers: { 'Content-Type': 'application/json' } })),
      end: () => resolve(new Response(undefined, { status: this.statusCode || 200 }))
    }, (err: any) => {
      if (err) reject(err);
    });
  });
}

// Add other HTTP methods (POST, PUT, DELETE, etc.) as needed
// export async function POST(request: Request) { ... }
