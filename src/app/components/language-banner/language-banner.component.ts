import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-language-banner',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './language-banner.component.html',
  styleUrl: './language-banner.component.scss'
})
export class LanguageBannerComponent {

}
