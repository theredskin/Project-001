let Task = function(name) {

    this.name = name;
    this.completed = false;
    
    this.complete = function() {
        console.log('completing task: ' + Task.name);
        this.completed = true;
    }
    
    this.save = function() {
        console.log("saving task: " + this.name);
    }
    
}

// ClassName.prototype.methodName = function(arguments) {   };

Task.prototype.complete = function() {
    console.log('completing task: ' + Task.name);
    this.completed = true;
};

Task.prototype.save = function() {
    console.log("saving task: " + this.name);
};

module.exports = Task;