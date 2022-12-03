declare namespace NodeJS {
  export interface ProcessEnv {
    NEXT_PUBLIC_GTM_ID: string

    SENDINBLUE_API_KEY: string

    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: string
    RECAPTCHA_SITE_SECRET: string

    DATABASE_URL: string
  }
}
