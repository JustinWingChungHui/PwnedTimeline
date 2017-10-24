$( document ).ready(function() {
    Index.Init();
});

var IndexViewModel = function() {
    this.TimelineEntries = ko.observableArray([]);
};

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
        var viewModel = new IndexViewModel();
        
        for(var i = 0; i < data.length; i++){
            viewModel.TimelineEntries.push({
                BreachDate : data[i].BreachDate,
                Description : data[i].Description,
            });
        }


        ko.applyBindings(viewModel);
        $('.js-timeline').Timeline();
    },
};
