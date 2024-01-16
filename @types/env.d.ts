declare global {
    namespace NodeJS {
      interface ProcessEnv {
        NEXT_PUBLIC_GTM_ID: string
        NEXT_PUBLIC_DOMAIN: string
        NEXT_PUBLIC_WHATSAPP_URL: string
        NEXT_PUBLIC_URL_FORM_DATA: string
      }
    }
}

export {}