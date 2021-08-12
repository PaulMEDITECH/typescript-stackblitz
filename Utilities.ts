export class Utilities {
  static HtmlAddItem(content:any, top:boolean = false) {
    const container = document.getElementById('root');
    const div = document.createElement('div');
    const pre = document.createElement('pre');

    pre.innerText = typeof content === 'string' ? content : JSON.stringify(content, undefined, 2);
    
    div.appendChild(pre);
    div.className = 'item';

    if(top) {
      container.insertBefore(div,container.firstChild)
    } else {
      container.appendChild(div);
    }
  }
}