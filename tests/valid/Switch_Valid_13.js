function f$Y9bFXA$W(r0){//function(int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.equals(r0, new WyJS.Integer(1), true)){
               control_flow_pc = 1417;
               control_flow_repeat = true;
               continue outer;
            }
             else if(WyJS.equals(r0, new WyJS.Integer(2), true)){
               control_flow_pc = 1417;
               control_flow_repeat = true;
               continue outer;
            }
             else if(WyJS.equals(r0, new WyJS.Integer(3), true)){
               control_flow_pc = 1418;
               control_flow_repeat = true;
               continue outer;
            }
            else{
               control_flow_pc = 1416;
               control_flow_repeat = true;
               continue outer;
            }
         case 1417:
            var r1 = new WyJS.Integer(1);
            var r2 = r1.neg();//neg %2 = %1 : int
            return r2;//return %2 : int
            control_flow_pc = 1416;
            control_flow_repeat = true;
            continue outer;//goto label1416
         case 1418:
            var r3 = new WyJS.Integer(1);
            return r3;//return %3 : int
            control_flow_pc = 1416;
            control_flow_repeat = true;
            continue outer;//goto label1416
         case 1416:
            var r4 = new WyJS.Integer(10);
            return r4;//return %4 : int
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
            var r1 = new WyJS.Integer(1);
            var r0 = f$Y9bFXA$W(r1);//invoke %0 = (%1) Switch_Valid_13:f : function(int) -> int
            var r2 = new WyJS.Integer(1);
            var r3 = r2.neg();//neg %3 = %2 : int
            if(WyJS.equals(r0, r3, true)){
               control_flow_pc = 1419;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1419:
            var r5 = new WyJS.Integer(2);
            var r4 = f$Y9bFXA$W(r5);//invoke %4 = (%5) Switch_Valid_13:f : function(int) -> int
            var r6 = new WyJS.Integer(1);
            var r7 = r6.neg();//neg %7 = %6 : int
            if(WyJS.equals(r4, r7, true)){
               control_flow_pc = 1420;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1420:
            var r9 = new WyJS.Integer(3);
            var r8 = f$Y9bFXA$W(r9);//invoke %8 = (%9) Switch_Valid_13:f : function(int) -> int
            var r10 = new WyJS.Integer(1);
            if(WyJS.equals(r8, r10, true)){
               control_flow_pc = 1421;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1421:
            var r12 = new WyJS.Integer(1);
            var r13 = r12.neg();//neg %13 = %12 : int
            var r11 = f$Y9bFXA$W(r13);//invoke %11 = (%13) Switch_Valid_13:f : function(int) -> int
            var r14 = new WyJS.Integer(10);
            if(WyJS.equals(r11, r14, true)){
               control_flow_pc = 1422;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1422:
            return;
      }
   }
}

