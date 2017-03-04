import { Injectable, Type } from '@angular/core';
import {
  ModalDemoComponent,
  DialogDemoComponent,
  AlertBoxDemoComponent,
  BadgeDemoComponent,
  PaginationDemoComponent,
  PagerDemoComponent,
  PanelDemoComponent,
  AccordionDemoComponent,
  ActionButtonDemoComponent,
  RatingDemoComponent,
  TabsDemoComponent,
  TooltipDemoComponent,
  PopoverDemoComponent,
  DatePickerDemoComponent,
  ProgressBarDemoComponent,
  SelectButtonDemoComponent,
  OverlayDemoComponent,
  CarouselDemoComponent,
  SwitchDemoComponent,
  MenuBarDemoComponent,
  AutoCompleteDemoComponent,
  FlowStepDemoComponent,
  // component import
} from '../../demo';
import { BreadcrumbsDemoComponent } from '../../demo/breadcrumbs/breadcrumbs-demo.component';

@Injectable()
export class DemoConfigService {
  gettingStarted = {
    readMe: require('!html-loader!markdown-loader!../../exports/README.md')
  };

  components: { name: string, cmp: Type<any>, directory?: string, readMe?: string, html?: string, ts?: string }[] = [
    {
      name: 'Modal',
      directory: 'modal',
      cmp: ModalDemoComponent,
      readMe: require('!html-loader!markdown-loader!../../exports/modal/README.md'),
      html: require('!raw-loader!../../demo/modal/modal-demo.component.html'),
      ts: require('!raw-loader!../../demo/modal/modal-demo.component.ts'),
    },
    {
      name: 'Dialog',
      directory: 'dialog',
      cmp: DialogDemoComponent,
      readMe: require('!html-loader!markdown-loader!../../exports/dialog/README.md'),
      html: require('!raw-loader!../../demo/dialog/dialog-demo.component.html'),
      ts: require('!raw-loader!../../demo/dialog/dialog-demo.component.ts'),
    },
    {
      name: 'AlertBox',
      directory: 'alert-box',
      cmp: AlertBoxDemoComponent,
      readMe: require('!html-loader!markdown-loader!../../exports/alert-box/README.md'),
      html: require('!raw-loader!../../demo/alert-box/alert-box-demo.component.html'),
      ts: require('!raw-loader!../../demo/alert-box/alert-box-demo.component.ts'),
    },
    {
      name: 'Badge',
      directory: 'badge',
      cmp: BadgeDemoComponent,
      readMe: require('!html-loader!markdown-loader!../../exports/badge/README.md'),
      html: require('!raw-loader!../../demo/badge/badge-demo.component.html'),
      ts: require('!raw-loader!../../demo/badge/badge-demo.component.ts'),
    },
    {
      name: 'Pagination',
      directory: 'pagination',
      cmp: PaginationDemoComponent,
      readMe: require('!html-loader!markdown-loader!../../exports/pagination/README.md'),
      html: require('!raw-loader!../../demo/pagination/pagination-demo.component.html'),
      ts: require('!raw-loader!../../demo/pagination/pagination-demo.component.ts'),
    },
    {
      name: 'Pager',
      directory: 'pager',
      cmp: PagerDemoComponent,
      readMe: require('!html-loader!markdown-loader!../../exports/pager/README.md'),
      html: require('!raw-loader!../../demo/pager/pager-demo.component.html'),
      ts: require('!raw-loader!../../demo/pager/pager-demo.component.ts'),
    },
    {
      name: 'Panel',
      directory: 'panel',
      cmp: PanelDemoComponent,
      readMe: require('!html-loader!markdown-loader!../../exports/panel/README.md'),
      html: require('!raw-loader!../../demo/panel/panel-demo.component.html'),
      ts: require('!raw-loader!../../demo/panel/panel-demo.component.ts'),
    },
    {
      name: 'Accordion',
      directory: 'accordion',
      cmp: AccordionDemoComponent,
      readMe: require('!html-loader!markdown-loader!../../exports/accordion/README.md'),
      html: require('!raw-loader!../../demo/accordion/accordion-demo.component.html'),
      ts: require('!raw-loader!../../demo/accordion/accordion-demo.component.ts'),
    },
    {
      name: 'ActionButton',
      directory: 'action-button',
      cmp: ActionButtonDemoComponent,
      readMe: require('!html-loader!markdown-loader!../../exports/action-button/README.md'),
      html: require('!raw-loader!../../demo/action-button/action-button-demo.component.html'),
      ts: require('!raw-loader!../../demo/action-button/action-button-demo.component.ts'),
    },
    {
      name: 'Rating',
      directory: 'rating',
      cmp: RatingDemoComponent,
      readMe: require('!html-loader!markdown-loader!../../exports/rating/README.md'),
      html: require('!raw-loader!../../demo/rating/rating-demo.component.html'),
      ts: require('!raw-loader!../../demo/rating/rating-demo.component.ts'),
    },
    {
      name: 'Tabs',
      directory: 'tabs',
      cmp: TabsDemoComponent,
      readMe: require('!html-loader!markdown-loader!../../exports/tabs/README.md'),
      html: require('!raw-loader!../../demo/tabs/tabs-demo.component.html'),
      ts: require('!raw-loader!../../demo/tabs/tabs-demo.component.ts'),
    },
    {
      name: 'Tooltip',
      directory: 'tooltip',
      cmp: TooltipDemoComponent,
      readMe: require('!html-loader!markdown-loader!../../exports/tooltip/README.md'),
      html: require('!raw-loader!../../demo/tooltip/tooltip-demo.component.html'),
      ts: require('!raw-loader!../../demo/tooltip/tooltip-demo.component.ts'),
    },
    {
      name: 'Popover',
      directory: 'popover',
      cmp: PopoverDemoComponent,
      readMe: require('!html-loader!markdown-loader!../../exports/popover/README.md'),
      html: require('!raw-loader!../../demo/popover/popover-demo.component.html'),
      ts: require('!raw-loader!../../demo/popover/popover-demo.component.ts'),
    },
    {
      name: 'DatePicker',
      directory: 'date-picker',
      cmp: DatePickerDemoComponent,
      readMe: require('!html-loader!markdown-loader!../../exports/date-picker/README.md'),
      html: require('!raw-loader!../../demo/date-picker/date-picker-demo.component.html'),
      ts: require('!raw-loader!../../demo/date-picker/date-picker-demo.component.ts'),
    },
    {
      name: 'Breadcrumbs',
      directory: 'breadcrumbs',
      cmp: BreadcrumbsDemoComponent,
      readMe: require('!html-loader!markdown-loader!../../exports/breadcrumbs/README.md'),
      html: require('!raw-loader!../../demo/breadcrumbs/breadcrumbs-demo.component.html'),
      ts: require('!raw-loader!../../demo/breadcrumbs/breadcrumbs-demo.component.ts'),
    },
    {
      name: 'ProgressBar',
      directory: 'progress-bar',
      cmp: ProgressBarDemoComponent,
      readMe: require('!html-loader!markdown-loader!../../exports/progress-bar/README.md'),
      html: require('!raw-loader!../../demo/progress-bar/progress-bar-demo.component.html'),
      ts: require('!raw-loader!../../demo/progress-bar/progress-bar-demo.component.ts'),
    },
    {
      name: 'SelectButton',
      directory: 'select-button',
      cmp: SelectButtonDemoComponent,
      readMe: require('!html-loader!markdown-loader!../../exports/select-button/README.md'),
      html: require('!raw-loader!../../demo/select-button/select-button-demo.component.html'),
      ts: require('!raw-loader!../../demo/select-button/select-button-demo.component.ts'),
    },
    {
      name: 'Overlay',
      directory: 'select-button',
      cmp: OverlayDemoComponent,
      readMe: require('!html-loader!markdown-loader!../../exports/overlay/README.md'),
      html: require('!raw-loader!../../demo/overlay/overlay-demo.component.html'),
      ts: require('!raw-loader!../../demo/overlay/overlay-demo.component.ts'),
    },
    {
      name: 'Carousel',
      directory: 'carousel',
      cmp: CarouselDemoComponent,
      readMe: require('!html-loader!markdown-loader!../../exports/carousel/README.md'),
      html: require('!raw-loader!../../demo/carousel/carousel-demo.component.html'),
      ts: require('!raw-loader!../../demo/carousel/carousel-demo.component.ts'),
    },
    {
      name: 'Switch',
      directory: 'carousel',
      cmp: SwitchDemoComponent,
      readMe: require('!html-loader!markdown-loader!../../exports/switch/README.md'),
      html: require('!raw-loader!../../demo/switch/switch-demo.component.html'),
      ts: require('!raw-loader!../../demo/switch/switch-demo.component.ts'),
    },
    {
      name: 'MenuBar',
      directory: 'menu-bar',
      cmp: MenuBarDemoComponent,
      readMe: require('!html-loader!markdown-loader!../../exports/menu-bar/README.md'),
      html: require('!raw-loader!../../demo/menu-bar/menu-bar-demo.component.html'),
      ts: require('!raw-loader!../../demo/menu-bar/menu-bar-demo.component.ts'),
    },
    {
      name: 'AutoComplete',
      directory: 'auto-complete',
      cmp: AutoCompleteDemoComponent,
      readMe: require('!html-loader!markdown-loader!../../exports/auto-complete/README.md'),
      html: require('!raw-loader!../../demo/auto-complete/auto-complete-demo.component.html'),
      ts: require('!raw-loader!../../demo/auto-complete/auto-complete-demo.component.ts'),
    },
    {
      name: 'FlowStep',
      directory: 'flow-step',
      cmp: FlowStepDemoComponent,
      readMe: require('!html-loader!markdown-loader!../../exports/flow-step/README.md'),
      html: require('!raw-loader!../../demo/flow-step/flow-step-demo.component.html'),
      ts: require('!raw-loader!../../demo/flow-step/flow-step-demo.component.ts'),
    },
    // component declare
  ];
}
