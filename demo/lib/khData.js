$(function () {

    var itemIndex = 0;

    var tabLoadEndArray = [false];
    var tabLenghtArray = [18];
    var tabScroolTopArray = [0];
    
    // dropload
    var dropload = $('.khfxWarp').dropload({
        scrollArea: window,
        domDown: {
            domClass: 'dropload-down',
            domLoad: '<div class="dropload-load"><span class="loading"></span>加载中...</div>',
            domNoData: '<div class="dropload-noData">已无数据</div>'
        },
        loadDownFn: function (me) {
            setTimeout(function () {
                if (tabLoadEndArray[itemIndex]) {
                    me.resetload();
                    me.lock();
                    me.noData();
                    me.resetload();
                    return;
                }
                var result = '';
                for (var index = 0; index < 10; index++) {
                    if (tabLenghtArray[itemIndex] > 0) {
                        tabLenghtArray[itemIndex]--;
                    } else {
                        tabLoadEndArray[itemIndex] = true;
                        break;
                    }
                    if (itemIndex == 0) {
                        result
                        += ''
                        + '    <hgroup class="khfxRow">'
                        + '      <div class="mid" style="height:50px">'
                        + '        <span><label>昵称：</label>弦上漫步</span> '
                        + '        <span><label>账号：</label>' + tabLenghtArray[itemIndex] + '</span> '
                        + '      </div>'
                        + '    </hgroup>';
                    }
                }
                $('.khfxPane').append(result);
                me.resetload();
            }, 500);
        }
    });



});