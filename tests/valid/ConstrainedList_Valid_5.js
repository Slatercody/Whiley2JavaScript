function g$Y9bFXA$W(r0){//function(int) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Integer(0);
            if(WyJS.lt(r0, r1, true)){
               control_flow_pc = 1790;
               control_flow_repeat = true;
               continue outer;
            }
            var r2 = new WyJS.Integer(125);
            if(WyJS.lt(r0, r2, false)){
               control_flow_pc = 1791;
               control_flow_repeat = true;
               continue outer;
            }
         case 1790:
            var r3 = new WyJS.Integer(1);
            return r3;//return %3 : int
            control_flow_pc = 1792;
            control_flow_repeat = true;
            continue outer;//goto label1792
         case 1791:
            return r0;//return %0 : int
         case 1792:
            return;
      }
   }
}

function f$Z9bF5D527RWz(r0){//function(int) -> int[]
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = g$Y9bFXA$W(r0);//invoke %1 = (%0) ConstrainedList_Valid_5:g : function(int) -> int
            var r2 = new WyJS.List([r1], new WyJS.Type.List(new WyJS.Type.Int()));
            return r2;//return %2 : int[]
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
            var r3 = new WyJS.Integer(0);
            var r2 = f$Z9bF5D527RWz(r3);//invoke %2 = (%3) ConstrainedList_Valid_5:f : function(int) -> int[]
            var r1 = r2.clone(new WyJS.Type.Int());//assign %1 = %2  : int[]
            var r0 = r1.clone(new WyJS.Type.Int());//assign %0 = %1  : int[]
            var r4 = new WyJS.Integer(1);
            var r5 = new WyJS.List([r4], new WyJS.Type.List(new WyJS.Type.Int()));
            if(WyJS.equals(r0, r5, true)){
               control_flow_pc = 1793;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1793:
            return;
      }
   }
}

