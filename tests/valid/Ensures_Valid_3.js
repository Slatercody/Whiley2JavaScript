function selectOver$Z9bF1D527RWz(r0){//function(int[]) -> int[]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r7 = new WyJS.Integer(0);
            var r6 = r7;//assign %6 = %7  : int
            var r1 = r6;//assign %1 = %6  : int
            var r9 = r0.length();//lengthof %9 = %0 : int[]
            var r8 = r9;//assign %8 = %9  : int
            var r2 = r8;//assign %2 = %8  : int
            var r11 = new WyJS.Integer(0);
            var r10 = r11;//assign %10 = %11  : int
            var r3 = r10;//assign %3 = %10  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case -2:
            var r16 = r0.length();//lengthof %16 = %0 : int[]
            if(WyJS.gt(r1, r16, true)){
               control_flow_pc = 1868;
               control_flow_repeat = true;
               continue outer;
            }
            var r17 = r0.getValue(r1);
            var r18 = new WyJS.Integer(0);
            if(WyJS.lt(r17, r18, false)){
               control_flow_pc = 1869;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -3;
               control_flow_repeat = true;
               break;
            }
         case -3:
            var r19 = new WyJS.Integer(1);
            var r20 = r3.add(r19);//add %20 = %3, %19 : int
            var r3 = r20;//assign %3 = %20  : int
            control_flow_pc = 1869;
            control_flow_repeat = true;
            break;
         case 1869:
            var r21 = new WyJS.Integer(1);
            var r22 = r1.add(r21);//add %22 = %1, %21 : int
            var r1 = r22;//assign %1 = %22  : int
            control_flow_pc = -2;
            control_flow_repeat = true;
            break;
         case 1868:
            var r24 = new WyJS.Integer(0);
            var r25 = WyJS.ListGen(r24, r3, new WyJS.Type.List(new WyJS.Type.Int()));
            var r23 = r25.clone(new WyJS.Type.Int());//assign %23 = %25  : int[]
            var r4 = r23.clone(new WyJS.Type.Int());//assign %4 = %23  : int[]
            var r26 = new WyJS.Integer(0);
            var r1 = r26;//assign %1 = %26  : int
            var r28 = new WyJS.Integer(0);
            var r27 = r28;//assign %27 = %28  : int
            var r5 = r27;//assign %5 = %27  : int
            control_flow_pc = -4;
            control_flow_repeat = true;
            break;
         case -4:
            var r37 = r0.length();//lengthof %37 = %0 : int[]
            if(WyJS.gt(r1, r37, true)){
               control_flow_pc = 1874;
               control_flow_repeat = true;
               continue outer;
            }
            var r38 = r4.length();//lengthof %38 = %4 : int[]
            if(WyJS.gt(r5, r38, true)){
               control_flow_pc = 1874;
               control_flow_repeat = true;
               continue outer;
            }
            var r39 = r0.getValue(r1);
            var r40 = new WyJS.Integer(0);
            if(WyJS.lt(r39, r40, false)){
               control_flow_pc = 1875;
               control_flow_repeat = true;
               break;
            }
            else{
               control_flow_pc = -5;
               control_flow_repeat = true;
               break;
            }
         case -5:
            var r41 = r0.getValue(r1);
            var r42 = r0.getValue(r1);
            r4.setValue(r5, r42);
            var r43 = new WyJS.Integer(1);
            var r44 = r5.add(r43);//add %44 = %5, %43 : int
            var r5 = r44;//assign %5 = %44  : int
            control_flow_pc = 1875;
            control_flow_repeat = true;
            break;
         case 1875:
            var r45 = new WyJS.Integer(1);
            var r46 = r1.add(r45);//add %46 = %1, %45 : int
            var r1 = r46;//assign %1 = %46  : int
            control_flow_pc = -4;
            control_flow_repeat = true;
            break;
         case 1874:
            return r4;//return %4 : int[]
            return;
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
            var r4 = new WyJS.Integer(1);
            var r5 = new WyJS.Integer(2);
            var r6 = r5.neg();//neg %6 = %5 : int
            var r7 = new WyJS.Integer(3);
            var r8 = new WyJS.Integer(4);
            var r9 = new WyJS.List([r4, r6, r7, r8], new WyJS.Type.List(new WyJS.Type.Int()));
            var r3 = selectOver$Z9bF1D527RWz(r9);//invoke %3 = (%9) Ensures_Valid_3:selectOver : function(int[]) -> int[]
            var r2 = r3.clone(new WyJS.Type.Int());//assign %2 = %3  : int[]
            var r0 = r2.clone(new WyJS.Type.Int());//assign %0 = %2  : int[]
            var r12 = new WyJS.Integer(1);
            var r13 = new WyJS.Integer(2);
            var r14 = r13.neg();//neg %14 = %13 : int
            var r15 = new WyJS.Integer(3);
            var r16 = r15.neg();//neg %16 = %15 : int
            var r17 = new WyJS.Integer(4);
            var r18 = new WyJS.List([r12, r14, r16, r17], new WyJS.Type.List(new WyJS.Type.Int()));
            var r11 = selectOver$Z9bF1D527RWz(r18);//invoke %11 = (%18) Ensures_Valid_3:selectOver : function(int[]) -> int[]
            var r10 = r11.clone(new WyJS.Type.Int());//assign %10 = %11  : int[]
            var r1 = r10.clone(new WyJS.Type.Int());//assign %1 = %10  : int[]
            var r19 = new WyJS.Integer(1);
            var r20 = new WyJS.Integer(3);
            var r21 = new WyJS.Integer(4);
            var r22 = new WyJS.List([r19, r20, r21], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r0, r22, true)){
               control_flow_pc = 1876;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1876:
            var r23 = new WyJS.Integer(1);
            var r24 = new WyJS.Integer(4);
            var r25 = new WyJS.List([r23, r24], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r1, r25, true)){
               control_flow_pc = 1877;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1877:
            return;
      }
   }
}

