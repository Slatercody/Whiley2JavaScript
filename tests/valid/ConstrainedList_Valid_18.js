function f(r0){//function([ConstrainedList_Valid_18:nat]) -> [int]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            return r0;//return %0 : [int]
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
            var r3 = new WyJS.Integer(1);
            var r4 = new WyJS.Integer(2);
            var r5 = new WyJS.Integer(3);
            var r6 = [r3, r4, r5];
            var r2 = f(r6);//invoke %2 = (%6) ConstrainedList_Valid_18:f : function([ConstrainedList_Valid_18:nat]) -> [int]
            var r1 = r2;//assign %1 = %2  : [int]
            var r0 = r1;//assign %0 = %1  : [int]
            var r7 = new WyJS.Integer(1);
            var r8 = new WyJS.Integer(2);
            var r9 = new WyJS.Integer(3);
            var r10 = [r7, r8, r9];
            if(WyJS.equals(r0, r10, true)){
               control_flow_pc = 167;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 167:
      }
   }
}

