(function(){
    // var myObject = {
    //     myProperty: 1,
    //     init: function init(){
    //         return this.myProperty;
    //     }
    // };
    // console.log( myObject.init() );

    function myFunction(){
        return this;
    }
    console.log('myFunction ', myFunction() );

    var myObject = {
        myProperty: 1,
        init: function init(){
            return this;
        }
    };
    console.log( 'myObject ',  myObject.init() );

    function MyConstructor(){
        this.prop1 = 'prop1';
        this.prop2 = 'prop2';
    }
    var constructor = new MyConstructor();
    console.log( 'MyConstructor', constructor );
    console.log( prop1 );

})();