function abs(r0){//function([int]) -> [ConstrainedList_Valid_2:nat]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = new WyJS.Integer(0);
            var r1 = abs(r0, r2);//invoke %1 = (%0, %2) ConstrainedList_Valid_2:abs : function([int],ConstrainedList_Valid_2:nat) -> [ConstrainedList_Valid_2:nat]
            return r1;//return %1 : [int]
      }
   }
}

function abs(r0, r1){//function([int],ConstrainedList_Valid_2:nat) -> [ConstrainedList_Valid_2:nat]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = r0.length;//lengthof %2 = %0 : [int]
            if(WyJS.equals(r1, r2, false)){
               control_flow_pc = 1719;
               control_flow_repeat = true;
               continue outer;
            }
            return r0;//return %0 : [int]
            control_flow_pc = 1720;
            control_flow_repeat = true;
            continue outer;//goto label1720
         case 1719:
            var r4 = r0[r1];
            var r3 = abs(r4);//invoke %3 = (%4) ConstrainedList_Valid_2:abs : function(int) -> ConstrainedList_Valid_2:nat
            var r6 = r0[r1];
            var r5 = abs(r6);//invoke %5 = (%6) ConstrainedList_Valid_2:abs : function(int) -> ConstrainedList_Valid_2:nat
            r0[r1] = r5;//update %0[%1] = %5 : [int] -> [int]
            var r8 = new WyJS.Integer(1);
            var r9 = r1.add(r8);//add %9 = %1, %8 : int
            var r7 = abs(r0, r9);//invoke %7 = (%0, %9) ConstrainedList_Valid_2:abs : function([int],ConstrainedList_Valid_2:nat) -> [ConstrainedList_Valid_2:nat]
            return r7;//return %7 : [int]
         case 1720:
      }
   }
}

function abs(r0){//function(int) -> ConstrainedList_Valid_2:nat
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Integer(0);
            if(WyJS.lt(r0, r1, false)){
               control_flow_pc = 1721;
               control_flow_repeat = true;
               continue outer;
            }
            return r0;//return %0 : int
            control_flow_pc = 1722;
            control_flow_repeat = true;
            continue outer;//goto label1722
         case 1721:
            var r2 = r0.neg();//neg %2 = %0 : int
            return r2;//return %2 : int
         case 1722:
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
            var r2 = new WyJS.Integer(1);
            var r3 = new WyJS.Integer(3);
            var r4 = r3.neg();//neg %4 = %3 : int
            var r5 = new WyJS.Integer(5);
            var r6 = r5.neg();//neg %6 = %5 : int
            var r7 = new WyJS.Integer(7);
            var r8 = new WyJS.Integer(9);
            var r9 = r8.neg();//neg %9 = %8 : int
            var r10 = new WyJS.Integer(11);
            var r11 = [r2, r4, r6, r7, r9, r10];
            var r1 = r11;//assign %1 = %11  : [int]
            var r0 = r1;//assign %0 = %1  : [int]
            var r12 = abs(r0);//invoke %12 = (%0) ConstrainedList_Valid_2:abs : function([int]) -> [ConstrainedList_Valid_2:nat]
            var r0 = r12;//assign %0 = %12  : [int]
            var r13 = new WyJS.Integer(1);
            var r14 = new WyJS.Integer(3);
            var r15 = new WyJS.Integer(5);
            var r16 = new WyJS.Integer(7);
            var r17 = new WyJS.Integer(9);
            var r18 = new WyJS.Integer(11);
            var r19 = [r13, r14, r15, r16, r17, r18];
            if(WyJS.equals(r0, r19, true)){
               control_flow_pc = 1723;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1723:
      }
   }
}
