// (function(){
//     'use strict';
//     var myName = 'Daniel';
//     console.log( myName );
// })();

// (function(){
//     'use strict';
//     var obj = {
//         prop1 : {
//             prop2: {
//                 prop3: {
//                     prop31: 'prop31',
//                     prop32: 'prop32',
//                     prop33: 'prop33',
//                 }
//             }
//         }
//     };

//     // console.log(obj.prop1.prop2.prop3);
//     with( obj.prop1.prop2.prop3 ) {
//         console.log( prop31, prop32, prop33);
//     }
// })();

// (function(){
//     'use strict';
//     function Person(name, lastName, age){
//         this.name = name;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     console.log(Person( 'Daniel', 'Costa', 18 ));
//     console.log( this ); 
// })();

// (function(){
//     'use strict';
//     var myVar = 2;
//     var obj = {
//         prop1: 'prop1',
//         prop2: 'prop2',
//         prop3: 'prop3'
//     };
//     console.log(delete obj.prop1, obj);
// })();

// (function(){
//     'use strict';
//     var obj = {
//         prop1: 'prop1',
//         prop1: 'prop11',
//         prop2: 'prop2',
//         prop3: 'prop3'
//     };
//     console.log( obj ); 
// })();