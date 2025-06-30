import {VolumeInfo} from './VolumeInfo';
import {SaleInfo} from './SaleInfo';
import {AccessInfo} from './AccessInfo';

export interface Book {
    items: BookItem[];
}

export interface BookItem {
    kind: string;
    id: string;
    etag: string;
    selfLink: string;
    volumeInfo: VolumeInfo;
    saleInfo: SaleInfo;
    accessInfo: AccessInfo;
    searchInfo?: SearchInfo;
}

export interface SearchInfo {
    textSnippet: string;
}