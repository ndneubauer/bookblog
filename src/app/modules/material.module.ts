import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
    imports:
    [
        BrowserAnimationsModule,
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule
    ],
    exports:
    [
        BrowserAnimationsModule,
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule
    ]
})
export class MaterialModule {}
