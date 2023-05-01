declare namespace NodeJS {
  interface ProccessEnv {
    readonly SPREADSHEET_ID: string;
    readonly SPREADSHEET_URI: string;
    readonly TELEGRAM_BOT_KEY: string;
    readonly TELEGRAM_TARGET_CHANNEL: string;
  }
}
