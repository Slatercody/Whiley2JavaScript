function test(){//method() -> void
   var control_flow_repeat = true;
   var control_flow_pc = -1;
   outer:
   while(control_flow_repeat){
      control_flow_repeat = false
      switch(control_flow_pc){
         case -1 :
            var r2 = new WyJS.Integer(1);
            var r3 = new WyJS.Integer(5);
            var r4 = {f: r2, g: r3};//newrecord %4 = (%2, %3) : {int f,int g}
            var r1 = r4;//assign %1 = %4  : {int f,int g}
            var r0 = r1;//assign %0 = %1  : {int f,int g}
            var r5 = new WyJS.Integer(2);
            var r6 = new WyJS.Integer(2);
            r0.f = r6;//update %0.f = %6 : {int f,int g} -> {int f,int g}
            var r7 = new WyJS.Integer(2);
            var r8 = new WyJS.Integer(5);
            var r9 = {f: r7, g: r8};//newrecord %9 = (%7, %8) : {int f,int g}
            if(WyJS.equals(r0, r9, true)){
               control_flow_pc = 498;
               control_flow_repeat = true;
               continue outer;
            }
            throw {name: 'Assert Failed', message: 'fail'}
         case 498:
      }
   }
}

