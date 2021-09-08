# Products Enrichment API

## This project uses Clean Architecture approach introduced by Robert C. Martin

![image](https://blog.cleancoder.com/uncle-bob/images/2012-08-13-the-clean-architecture/CleanArchitecture.jpg)

## Project's directory stucture

```text
└ application                   → Application services layer
    └ use_cases                 → Application business rules
    └ actions                   → External API request actions
    └ helpers                   → Application logic helper functions
└ infrastructure                → Frameworks, Drivers, DB, UI, External Interfaces layer
    └ config                    → Application configuration files, utils
        └ bootstrap             → Application environment setup
        └ constants             → Application-wide used constants
        └ types                 → Application-wide used type definitions
        └ utils                 → Environment utils
└ interface                     → Presenters, Controllers and Gateways
    └ controllers               → Express.js route handlers
    └ routers                   → Express.js routes
 └ index.ts                     → Application's entry point
 ```

## Running The App

```bash
npm i
npm run setup
npm run dev
```
