function f(r0, r1){//function(int,int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = r0.div(r1);//div %2 = %0, %1 : int
            return r2;//return %2 : int
      }
   }
}

function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Integer(10);
            var r2 = new WyJS.Integer(2);
            var r0 = f(r1, r2);//invoke %0 = (%1, %2) IntDiv_Valid_1:f : function(int,int) -> int
            var r3 = new WyJS.Integer(5);
            if(WyJS.equals(r0, r3, true)){
               control_flow_pc = 2268;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2268:
            var r5 = new WyJS.Integer(9);
            var r6 = new WyJS.Integer(3);
            var r4 = f(r5, r6);//invoke %4 = (%5, %6) IntDiv_Valid_1:f : function(int,int) -> int
            var r7 = new WyJS.Integer(3);
            if(WyJS.equals(r4, r7, true)){
               control_flow_pc = 2269;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2269:
            var r9 = new WyJS.Integer(10);
            var r10 = new WyJS.Integer(3);
            var r8 = f(r9, r10);//invoke %8 = (%9, %10) IntDiv_Valid_1:f : function(int,int) -> int
            var r11 = new WyJS.Integer(3);
            if(WyJS.equals(r8, r11, true)){
               control_flow_pc = 2270;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 2270:
      }
   }
}

