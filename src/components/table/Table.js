import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@/components/table/table.template';
import {resizeTable} from '@/components/table/table.resize';
import {shouldResize} from '@/components/table/table.functions';

export class Table extends ExcelComponent {
    static className = 'excel__table';

    constructor($root) {
      super($root, {
        listeners: ['mousedown'],
      });
    }

    toHTML() {
      return createTable(20);
    }

    onMousedown(event) {
      if (shouldResize(event)) {
        resizeTable(this.$root, event);
      }
    }
}
