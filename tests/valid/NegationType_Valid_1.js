function f$_9bFaJ533Xk3y2(r0){//function(any) -> !null
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            if(WyJS.is(r0, new WyJS.Type.Null())){
               control_flow_pc = 1685;
               control_flow_repeat = true;
               continue outer;
            }
            control_flow_pc = 1686;
            control_flow_repeat = true;
            continue outer;//goto label1686
         case 1685:
            var r1 = new WyJS.Integer(1);
            return r1;//return %1 : !null
            control_flow_pc = 1687;
            control_flow_repeat = true;
            continue outer;//goto label1687
         case 1686:
            return r0;//return %0 : !null
         case 1687:
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
            var r0 = f$_9bFaJ533Xk3y2(r1);//invoke %0 = (%1) NegationType_Valid_1:f : function(any) -> !null
            var r2 = new WyJS.Integer(1);
            if(WyJS.equals(r0, r2, true)){
               control_flow_pc = 1688;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1688:
            var r4 = new WyJS.Integer(1);
            var r5 = new WyJS.Integer(2);
            var r6 = new WyJS.Integer(3);
            var r7 = new WyJS.List([r4, r5, r6], new WyJS.Type.List(new WyJS.Type.Int()));
            var r3 = f$_9bFaJ533Xk3y2(r7);//invoke %3 = (%7) NegationType_Valid_1:f : function(any) -> !null
            var r8 = new WyJS.Integer(1);
            var r9 = new WyJS.Integer(2);
            var r10 = new WyJS.Integer(3);
            var r11 = new WyJS.List([r8, r9, r10], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r3, r11, true)){
               control_flow_pc = 1689;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1689:
            return;
      }
   }
}

