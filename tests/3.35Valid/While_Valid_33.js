function sum(r0){//function([int]) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = new WyJS.Integer(0);
            r3 = r4;//assign %3 = %4  : int
            r1 = r3;//assign %1 = %3  : int
            var r6 = new WyJS.Integer(0);
            r5 = r6;//assign %5 = %6  : int
            r2 = r5;//assign %2 = %5  : int
            while(true){//loop (%1, %2, %7, %8, %9, %10, %11, %12, %13)
               var r9 = r0.length;//lengthof %9 = %0 : [int]
               if(WyJS.gt(r1, r9, true)){
                  control_flow_pc = 702;
                  control_flow_repeat = true;
                  continue outer;
               }
               var r10 = r0.getValue(r1);
               var r11 = r2.add(r10);//add %11 = %2, %10 : int
               r2 = r11;//assign %2 = %11  : int
               var r12 = new WyJS.Integer(1);
               var r13 = r1.add(r12);//add %13 = %1, %12 : int
               r1 = r13;//assign %1 = %13  : int
            }
         case 702:
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
            var r1 = new WyJS.List([];
, new WyJS.List('void'));
            var r0 = sum(r1);//invoke %0 = (%1) While_Valid_33:sum : function([int]) -> int
            var r2 = new WyJS.Integer(0);
            if(WyJS.equals(r0, r2, true)){
               control_flow_pc = 703;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 703:
            var r4 = new WyJS.Integer(0);
            var r5 = new WyJS.List([r4], new WyJS.List('int'));
            var r3 = sum(r5);//invoke %3 = (%5) While_Valid_33:sum : function([int]) -> int
            var r6 = new WyJS.Integer(0);
            if(WyJS.equals(r3, r6, true)){
               control_flow_pc = 704;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 704:
            var r8 = new WyJS.Integer(1);
            var r9 = new WyJS.List([r8], new WyJS.List('int'));
            var r7 = sum(r9);//invoke %7 = (%9) While_Valid_33:sum : function([int]) -> int
            var r10 = new WyJS.Integer(1);
            if(WyJS.equals(r7, r10, true)){
               control_flow_pc = 705;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 705:
            var r12 = new WyJS.Integer(1);
            var r13 = new WyJS.Integer(2);
            var r14 = new WyJS.Integer(3);
            var r15 = new WyJS.List([r12, r13, r14], new WyJS.List('int'));
            var r11 = sum(r15);//invoke %11 = (%15) While_Valid_33:sum : function([int]) -> int
            var r16 = new WyJS.Integer(6);
            if(WyJS.equals(r11, r16, true)){
               control_flow_pc = 706;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 706:
      }
   }
}

