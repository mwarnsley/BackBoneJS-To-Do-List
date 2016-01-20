
var TodoItem = Backbone.Model.extend({
    defaults: {
        isComplete: false
    },

    validate: function(attrs){
        if (!attrs.description)
            return "Description is required.";
    },

    toggle: function(){
        this.set("isCompleted", !this.get("isCompleted"));
    }
});
