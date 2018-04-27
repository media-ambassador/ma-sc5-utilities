import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateService } from '@ngx-translate/core';
export declare function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader;
export declare class SharedModule {
    private translate;
    constructor(translate: TranslateService);
}
