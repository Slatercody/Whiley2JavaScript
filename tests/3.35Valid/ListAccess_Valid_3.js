function f(r0, r1){//function([int],int) -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r4 = new WyJS.Integer(0);
            if(WyJS.lt(r1, r4, false)){
               control_flow_pc = 1584;
               control_flow_repeat = true;
               continue outer;
            }
            var r5 = r0.length;//lengthof %5 = %0 : [int]
            if(WyJS.lt(r1, r5, false)){
               control_flow_pc = 1585;
               control_flow_repeat = true;
               continue outer;
            }
         case 1584:
            var r6 = new WyJS.Integer(0);
            r1 = r6;//assign %1 = %6  : int
         case 1585:
            var r8 = r0.getValue(r1);
            r7 = r8;//assign %7 = %8  : int
            r2 = r7;//assign %2 = %7  : int
            var r10 = r0.getValue(r1);
            r9 = r10;//assign %9 = %10  : int
            r3 = r9;//assign %3 = %9  : int
            if(WyJS.equals(r2, r3, true)){
               control_flow_pc = 1586;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1586:
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
            var r3 = new WyJS.Integer(2);
            var r4 = new WyJS.Integer(3);
            var r5 = new WyJS.List([r2, r3, r4], new WyJS.List('int'));
            r1 = r5.clone();//assign %1 = %5  : [int]
            r0 = r1.clone();//assign %0 = %1  : [int]
            var r6 = new WyJS.Integer(1);
            f(r0, r6);//invoke %(%0, %6) ListAccess_Valid_3:f : function([int],int) -> void
            var r7 = new WyJS.Integer(1);
            var r8 = new WyJS.Integer(2);
            var r9 = new WyJS.Integer(3);
            var r10 = new WyJS.List([r7, r8, r9], new WyJS.List('int'));
            if(WyJS.equals(r0, r10, true)){
               control_flow_pc = 1587;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1587:
            var r11 = new WyJS.Integer(2);
            f(r0, r11);//invoke %(%0, %11) ListAccess_Valid_3:f : function([int],int) -> void
            var r12 = new WyJS.Integer(1);
            var r13 = new WyJS.Integer(2);
            var r14 = new WyJS.Integer(3);
            var r15 = new WyJS.List([r12, r13, r14], new WyJS.List('int'));
            if(WyJS.equals(r0, r15, true)){
               control_flow_pc = 1588;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1588:
            var r16 = new WyJS.Integer(3);
            f(r0, r16);//invoke %(%0, %16) ListAccess_Valid_3:f : function([int],int) -> void
            var r17 = new WyJS.Integer(1);
            var r18 = new WyJS.Integer(2);
            var r19 = new WyJS.Integer(3);
            var r20 = new WyJS.List([r17, r18, r19], new WyJS.List('int'));
            if(WyJS.equals(r0, r20, true)){
               control_flow_pc = 1589;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1589:
            var r21 = new WyJS.Integer(1);
            var r22 = r21.neg();//neg %22 = %21 : int
            f(r0, r22);//invoke %(%0, %22) ListAccess_Valid_3:f : function([int],int) -> void
            var r23 = new WyJS.Integer(1);
            var r24 = new WyJS.Integer(2);
            var r25 = new WyJS.Integer(3);
            var r26 = new WyJS.List([r23, r24, r25], new WyJS.List('int'));
            if(WyJS.equals(r0, r26, true)){
               control_flow_pc = 1590;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1590:
            var r27 = new WyJS.Integer(4);
            f(r0, r27);//invoke %(%0, %27) ListAccess_Valid_3:f : function([int],int) -> void
      }
   }
}

