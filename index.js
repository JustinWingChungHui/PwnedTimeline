$( document ).ready(function() {
    Index.Init();
});

var Index = {
    
    Init : function() {
        $.ajax({
            url: 'https://haveibeenpwned.com/api/v2/breaches',
            dataType: "json",
            type: "get"     
        })
        .done(Index.ShowResults);
    },

    ShowResults : function(data) {
        var viewModel = ko.mapping.fromJS(data);
        ko.applyBindings(viewModel);
        $('.js-timeline').Timeline();
    },
};
