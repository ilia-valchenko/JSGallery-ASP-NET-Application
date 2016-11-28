var loadImagesViaAjax = function (startIndex, selector) {

    console.log("Start 'loadImagesViaAjax' function. Start index is: " + startIndex + ". And selector is: " + selector);

    $.ajax({
        type: 'POST',
        url: "/Gallery/AjaxImageLoader",
        data: {
            'startIndex': startIndex
        },
        dataType: 'json',
        success: function (result) {
            for (var i = 0; i < result.length; i++) {
                var img = document.createElement('img');
                $(img).attr("src", "Content/Images/" + result[i].Path);
                $(img).attr("alt", result[i].Alt);
                $(img).attr("title", result[i].Title);

                if(i != 0)
                    $(img).css("display", "none");

                $(selector).append($(img));
            }


        },
        async: true
    });
};

