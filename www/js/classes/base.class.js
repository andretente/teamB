let objectMemory = [];

class Base {

  constructor(settings){
    // read defaults from the class and parent classes
    let proto = this;
    // get all defaults
    let defaults = this.allDefaults();
    // clean the settings from unwanted properties
    this.cleanSettings(defaults, settings);
    // move all defaults & settings properties
    // to this - the object being created
    Object.assign(this, defaults, settings);
    // if there is an init function call it
    if(typeof this.init == 'function'){
      this.init();
    }
  }

  defaults(){
    return {};
  }

  allDefaults(){
    // Go through parents classes ("prototypes")
    // to find all defaults
    let defaults = {}, proto = this;
    while (true){
      proto = Object.getPrototypeOf(proto);
      if(!proto.defaults){ break; }
      Object.assign(defaults,proto.defaults());
    }
    return defaults;
  }

  cleanSettings(defaults, settings){
    let defaultKeys = Object.keys(defaults);
    for(let key in settings){
      // if default does not include the property/key
      if(!defaultKeys.includes(key)){
        // then delete the property/key
        delete settings[key];
      }
    }
  }

  // A static method is common for the whole class
  // not a specific object/instance
  static fromJson(url, callback){
    // Dependent on jQuery!
    let construct = this;
    $.getJSON(url, function(arr){
      let newArr = [];
      for(let item of arr){
        newArr.push(new construct(item));
      }
      callback(newArr);
    });
  }

}
