// Generated by CoffeeScript 2.0.0-beta4
(function() {
  // ------------------------------------------------------------------------
  // 變數與常數設置
  // ------------------------------------------------------------------------

  // 模組名稱。
  var ClassName, EVENT_NAMESPACE, Error, Event, MODULE_NAMESPACE, NAME, Selector, Settings;

  NAME = 'progress';

  // 模組事件鍵名。
  EVENT_NAMESPACE = `.${NAME}`;

  // 模組命名空間。
  MODULE_NAMESPACE = `module-${NAME}`;

  // 模組設定。
  Settings = {
    // 消音所有提示，甚至是錯誤訊息。
    silent: false,
    // 顯示除錯訊息。
    debug: true,
    // 監聽 DOM 結構異動並自動重整快取。
    observeChanges: true,
    // 是否要在百分比達到 `100` 時，自動將進度條改為「成功」狀態。
    autoSuccess: true,
    // 緩衝條。
    buffer: {
      // 緩衝值。
      value: 0
    },
    // 初始化的進度條值。
    value: 0,
    // 多個進度條的值。
    // values
    // 進度條的最大值，會以此作為百分比的推算。
    total: 100,
    // 是否要在進度條上顯示百分比。
    text: false,
    // 當數值變動時所會呼叫的回呼函式。
    onChange: (percent, value, total) => {},
    // 當達到成功狀態時所會呼叫的回呼函式。
    onSuccess: (value, total) => {},
    // 當啟用時所會呼叫的回呼函式。
    onActive: (value, total) => {},
    // 當狀態改為錯誤時所會呼叫的回呼函式。
    onError: (value, total) => {},
    // 當呈現為警告狀態時所會呼叫的回呼函式。
    onWarning: (value, total) => {},
    // 當處於緩衝時所會呼叫的回呼函式。
    onBuffering: (bufferValue, value, total) => {},
    // 處於未知狀態時所會呼叫的回呼函式。
    onIndeterminate: () => {},
    // 處於準備中所會呼叫的回呼函式。
    onPreparing: () => {},
    // 處於已請求但仍未知時所會呼叫的回呼函式。
    onQueriedIndeterminate: () => {},
    // 當進度達到全滿時所會呼叫的回呼函式。
    onComplete: (total) => {}
  };

  // 事件名稱。
  Event = {
    CHANGE: `change${EVENT_NAMESPACE}`,
    SUCCESS: `success${EVENT_NAMESPACE}`,
    ACTIVE: `active${EVENT_NAMESPACE}`,
    ERROR: `error${EVENT_NAMESPACE}`,
    WARNING: `warning${EVENT_NAMESPACE}`,
    BUFFERING: `buffering${EVENT_NAMESPACE}`,
    INDETERMINATE: `indeterminate${EVENT_NAMESPACE}`,
    PREPARING: `preparing${EVENT_NAMESPACE}`,
    QUERIED_INDETERMINATE: `queriedindeterminate${EVENT_NAMESPACE}`,
    COMPLETE: `complete${EVENT_NAMESPACE}`
  };

  // 樣式名稱。
  ClassName = {
    BUFFERING: 'buffering',
    PREPARING: 'preparing',
    ACTIVE: 'active',
    QUERIED_INDETERMINATE: 'queried indeterminate',
    INDETERMINATE: 'indeterminate',
    SUCCESS: 'success',
    ERROR: 'error',
    WARNING: 'warning',
    BAR: 'bar',
    TEXT: 'text',
    BUFFER: 'buffer'
  };

  // 選擇器名稱。
  Selector = {
    BAR: ':scope > .bar',
    BUFFER: ':scope > .buffer.bar',
    TEXT: ':scope > .bar > .text',
    DIV: '<div>'
  };

  // 錯誤訊息。
  Error = {};

  // ------------------------------------------------------------------------
  // 模組註冊
  // ------------------------------------------------------------------------
  ts.register({NAME, MODULE_NAMESPACE, Error, Settings}, ({$allModules, $this, element, debug, settings}) => {
    var $bar, $buffer, $text, module;
    // ------------------------------------------------------------------------
    // 區域變數
    // ------------------------------------------------------------------------
    $bar = $this.find(Selector.BAR);
    $buffer = $this.find(Selector.BUFFER);
    $text = $this.find(Selector.TEXT);
    // ------------------------------------------------------------------------
    // 模組定義
    // ------------------------------------------------------------------------
    return module = {
      is: {
        success: () => {
          return $this.hasClass(ClassName.SUCCESS);
        },
        error: () => {
          return $this.hasClass(ClassName.ERROR);
        },
        warning: () => {
          return $this.hasClass(ClassName.WARNING);
        },
        active: () => {
          return $this.hasClass(ClassName.ACTIVE);
        },
        preparing: () => {
          return $this.hasClass(ClassName.PREPARING);
        },
        buffering: () => {
          return $this.hasClass(ClassName.BUFFERING);
        },
        buffer: {
          complete: () => {
            return module.get.buffer.percent() >= 100;
          }
        },
        queried: {
          indeterminate: () => {
            return $this.hasClass(ClassName.QUERIED_INDETERMINATE);
          }
        },
        indeterminate: () => {
          return $this.hasClass(ClassName.INDETERMINATE);
        },
        complete: () => {
          return module.get.percent() >= 100;
        }
      },
      get: {
        text: () => {
          return $text.html();
        },
        percent: () => {
          return parseInt(settings.value / settings.total * 100);
        },
        value: () => {
          return settings.value;
        },
        total: () => {
          return settings.total;
        },
        buffer: {
          percent: () => {
            return settings.buffer.value / settings.total * 100;
          },
          value: () => {
            return settings.buffer.value;
          },
          bar: () => {
            return $buffer.get();
          }
        },
        bar: () => {
          return $bar.get();
        }
      },
      create: {
        buffer: {
          bar: () => {
            if ($buffer.exists()) {
              return;
            }
            return $buffer = ts(Selector.DIV).addClass(`${ClassName.BUFFER} ${ClassName.BAR}`).appendTo(element);
          }
        },
        bar: () => {
          return $bar = ts(Selector.DIV).addClass(ClassName.BAR).appendTo(element);
        },
        text: () => {
          return $text = ts(Selector.DIV).addClass(ClassName.TEXT).appendTo($bar);
        }
      },
      repaint: {
        bar: () => {
          var percent;
          percent = Math.round(settings.value / settings.total * 100);
          if (percent >= 100) {
            $bar.css('width', "100%");
            if (settings.autoSuccess) {
              module.set.success();
              module.remove.warning();
              module.remove.error();
            }
            module.trigger.complete();
          } else {
            $bar.css('width', `${percent}%`);
            if (settings.autoSuccess) {
              module.remove.success();
              module.remove.warning();
              module.remove.error();
            }
          }
          if (settings.text === true) {
            return module.set.text(`${percent}%`);
          }
        },
        buffer: () => {
          var bufferPercent;
          bufferPercent = Math.round(settings.buffer.value / settings.total * 100);
          if (bufferPercent >= 100) {
            return $buffer.css('width', "100%");
          } else {
            return $buffer.css('width', `${bufferPercent}%`);
          }
        }
      },
      set: {
        percent: (percent) => {
          if (percent === module.get.percent()) {
            return $allModules;
          }
          settings.value = Math.round(percent / settings.total * 100);
          module.repaint.bar();
          module.trigger.change();
          return $allModules;
        },
        value: (value) => {
          if (value === module.get.value()) {
            return $allModules;
          }
          settings.value = value;
          module.repaint.bar();
          module.trigger.change();
          return $allModules;
        },
        increment: (value) => {
          if (settings.value === settings.total) {
            return $allModules;
          }
          settings.value = settings.value + value;
          if (settings.value > settings.total) {
            settings.value = settings.total;
          }
          module.repaint.bar();
          module.trigger.change();
          return $allModules;
        },
        decrement: (value) => {
          if (settings.value === 0) {
            return $allModules;
          }
          settings.value = settings.value - value;
          if (settings.value < 0) {
            settings.value = 0;
          }
          module.repaint.bar();
          module.trigger.change();
          return $allModules;
        },
        total: (total) => {
          settings.total = total;
          module.repaint.bar();
          return $allModules;
        },
        active: () => {
          $this.addClass(ClassName.ACTIVE);
          module.trigger.active();
          return $allModules;
        },
        warning: () => {
          module.remove.success();
          module.remove.error();
          $this.addClass(ClassName.WARNING);
          module.trigger.warning();
          return $allModules;
        },
        success: () => {
          module.remove.warning();
          module.remove.error();
          $this.addClass(ClassName.SUCCESS);
          module.trigger.success();
          return $allModules;
        },
        error: () => {
          module.remove.success();
          module.remove.warning();
          $this.addClass(ClassName.ERROR);
          module.trigger.error();
          return $allModules;
        },
        preparing: () => {
          module.reset();
          $this.addClass(ClassName.PREPARING);
          module.trigger.preparing();
          return $allModules;
        },
        buffering: () => {
          $this.addClass(ClassName.BUFFERING);
          return $allModules;
        },
        buffer: {
          percent: (percent) => {
            if (percent === module.get.buffer.percent()) {
              return $allModules;
            }
            module.set.buffering();
            module.create.buffer.bar();
            settings.buffer.value = Math.round(percent / settings.total * 100);
            module.repaint.buffer();
            module.trigger.buffering();
            return $allModules;
          },
          value: (value) => {
            if (value === module.get.buffer.value()) {
              return $allModules;
            }
            module.set.buffering();
            module.create.buffer.bar();
            settings.buffer.value = value;
            module.repaint.buffer();
            module.trigger.buffering();
            return $allModules;
          },
          increment: (value) => {
            if (settings.buffer.value === settings.total) {
              return $allModules;
            }
            module.set.buffering();
            module.create.buffer.bar();
            settings.buffer.value = settings.buffer.value + value;
            if (settings.buffer.value > settings.total) {
              settings.buffer.value = settings.total;
            }
            module.repaint.buffer();
            module.trigger.buffering();
            return $allModules;
          },
          decrement: (value) => {
            if (settings.value === 0) {
              return $allModules;
            }
            module.set.buffering();
            module.create.buffer.bar();
            settings.buffer.value = settings.buffer.value - value;
            if (settings.buffer.value < 0) {
              settings.buffer.value = 0;
            }
            module.repaint.buffer();
            module.trigger.buffering();
            return $allModules;
          }
        },
        indeterminate: () => {
          module.reset();
          $this.addClass(ClassName.INDETERMINATE);
          module.trigger.indeterminate();
          return $allModules;
        },
        queried: {
          indeterminate: () => {
            module.reset();
            $this.addClass(ClassName.QUERIED_INDETERMINATE);
            module.trigger.queried.indeterminate();
            return $allModules;
          }
        },
        text: (text) => {
          $text.html(text);
          return $allModules;
        }
      },
      remove: {
        active: () => {
          $this.removeClass(ClassName.ACTIVE);
          return $allModules;
        },
        warning: () => {
          $this.removeClass(ClassName.WARNING);
          return $allModules;
        },
        success: () => {
          $this.removeClass(ClassName.SUCCESS);
          return $allModules;
        },
        error: () => {
          $this.removeClass(ClassName.ERROR);
          return $allModules;
        },
        preparing: () => {
          $this.removeClass(ClassName.PREPARING);
          return $allModules;
        },
        buffer: () => {
          $this.removeClass(ClassName.BUFFERING);
          settings.buffer.value = 0;
          $buffer.remove();
          return $allModules;
        },
        queried: {
          indeterminate: () => {
            $this.removeClass(ClassName.QUERIED_INDETERMINATE);
            return $allModules;
          }
        },
        indeterminate: () => {
          $this.removeClass(ClassName.INDETERMINATE);
          return $allModules;
        }
      },
      complete: () => {
        module.set.value(module.get.total());
        return $allModules;
      },
      reset: () => {
        module.remove.warning();
        module.remove.success();
        module.remove.error();
        module.remove.active();
        module.remove.buffer();
        module.remove.preparing();
        module.remove.queried.indeterminate();
        module.remove.indeterminate();
        module.set.value(0);
        return $allModules;
      },
      trigger: {
        change: () => {
          return $this.trigger(Event.CHANGE);
        },
        success: () => {
          return $this.trigger(Event.SUCCESS);
        },
        active: () => {
          return $this.trigger(Event.ACTIVE);
        },
        error: () => {
          return $this.trigger(Event.ERROR);
        },
        warning: () => {
          return $this.trigger(Event.WARNING);
        },
        buffering: () => {
          return $this.trigger(Event.BUFFERING);
        },
        indeterminate: () => {
          return $this.trigger(Event.INDETERMINATE);
        },
        preparing: () => {
          return $this.trigger(Event.PREPARING);
        },
        queried: {
          indeterminate: () => {
            return $this.trigger(Event.QUERIED_INDETERMINATE);
          }
        },
        complete: () => {
          return $this.trigger(Event.COMPLETE);
        }
      },
      bind: {
        events: () => {
          $this.on(Event.CHANGE, () => {
            debug('發生 CHANGE 事件', element, module.get.percent(), module.get.value(), module.get.total());
            return settings.onChange.call(element, module.get.percent(), module.get.value(), module.get.total());
          });
          $this.on(Event.SUCCESS, () => {
            debug('發生 SUCCESS 事件', element);
            return settings.onSuccess.call(element, module.get.value(), module.get.total());
          });
          $this.on(Event.ACTIVE, () => {
            debug('發生 ACTIVE 事件', element);
            return settings.onActive.call(element, module.get.value(), module.get.total());
          });
          $this.on(Event.ERROR, () => {
            debug('發生 ERROR 事件', element);
            return settings.onError.call(element, module.get.value(), module.get.total());
          });
          $this.on(Event.WARNING, () => {
            debug('發生 WARNING 事件', element);
            return settings.onWarning.call(element, module.get.value(), module.get.total());
          });
          $this.on(Event.BUFFERING, () => {
            debug('發生 BUFFERING 事件', element);
            return settings.onBuffering.call(element, module.get.buffer.value(), module.get.value(), module.get.total());
          });
          $this.on(Event.INDETERMINATE, () => {
            debug("發生 INDETERMINATE 事件", element);
            return settings.onIndeterminate.call(element);
          });
          $this.on(Event.PREPARING, () => {
            debug("發生 PREPARING 事件", element);
            return settings.onPreparing.call(element);
          });
          $this.on(Event.QUERIED_INDETERMINATE, () => {
            debug("發生 QUERIED_INDETERMINATE 事件", element);
            return settings.onQueriedIndeterminate.call(element);
          });
          return $this.on(Event.COMPLETE, () => {
            debug("發生 COMPLETE 事件", element);
            return settings.onComplete.call(element, module.get.total());
          });
        }
      },
      // ------------------------------------------------------------------------
      // 基礎方法
      // ------------------------------------------------------------------------
      initialize: () => {
        debug('初始化進度條', element);
        if (!$bar.exists()) {
          module.create.bar();
        }
        if (!$text.exists()) {
          module.create.text();
        }
        module.repaint.bar();
        return module.bind.events();
      },
      instantiate: () => {
        return debug('實例化進度條', element);
      },
      refresh: () => {
        $bar = $this.find(Selector.BAR);
        $text = $this.find(Selector.TEXT);
        $buffer = $this.find(Selector.BUFFER);
        return $allModules;
      },
      destroy: () => {
        debug('摧毀進度條', element);
        $this.removeData(MODULE_NAMESPACE).off(EVENT_NAMESPACE);
        return $allModules;
      }
    };
  });

}).call(this);
