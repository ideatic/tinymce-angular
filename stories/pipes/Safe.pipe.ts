import { Pipe, PipeTransform, inject } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {
  protected sanitizer = inject(DomSanitizer);

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  // eslint-disable-next-line @typescript-eslint/no-parameter-properties
  public constructor() {}

  public transform(value: string, type: string): SafeHtml {
    switch (type) {
      case 'html':
        return this.sanitizer.bypassSecurityTrustHtml(value);
      default:
        throw new Error(`Invalid safe type specified: ${type}`);
    }
  }
}
