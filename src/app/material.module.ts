import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';



const MaterialComponents = [BrowserAnimationsModule, MatMenuModule, MatTabsModule, MatToolbarModule,
  MatFormFieldModule, MatButtonModule, MatStepperModule, MatIconModule,MatGridListModule]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialComponents,
    FontAwesomeModule,
    
  ],
  exports: [MaterialComponents],
})
export class MaterialModule {
  constructor() {
    library.add(fas, fab);
  }
 }
