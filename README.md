# rtntnrtnffdf

A Next.js fullstack application with NestJS API routes, Tailwind CSS, Shadcn UI, and PostgreSQL.

## Setup

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd rtntnrtnffdf
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the root of the project and populate it with your database credentials and application URL. Use the `.env.example` file as a template.
    ```bash
    cp .env.example .env
    ```
    Edit the `.env` file with your specific values, especially `DATABASE_URL`.

4.  **Set up PostgreSQL:**
    Ensure you have a PostgreSQL database running and accessible. The `DATABASE_URL` in your `.env` file should point to it.

## Running Locally

1.  **Start the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```

    The application will be available at `http://localhost:3000`.

## Project Structure

-   `src/app/`: Next.js App Router for frontend and API routes.
    -   `src/app/api/`: NestJS API routes.
-   `src/lib/`: Shared utilities, including database clients.
-   `public/`: Static assets.
-   `components/`: Reusable UI components (managed by Shadcn UI).

## Dependencies

-   **Frontend:** Next.js, React, Tailwind CSS, Shadcn UI
-   **Backend:** NestJS
-   **Database:** PostgreSQL (via Prisma)
-   **Language:** TypeScript