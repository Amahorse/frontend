import { NgStyle, NgTemplateOutlet } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslationService } from '@shared/libs/language/translation.service';
import { TranslateModule } from '@ngx-translate/core';
import { profileService } from '@elements/users/profile.service';
import { AuthService } from '@shared/libs/auth/auth.service';
import { Router } from '@angular/router';

import {
  AvatarComponent,
  BadgeComponent,
  BreadcrumbRouterComponent,
  ButtonDirective,
  ColorModeService,
  ContainerComponent,
  DropdownComponent,
  DropdownDividerDirective,
  DropdownHeaderDirective,
  DropdownItemDirective,
  DropdownMenuDirective,
  DropdownToggleDirective,
  FormControlDirective,
  FormDirective,
  HeaderComponent,
  HeaderNavComponent,
  HeaderTogglerDirective,
  InputGroupComponent,
  InputGroupTextDirective,
  NavItemComponent,
  NavLinkDirective,
  ProgressBarDirective,
  ProgressComponent,
  SidebarToggleDirective,
  TextColorDirective,
  ThemeDirective
} from '@coreui/angular-pro';

import { IconDirective } from '@coreui/icons-angular';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
  standalone: true,
  imports: [ContainerComponent, HeaderTogglerDirective, SidebarToggleDirective, IconDirective, HeaderNavComponent, NavItemComponent, NavLinkDirective, RouterLink, RouterLinkActive, NgTemplateOutlet, BreadcrumbRouterComponent, ThemeDirective, DropdownComponent, DropdownToggleDirective, TextColorDirective, AvatarComponent, DropdownMenuDirective, DropdownHeaderDirective, DropdownItemDirective, BadgeComponent, DropdownDividerDirective, ProgressBarDirective, ProgressComponent, InputGroupComponent, InputGroupTextDirective, FormControlDirective, ButtonDirective, NgStyle, FormDirective, TranslateModule]
})
export class DefaultHeaderComponent extends HeaderComponent {

  profile: any;

  readonly #colorModeService = inject(ColorModeService);
  readonly colorMode = this.#colorModeService.colorMode;

  translationService = inject(TranslationService);


  readonly colorModes = [
    { name: 'light', text: 'Light', icon: 'cilSun' },
    { name: 'dark', text: 'Dark', icon: 'cilMoon' },
    { name: 'auto', text: 'Auto', icon: 'cilContrast' }
  ];

  readonly icons = computed(() => {
    const currentMode = this.colorMode();
    return this.colorModes.find(mode => mode.name === currentMode)?.icon ?? 'cilSun';
  });

  constructor(profile$: profileService, private auth$: AuthService,  private router: Router) {
    super();

    //TODO: se questa da errore buttare fuori
    profile$.get().subscribe(profile => {
      this.profile = profile;
    });

  }


  //TODO: da implementare quelli veri in base a lingua config e corrente
  public langIcon(lang: string) {
    return lang === 'en' ? 'Gb' : 'It';
  }

  public logout() {
   
    this.auth$.logout().subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (error) => { 
        alert(error.message);
      }
    });

  }

  
}
