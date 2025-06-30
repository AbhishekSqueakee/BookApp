// src/models/AccessInfo.ts
export interface AccessInfo {
    country: string;
    viewability: string;
    embeddable: boolean;
    publicDomain: boolean;
    textToSpeechPermission: string;
    epub: FormatAvailability;
    pdf: FormatAvailability;
    webReaderLink: string;
    accessViewStatus: string;
    quoteSharingAllowed: boolean;
}

export interface FormatAvailability {
    isAvailable: boolean;
}
