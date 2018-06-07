import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
export declare class MaSc5CustomMaterialModule {
    private iconRegistry;
    private sanitizer;
    constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer);
    private registerIcons();
}
