import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paragraph'
})
export class ParagraphPipe implements PipeTransform {

  transform(string: string, className: string): unknown {
    const article = string.match(/.{1,100}/g)
    return Boolean(article?.length) ? article?.map(str => `<p class=${className}>${str}</p>`).join('') : `<p class=${className}>${string}</p>`
  }

}
