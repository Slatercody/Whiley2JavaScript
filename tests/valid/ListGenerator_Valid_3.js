function f$_9bFaA$0D53D5WE(r0){//function(int[][]) -> int
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r1 = new WyJS.Integer(0);
            var r2 = r0.getValue(r1);
            var r3 = r2.length();//lengthof %3 = %2 : int[]
            var r4 = new WyJS.Integer(2);
            if(WyJS.lt(r3, r4, true)){
               control_flow_pc = 1231;
               control_flow_repeat = true;
               continue outer;
            }
            var r5 = new WyJS.Integer(0);
            var r6 = r0.getValue(r5);
            var r7 = new WyJS.Integer(1);
            var r8 = r6.getValue(r7);
            return r8;//return %8 : int
            control_flow_pc = 1232;
            control_flow_repeat = true;
            continue outer;//goto label1232
         case 1231:
            var r9 = new WyJS.Integer(0);
            return r9;//return %9 : int
         case 1232:
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
            var r2 = new WyJS.Integer(1);
            var r3 = new WyJS.Integer(2);
            var r4 = new WyJS.Integer(3);
            var r5 = new WyJS.List([r2, r3, r4], new WyJS.Type.List(new WyJS.Type.Int()));
            var r6 = new WyJS.Integer(1);
            var r7 = new WyJS.List([r6], new WyJS.Type.List(new WyJS.Type.Int()));
            var r8 = new WyJS.List([r5, r7], new WyJS.Type.List(new WyJS.Type.List(new WyJS.Type.Int())));
            var r1 = r8.clone(new WyJS.Type.List(new WyJS.Type.Int()));//assign %1 = %8  : int[][]
            var r0 = r1.clone(new WyJS.Type.List(new WyJS.Type.Int()));//assign %0 = %1  : int[][]
            var r9 = f$_9bFaA$0D53D5WE(r0);//invoke %9 = (%0) ListGenerator_Valid_3:f : function(int[][]) -> int
            var r10 = new WyJS.Integer(2);
            if(WyJS.equals(r9, r10, true)){
               control_flow_pc = 1233;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 1233:
            return;
      }
   }
}

